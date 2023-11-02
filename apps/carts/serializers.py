from rest_framework import serializers
from apps.products.models import Product
from .models import Cart
from rest_framework import serializers
from apps.products.models import Product
from apps.products.serializers import ProductSerializer



class CartSerializer(serializers.ModelSerializer):
    products = ProductSerializer(many=True, read_only=True)

    class Meta:
        model = Cart
        fields = '__all__'


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Product
        fields = '__all__'