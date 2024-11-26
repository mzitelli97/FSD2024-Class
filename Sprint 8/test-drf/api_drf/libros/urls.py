from django.urls import path, include
from rest_framework.routers import DefaultRouter
from libros.views import LibroViewSet, LibroAPI, LibroDetailAPI, UserList, UserDetail

router = DefaultRouter()
router.register('v2/libros', LibroViewSet)
urlpatterns = router.urls
urlpatterns += [
    path("libros/", LibroAPI.as_view()),
    path("libros/<int:pk>/", LibroDetailAPI.as_view()),
    path("users/", UserList.as_view()),
    path("users/<int:pk>/", UserDetail.as_view()),
]