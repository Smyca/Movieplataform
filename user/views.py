from django.contrib import messages
from django.http import HttpResponse
from django.shortcuts import redirect, render
from django.contrib.auth.decorators import login_required
from .forms import *
from django.contrib.auth import authenticate,login


# Create your views here.

def olvide_pass(request):
    if request.method == "GET":
        print("Ingreso GET")
        form=registerForm()
        
        return render(request,'registration/forget_pass.html',{'form':form})

def create_user(request):

    
    if request.method == "GET":
        print("Ingreso GET")
        form=registerForm()
        return render(request,'registration/registrarse.html',{'form':form})
    

    if request.method == 'POST':
        form = registerForm(request.POST) 
        if form.is_valid():
            print("Ingreso form valido")
            user = form.save(commit=False)
            user.username = user.username.lower()
            user.save()
            messages.success(request, 'Registro exitoso.')
            login(request, user)
            return redirect('login')
        
        else:
            print("invalido")
            return render(request, 'registration/registrarse.html', {'form': form})
    
    

def log_in(request):
        if request.method == "POST":
            form=userForm(request.POST)
            if form.is_valid():
                cd=form.cleaned_data
                user=authenticate(request,username=cd['username'],
                                password=cd['password'])
                 
                if user is not None:
                    if user.is_active:
                        login(request,user)
                        return HttpResponse('Usuario autenticado')
                     
                    else:
                        return HttpResponse('Usuario no activo') 
                else:
                    return HttpResponse('informacion erronea') 
                     
        else:

            context={'form':userForm()}
            return render(request,'registration/login.html',context)

                         
                         
 
