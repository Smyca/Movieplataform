from django.shortcuts import render
from django.contrib.auth.decorators import login_required

# Create your views here.

def homeView(request):
    return render(request,'home.html')


@login_required
def homeLogin(request):
    return render(request,'homeLogin.html')

