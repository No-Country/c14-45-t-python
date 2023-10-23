from django.db import models
from users.models import User
from products.models import Product

# Create your models here.
class Order(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    status = models.CharField(max_length=50)
    address = models.CharField(max_length=50)  
    quantity = models.PositiveIntegerField()
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    shipping_price = models.PositiveIntegerField()  
    total = models.PositiveIntegerField()  

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
