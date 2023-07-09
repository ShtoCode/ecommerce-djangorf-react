from django.contrib import admin
from django.urls import path, include



urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/auth/', include('shop.api.urls')),
    path('api/', include('shop.urls'))

]
