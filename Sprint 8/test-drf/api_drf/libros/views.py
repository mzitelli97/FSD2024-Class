from rest_framework.viewsets import ModelViewSet
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status
from libros.models import Libro
from libros.serializers import *
from django.shortcuts import render

# Create your views here.
class LibroViewSet(ModelViewSet):
    queryset = Libro.objects.all()
    serializer_class = LibroSerializer

    def get_serializer_class(self):
        if self.request.method == 'GET':
            return LibroSummarySerializer
        return LibroSerializer
        

'''
GET  /api/libros/        --> list
GET  /api/libros/1/      --> retrieve
POST /api/libros/        --> create
PUT  /api/libros/1/      --> update
DELETE /api/libros/1/    --> destroy
''' 

class LibroAPI(APIView):
    # List
    def get(self, request):
        # print(request.data, request.user, request.query_params, request.headers)
        libros = Libro.objects.all()
        serializer = LibroSummarySerializer(libros, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Create
    def post(self, request):
        serializer = LibroSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        print(f"ERROR - [libros][create] - {serializer.errors}")
        return Response({'error': 'Error creating Libro'}, status=status.HTTP_400_BAD_REQUEST)


class LibroDetailAPI(APIView):
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
        
        
    
