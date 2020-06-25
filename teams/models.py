from django.db import models

# Create your models here.

class team(models.Model):
    team_id=models.CharField(max_length=15, primary_key=True)
    team_name=models.CharField(max_length=50)
    member1=models.CharField(max_length=50)
    member2=models.CharField(max_length=50)
    member3=models.CharField(max_length=50)
    member4=models.CharField(max_length=50)
    team_pic=models.ImageField(upload_to='uploads/', null=True)