from django.contrib import admin
from .models import sec_user, sec_group, sec_user_group

# Register your models here.
admin.site.register(sec_user)
admin.site.register(sec_group)
admin.site.register(sec_user_group)