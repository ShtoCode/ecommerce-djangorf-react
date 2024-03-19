from django.http import response
from .models import Furniture, ImageFurniture, Category, ImageCategory
from .serializers import FurnitureSerializer, CategorySerializer
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer


# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
        {
            'Endpoint': '/category/all',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of categories'
        },
        {
            'Endpoint': 'category/create',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Create a new category with data sent in post request'
        },
        {
            'Endpoint': 'category/furnitures/:category',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of furnitures'
        },
        {
            'Endpoint': 'category/update/id',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing category with data sent in post request'
        },
        {
            'Endpoint': 'furniture/all',
            'method': 'GET',
            'body': None,
            'description': 'Returns an array of furniture'
        },
        {
            'Endpoint': 'furniture/id',
            'method': 'GET',
            'body': None,
            'description': 'Returns a single furniture object'
        },
        {
            'Endpoint': 'furniture/create',
            'method': 'POST',
            'body': {'body': ""},
            'description': 'Create a new furniture with data sent in post request'
        },
        {
            'Endpoint': 'furniture/id/update',
            'method': 'PUT',
            'body': {'body': ""},
            'description': 'Creates an existing furniture with data sent in post request'},
        {
            'Endpoint': 'furniture/id/delete',
            'method': 'DELETE',
            'body': None,
            'description': 'Delete an existing furniture'
        },
    ]

    return Response(routes)


@api_view(['GET'])
def get_category_list(request):
    category = Category.objects.all()
    serializer = CategorySerializer(category, many=True)
    return Response(serializer.data)


@api_view(['POST'])
def create_category(request):
    data = request.data
    category = Category.objects.create(
        name=data['name'],
        image=data['image']
    )
    serializer = CategorySerializer(category, many=False)
    return Response(serializer.data)


@api_view(['PUT'])
def update_category(request, id):
    data = request.data
    category = Category.objects.get(id=id)
    category.name = data['name']
    category.image = data['image']
    category.save()
    serializer = CategorySerializer(category, many=False)
    return Response(serializer.data)


@api_view(['GET'])
def get_furniture_by_category(request, category):
    furniture = Furniture.objects.filter(category__name=category)
    serializer = FurnitureSerializer(furniture, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_furniture_list(request):
    furniture = Furniture.objects.all().order_by('-name')
    serializer = FurnitureSerializer(furniture, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def get_furniture_detail(request, id):
    furniture = Furniture.objects.get(id=id)
    serializer = FurnitureSerializer(furniture, many=False)
    return Response(serializer.data)


@api_view(['POST'])
def create_furniture(request):
    serializer = FurnitureSerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(serializer.data)
    else:
        return Response(serializer.errors, status=400)


@api_view(['PUT'])
def update_furniture(request, id):
    data = request.data
    furniture = Furniture.objects.get(id=id)
    serializer = FurnitureSerializer(instance=furniture, data=data)

    if serializer.is_valid():
        serializer.save()

    return serializer.data


@api_view(['DELETE'])
def delete_furniture(request, id):
    furniture = Furniture.objects.get(id=id)
    furniture.delete()
    return Response('Furniture was deleted!')
