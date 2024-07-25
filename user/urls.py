from django.urls import path,include
from . import views
from .views import *
from home.views import homeLogin
from django.contrib.auth import views as auth_views
from .forms import *



urlpatterns = [
    path('', views.test),
    path('test/', views.test),
    path('registro/', views.create_user,name='registro'),
    path('login/',auth_views.LoginView.as_view(authentication_form=userForm),name='login'),
    path('logout/',auth_views.LogoutView.as_view(),name='logout'),
    
    
   
    
    
]