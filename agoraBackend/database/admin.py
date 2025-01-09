from django.contrib import admin
from .models import Product, Variant

@admin.register(Product)
class ProductAdmin(admin.ModelAdmin):
    list_display = ('name', 'price')

@admin.register(Variant)
class VariantAdmin(admin.ModelAdmin):
    list_display = ('variant_name', 'product', 'size', 'stock')