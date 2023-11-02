from django.shortcuts import render
from django.shortcuts import get_object_or_404, redirect
from apps.products.models import Product
from .models import Cart
from rest_framework import generics
from .serializers import CartSerializer# Asegúrate de importar tu modelo de productos

def add_to_cart(request, product_id):
    # Recupera el producto que deseas agregar al carrito
    product = get_object_or_404(Product, pk=product_id)
    
    # Recupera el carrito de compras del usuario (puedes ajustar esto según tu lógica de autenticación)
    cart = request.session.get('cart', {})
    
    # Verifica si el producto ya está en el carrito
    if product_id in cart:
        cart[product_id]['quantity'] += 1
    else:
        # Agrega el producto al carrito con una cantidad inicial de 1
        cart[product_id] = {
            'name': product.name,
            'price': product.price,
            'quantity': 1,
        }
    
    # Guarda el carrito de compras actualizado en la sesión
    request.session['cart'] = cart
    
    # Redirige a la página del producto o a donde desees después de agregarlo al carrito
    return redirect('product-detail', pk=product_id)


def cart_detail(request):
    cart = Cart.objects.get(user=request.user)  # Asume que estás trabajando con usuarios autenticados
    return render(request, 'cart/detail.html', {'cart': cart})



class CartList(generics.ListAPIView):
    queryset = Cart.objects.select_related('products')  # Asegúrate de que 'products' sea el nombre de la relación
    serializer_class = CartSerializer