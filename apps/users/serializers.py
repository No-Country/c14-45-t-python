from rest_framework import serializers
from .models import User
from apps.products.serializers import ProductSerializer

class UserSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = User
        fields = ('id', 'username', 'email', 'address', 'birthdate', 'profile_image', 'products')


class RegistrationSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ('username', 'password', 'first_name', 'last_name', 'email', 'address', 'birthdate', 'profile_image')
        
        