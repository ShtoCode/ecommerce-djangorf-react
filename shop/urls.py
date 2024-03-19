from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('category/all', views.get_category_list, name="list-category"),
    path('category/create', views.create_category, name="create-category"),
    path('category/<int:id>/update', views.update_category, name="update-category"),
    path('category/furniture/<str:category>',
         views.get_furniture_by_category, name="furnitures-category"),
    path('furniture/all', views.get_furniture_list, name="list-furniture"),
    path('furniture/<int:id>/', views.get_furniture_detail, name="furniture"),
    path('furniture/<int:id>/update/',
         views.update_furniture, name="update-furniture"),
    path('furniture/<int:id>/delete/',
         views.delete_furniture, name="delete-furniture"),
    path('furniture/', views.create_furniture, name="create-furniture"),

]
