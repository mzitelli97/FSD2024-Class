from rest_framework import permissions
from libros.models import Libro

class IsAdminOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        if request.method in permissions.SAFE_METHODS:
            return True

        return request.user and request.user.is_staff

class isOwnerOrReadOnly(permissions.BasePermission):
    def has_permission(self, request, view):
        # if request.method in permissions.SAFE_METHODS:
        #     return True
        libro = Libro.objects.get(id=view.kwargs['pk'])
        return request.user == libro.owner

    def has_object_permission(self, request, view, obj):
        # if request.method in permissions.SAFE_METHODS:
        #     return True
        return request.user == obj.owner
    