from rest_framework import serializers
from libros.models import Libro
from django.contrib.auth.models import User
from datetime import datetime, timedelta, timezone

class LibroSerializer1(serializers.Serializer):
    id = serializers.IntegerField(read_only=True)
    title = serializers.CharField(max_length=256)
    genre = serializers.CharField(max_length=256)
    year = serializers.CharField(max_length=4)
    author = serializers.CharField(max_length=256)
    created_at = serializers.DateTimeField(read_only=True)
    updated_at = serializers.DateTimeField(read_only=True)
    data = serializers.CharField(max_length=256)
    owner = serializers.ReadOnlyField(source='owner.username')

    def get_data(self):
        return f"{self.year} - {self.author}"

class LibroSerializer(serializers.HyperlinkedModelSerializer):
    owner = serializers.ReadOnlyField(source='owner.username')

    class Meta:
        model = Libro
        fields = "__all__"
        read_only_fields = ("id", 'created_at', 'updated_at', 'owner')

class UserSerializer(serializers.ModelSerializer):
    libros_pk = serializers.PrimaryKeyRelatedField(source='libros', many=True, queryset=Libro.objects.all())
    libros = serializers.HyperlinkedRelatedField(many=True, view_name='libro-detail', read_only=True)
    popular = serializers.SerializerMethodField(read_only=True)

    def get_popular(self, obj):
        return obj.libros.all().count() > 0

    class Meta:
        model = User
        fields = ['id', 'username', 'libros', 'libros_pk', 'popular']


class LibroSummarySerializer(serializers.ModelSerializer):
    owner_details = UserSerializer(source='owner', read_only=True)
    owner = serializers.PrimaryKeyRelatedField(queryset=User.objects.all(), write_only=True)
    is_new = serializers.SerializerMethodField(read_only=True)
    # nationality = serializers.SerializerMethodField(read_only=True)

    # def get_nationality(self, obj):
    #     return obj.owner.nationality

    def get_is_new(self, obj):
        return obj.created_at > (datetime.now(timezone.utc) + timedelta(days=-1))

    def to_representation(self, instance):
        instance = super().to_representation(instance)
        instance['owner'] = instance.pop('owner_details', None)
        # instance['test'] = 'test'
        return instance

    class Meta:
        model = Libro
        fields = ["id", 'owner', 'author', 'year', 'title', 'genre', 'owner_details', 'is_new']
        read_only_fields = ("id",)