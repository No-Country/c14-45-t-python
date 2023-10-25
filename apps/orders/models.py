from django.db import models
from apps.users.models import User
from apps.products.models import Product
from django.db.models.signals import pre_save
from django.dispatch import receiver

# Create your models here.
class Order(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50)
    address = models.CharField(max_length=50)  
    quantity = models.PositiveIntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    shipping_price = models.PositiveIntegerField()  
    total = models.PositiveIntegerField(editable=False)
    
    def calculate_total(self):
        # Realiza el cálculo del total y actualiza el campo total
        self.total = self.product.price * self.quantity + self.shipping_price


    def save(self, *args, **kwargs):
        # Llama a calculate_total antes de guardar
        self.calculate_total()
        super().save(*args, **kwargs)
        
    def __str__(self):
        return f"Orden Nro: {self.id} - Usuario: {self.user} - Valor: {self.total}"
        
    @property
    def order_detail(self):
        detailed = {
            'product_id': self.product.id,
            'product_price': self.product.price,
            'quantity': self.quantity,
            'order_id': self.id,
            'total': self.total
        }
        
        return detailed
    



