from django.db import models
from apps.products.models import Product
from apps.users.models import User# Asegúrate de importar tu modelo de productos

class Cart(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)  # Asocia el carrito a un usuario (ajusta esto según tu lógica)
    products = models.ManyToManyField(Product, through='CartItem')

class CartItem(models.Model):
    cart = models.ForeignKey(Cart, on_delete=models.CASCADE)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.PositiveIntegerField(default=1)
    price = models.PositiveIntegerField(default=0)

    def total(self):
        return self.price * self.quantity
