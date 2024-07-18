from django.urls import path
from . import views

urlpatterns = [
    path('', views.test),
    path('test/', views.test),
    path('log_in/', views.log_in),
    path('create_user/', views.create_user)
]