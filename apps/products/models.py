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
    
    
class Subcategory(models.Model):
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategory_choices = (
        ('0', 'Guitarras'),
        ('1', 'Bajos'),
        ('2', 'Violines'),
        ('3', "Teclados Electrónicos"),
        ('4', "Pianos Digitales"),
        ('5', "Sintetizadores"),
        ('6', "Baterías Electrónicas"),
        ('7', "Baterías Acústicass"),
        ('8', "Percusión Étnica")
        
        # Otras subcategorías para la categoría "Cuerdas"
    )
    subcategory = models.CharField(max_length=1, choices=subcategory_choices, default='0')
    
    def __str__(self):
        return self.get_subcategory_display()

class Product (models.Model):
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=50)
    price = models.PositiveIntegerField(default=0)
    status = models.CharField(max_length=20)
    image = models.ImageField(upload_to='media/products', blank=True)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    subcategory = models.ForeignKey(Subcategory, on_delete=models.CASCADE, null=True)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    
    def __str__(self):
        return f"{self.name} - {self.brand} - {self.subcategory.get_subcategory_display()} - '$'{self.price}"
