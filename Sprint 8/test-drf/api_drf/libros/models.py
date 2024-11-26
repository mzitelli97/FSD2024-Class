from django.db import models
from django.db.models import CASCADE

# Create your models here.
class Libro(models.Model):
    title = models.CharField(max_length=256)
    genre = models.CharField(max_length=256)
    year = models.CharField(max_length=4)
    author = models.CharField(max_length=256)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    owner = models.ForeignKey('auth.User', on_delete=CASCADE, related_name='libros', default=1)

    class Meta:
        ordering = ('-created_at',)
        verbose_name = 'Libro'
        verbose_name_plural = 'Libros'
    
    def __str__(self):
        return self.title