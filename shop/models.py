from django.db import models
from django.db.models.signals import post_save
from django.dispatch import receiver


def upload_to_category_images(instance, filename):
    return 'category_images/{filename}'.format(filename=filename)


class Category(models.Model):
    name = models.CharField(max_length=150)
    image = models.ImageField(upload_to=upload_to_category_images)

    def __str__(self):
        return self.name


class ImageCategory(models.Model):
    category = models.ForeignKey(
        Category, on_delete=models.CASCADE, related_name='image_categories')
    image_url = models.ImageField(upload_to=upload_to_category_images)

    def __str__(self):
        return f"Imagen de {self.category.name}"


@receiver(post_save, sender=Category)
def create_image_category(sender, instance, created, **kwargs):
    if created:
        ImageCategory.objects.create(
            category=instance, image_url=instance.image)


def upload_to_furniture_images(instance, filename):
    return 'furniture_images/{filename}'.format(filename=filename)


class Furniture(models.Model):

    name = models.CharField(max_length=255)
    description = models.TextField()
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    price = models.IntegerField()
    stock = models.IntegerField()
    dimensions = models.CharField(max_length=100)
    color = models.CharField(max_length=100)
    brand = models.CharField(max_length=100)
    images = models.ManyToManyField(
        'ImageFurniture', related_name='furniture_images')

    def __str__(self):
        return self.name


class ImageFurniture(models.Model):
    image = models.ImageField(upload_to=upload_to_furniture_images)

    def __str__(self):
        return self.image.name
