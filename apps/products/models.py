from django.db import models
# from users.models import User

# Create your models here.

class Category(models.Model):
    name = models.CharField(max_length=100)
    description = models.CharField(max_length=100)

class Product(models.Model):
    name = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    description = models.TextField()
    stock = models.SmallIntegerField()
    price = models.SmallIntegerField()
    images = models.ImageField(upload_to= "images/")
    # user
    # category

