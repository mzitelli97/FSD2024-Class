from django.urls import path, include
from rest_framework.routers import DefaultRouter
from libros.views import LibroViewSet, LibroAPI, LibroDetailAPI

router = DefaultRouter()
router.register('v2/libros', LibroViewSet)
urlpatterns = router.urls
urlpatterns += [
    path("libros/", LibroAPI.as_view()),
    path("libros/<int:pk>/", LibroDetailAPI.as_view()),
]
print(urlpatterns)