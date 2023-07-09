from django.urls import path
from . import views

urlpatterns = [
    path('', views.getRoutes, name="routes"),
    path('furniture/all', views.get_furniture_list, name="list-furniture"),
    path('furniture/<int:id>/', views.get_furniture_detail, name="furniture"),
    path('furniture/<int:id>/update/', views.update_furniture, name="update-furniture"),
    path('furniture/<int:id>/delete/', views.delete_furniture, name="delete-furniture"),
    path('furniture/', views.create_furniture, name="create-furniture"),

]

