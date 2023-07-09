from django.http import response
from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework.serializers import Serializer
from .models import Furniture, Image
from .serializers import FurnitureSerializer


# Create your views here.

@api_view(['GET'])
def getRoutes(request):
    routes = [
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
        'description': 'Creates an existing furniture with data sent in post request'    },
    {
        'Endpoint': 'furniture/id/delete',
        'method': 'DELETE',
        'body': None,
        'description': 'Delete an existing furniture'

    },
]

    return Response(routes)

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
    data = request.data
    images = request.FILES.getlist('images')  # Obtener la lista de imágenes enviadas en la solicitud

    furniture = Furniture.objects.create(
        name=data['name'],
        description=data['description'],
        category=data['category'],
        price=data['price'],
        stock=data['stock'],
        dimensions=data['dimensions'],
        color=data['color'],
        brand=data['brand']
    )

    for image in images:
        Image.objects.create(image=image, furniture=furniture)  # Asociar cada imagen al mueble creado

    serializer = FurnitureSerializer(furniture, many=False)
    return Response(serializer.data)

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
