from django import forms
from .models import login_user
from django.forms import ModelForm
from django.contrib.auth.models import User
from django.contrib.auth.forms import AuthenticationForm, UserCreationForm

class registerForm(UserCreationForm):
    username = forms.CharField(required=True,label='Usuario', widget=forms.TextInput(attrs={'class': 'form-control'}))
    email = forms.EmailField(label='Email', widget=forms.EmailInput(attrs={'class': 'form-control'}))
    password1 = forms.CharField(label='Contraseña', widget=forms.PasswordInput(attrs={'class': 'form-control'}))
    password2 = forms.CharField(label='Reingrese contraseña', widget=forms.PasswordInput(attrs={'class': 'form-control'}))

    
    class Meta:
        model=User
        fields=('username','email','password1','password2')


class userForm(AuthenticationForm):
    username = forms.CharField(label='Usuario', widget=forms.TextInput(attrs={'class': ' form-control'}))
    password = forms.CharField(label='Contraseña', widget=forms.PasswordInput(attrs={'class': 'form-control'}))
      


    
       
