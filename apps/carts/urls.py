from django.urls import path
from .views import add_to_cart, cart_detail, CartList

urlpatterns = [
    path('add_to_cart/<int:product_id>/', add_to_cart, name='add_to_cart'),
    path('detail/', cart_detail, name='cart_detail'),
    path('carts/', CartList.as_view(), name='cart-list'),
    # Otras URL para gestionar el carrito, como mostrar el carrito y eliminar productos
]
