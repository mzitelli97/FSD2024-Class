from rest_framework import serializers
from libros.models import Libro

class LibroSerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=256)
    genre = serializers.CharField(max_length=256)
    year = serializers.CharField(max_length=4)
    author = serializers.CharField(max_length=256)
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)
    data = serializers.CharField(max_length=256)

    def get_data(self):
        return f"{self.year} - {self.author}"

class LibroSummarySerializer(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=256)
    author = serializers.CharField(max_length=256)

class LibroSerializer(serializers.ModelSerializer):
    class Meta:
        model = Libro
        fields = "__all__"
        read_only_fields = ("id", 'created_at', 'updated_at')
