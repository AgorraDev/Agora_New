from django.db import models

class Product(models.Model):
    name=models.CharField(max_length=50)
    description=models.CharField(max_length=500)
    price=models.DecimalField(max_digits=10, decimal_places=2)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    
class Variant(models.Model):
    product=models.ForeignKey(Product, on_delete=models.CASCADE, related_name='variants')
    variant_name=models.CharField(max_length=50)
    size=models.CharField(max_length=3)
    stock=models.PositiveBigIntegerField(default=0)
    created_at=models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return f"{self.variant_name} ({self.size} of {self.product.name})"