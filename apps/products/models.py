from django.db import models
from apps.users.models import User

# Create your models here.
class Category (models.Model):
    
    category = models.CharField(max_length=1, choices=(
        ('0', 'Cuerdas'),
        ('2', 'Teclados y Pianos'),
        ('3', 'Baterias y Percusión'),
        ('4', 'Viento'),
        ('5', 'Accesorios')
    ), default='0')
    
    def __str__(self):
        return self.get_category_display()
    

class Product (models.Model):
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=50)
    price = models.PositiveIntegerField(default=0)
    status = models.CharField(max_length=20)
    image = models.ImageField(upload_to='media/products', blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    description = models.TextField(max_length=300, blank=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='products')
    
    def __str__(self):
        return f"{self.name} - {self.brand} - {self.price}"
