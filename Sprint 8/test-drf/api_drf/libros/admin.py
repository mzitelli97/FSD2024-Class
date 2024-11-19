from django.contrib import admin
from libros.models import Libro

# Register your models here.
@admin.register(Libro)
class LibrosAdmin(admin.ModelAdmin):
    list_display = ("title", "author", "genre")

