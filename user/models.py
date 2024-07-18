from django.db import models

# Create your models here.
class sec_user(models.Model):
    login       = models.CharField(max_length=100)
    password    = models.CharField(max_length=100)
    name        = models.CharField(max_length=100)
    email       = models.CharField(max_length=100)
    def __str__(self):
        return self.login + ' - ' + self.name

class sec_group(models.Model):
    group_id    = models.CharField(max_length=100)
    name        = models.CharField(max_length=100)
    def __str__(self):
        return self.group_id + ' - ' + self.name

class sec_user_group(models.Model):
    login       = models.ForeignKey(sec_user, on_delete=models.CASCADE)
    grupo_id    = models.ForeignKey(sec_group, on_delete=models.CASCADE)
    def __str__(self):
        return self.login +  self.grupo_id.name