from django.http import HttpResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from .forms import *
# Create your views here.

def test(request):
    return HttpResponse("<h1>Test Page</h1>")

def create_user(request):
    return HttpResponse("<h1>Crear Usuario</h1>")

def log_in(request):
 
        context={'form':userForm()}
        return render(request,'registration/login.html',context)
    
