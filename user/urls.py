from django.urls import path
from . import views

urlpatterns = [
    path('', views.test),
    path('create_user', views.create_user)
]