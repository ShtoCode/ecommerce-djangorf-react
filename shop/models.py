from django.db import models

class Furniture(models.Model):

    name = models.CharField(max_length=255)
    description = models.TextField()
    category = models.CharField(max_length=100)
    price = models.IntegerField()
    stock = models.IntegerField()
    dimensions = models.CharField(max_length=100) 
    color = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    images = models.ManyToManyField('Image', related_name='furniture_images')

    def __str__(self):
        return self.name

class Image(models.Model):
    image = models.ImageField(upload_to='furniture_images')
    def __str__(self):
        return self.image.name
