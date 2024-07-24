from django.urls import path,include
from . import views
from home.views import homeLogin



urlpatterns = [
    path('', views.test),
    path('test/', views.test),
    path('create_user/', views.create_user),
    path('login/', views.log_in),

    

    
]