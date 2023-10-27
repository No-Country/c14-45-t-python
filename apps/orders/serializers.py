from rest_framework import serializers
from .models import Order
from apps.users.models import User
from apps.products.models import Product

class OrderSerializer(serializers.ModelSerializer):
    user = serializers.SerializerMethodField()  # Campo personalizado para el nombre de usuario
    product = serializers.SerializerMethodField()  # Campo personalizado para el nombre del producto

    class Meta:
        model = Order
        fields = ['id', 'date', 'status', 'address', 'quantity', 'shipping_price', 'total', 'user', 'product']

    def get_user(self, obj):
        # Obtén el nombre del usuario en lugar de su ID
        return obj.user.username

    def get_product(self, obj):
        # Obtén el nombre del producto en lugar de su ID
        return obj.product.name
