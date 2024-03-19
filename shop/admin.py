from django.contrib import admin
from .models import Category, ImageCategory, Furniture, ImageFurniture


# Register your models here.
admin.site.register(Category)
admin.site.register(ImageCategory)
admin.site.register(Furniture)
admin.site.register(ImageFurniture)
