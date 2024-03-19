from rest_framework import serializers
from .models import Furniture, ImageFurniture, Category, ImageCategory


class ImageSerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageFurniture
        fields = '__all__'


class FurnitureSerializer(serializers.ModelSerializer):
    images = ImageSerializer(many=True)

    class Meta:
        model = Furniture
        fields = '__all__'

    def create(self, validated_data):
        images_data = validated_data.pop('images', [])
        furniture = Furniture.objects.create(**validated_data)

        for image_data in images_data:
            ImageFurniture.objects.create(furniture=furniture, **image_data)

        return furniture


class CategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ImageCategorySerializer(serializers.ModelSerializer):
    class Meta:
        model = ImageCategory
        fields = '__all__'
