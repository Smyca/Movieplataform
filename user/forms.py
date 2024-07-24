from django import forms
from .models import login_user
from django.forms import ModelForm


class userForm(ModelForm):
   
    class Meta:
        model=login_user
        fields='__all__'
       