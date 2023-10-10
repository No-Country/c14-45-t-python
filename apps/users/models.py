from django.db import models
from django.contrib.auth.models import User

# Create your models here.

class User(models.Model):
    first_name = models.CharField(max_length=100)
    last_name = models.CharField(max_length=100)
    address = models.TextField()
    phone = models.CharField(max_length=20)
    email = models.EmailField()
    password = models.CharField(max_length=50)
    birth_date = models.DateField(null=True)
    is_verified = models.BooleanField(default=False)


class Rol(models.Model):
    pass