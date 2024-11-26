from rest_framework.viewsets import ModelViewSet, ViewSet
from rest_framework.views import APIView
from rest_framework import generics
from rest_framework import permissions
from rest_framework.decorators import api_view, action
from rest_framework.reverse import reverse
from rest_framework.authentication import BasicAuthentication
from rest_framework.throttling import SimpleRateThrottle
from rest_framework.response import Response
from rest_framework.pagination import LimitOffsetPagination
from rest_framework import status
from libros.models import Libro
from libros.serializers import *
from libros.permissions import *
from django.shortcuts import render

# Create your views here.
class LibroViewSet(ModelViewSet):
    queryset = Libro.objects.all().select_related('owner')
    serializer_class = LibroSummarySerializer
    authentication_classes = [BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated, permissions.DjangoModelPermissions]
    pagination_class = LimitOffsetPagination
    throttle_classes = [SimpleRateThrottle]
    

    # def get_serializer_class(self):
    #     if self.request.method == 'GET':
    #         return LibroSummarySerializer
    #     return LibroSerializer

    def perform_create(self, request, serializer):
        return serializer.save(owner=request.user)

    @action(detail=False, methods=['GET'])
    def count(self, request):
        count = self.queryset.count()
        return Response({'data': count}, status=status.HTTP_200_OK)

    @action(detail=True, methods=['POST'])
    def change_owner(self, request, pk):
        obj = self.serializer_class(self.queryset(id=pk), data=request.data)
        if obj.is_valid():
            obj.save()
            return Response(obj.data, status=status.HTTP_200_OK)
        return Response(obj.errors, status=status.HTTP_400_BAD_REQUEST)




class ExampleGenericView(ViewSet):
    def create(self, request):
        pass

    def retrieve(self, request, pk, *args, **kwargs):
        pass
        

@api_view(['GET'])
def api_root(request, format=None):
    return Response({
        'users': reverse('user-list', request=request, format=format),
        'libros': reverse('libro-list', request=request, format=format)
    })

'''
GET  /api/libros/        --> list
GET /api/libros/count/   --> count
GET  /api/libros/1/      --> retrieve
POST /api/libros/        --> create
PUT  /api/libros/1/      --> update
PATCH /api/libros/1/     --> partial_update
DELETE /api/libros/1/    --> destroy
''' 

class LibroAPI(APIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]

    # List
    def get(self, request):
        # print(request.data, request.user, request.query_params, request.headers)
        libros = Libro.objects.all()
        serializer = LibroSerializer(libros, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Create
    def post(self, request):
        serializer = LibroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(owner=request.user)
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(f"ERROR - [libros][create] - {serializer.errors}")
        return Response({'error': 'Error creating Libro'}, status=status.HTTP_400_BAD_REQUEST)


class LibroDetailAPI(APIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [isOwnerOrReadOnly]

    # Retrieve
    def get(self, request, pk):
        print(request.data, request.user, request.query_params, pk)
        libros = Libro.objects.get(pk=pk)
        serializer = LibroSerializer(libros)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Update
    def put(self, request, pk):
        libro = Libro.objects.get(pk=pk)
        serializer = LibroSerializer(libro, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # Destroy
    def delete(self, request, pk):
        libro = Libro.objects.get(pk=pk)
        serializer = LibroSerializer(libro)
        libro.delete()
        return Response(serializer.data, status=status.HTTP_200_OK)


# INSERT INTO libros_libro
# VALUES ('harry potter 2', 'j.k. rowling')

# CREATE TABLE libros (
#     id INTERGET PRIMARY KEY AUTOINCREMENT
# )
        

class UserList(generics.ListAPIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveAPIView):
    authentication_classes = [BasicAuthentication]
    permission_classes = [permissions.IsAuthenticated]
    queryset = User.objects.all()
    serializer_class = UserSerializer

    
