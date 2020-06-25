from django.shortcuts import render

# Create your views here.
from .models import team
from .serializers import teamSerializer
from rest_framework import generics

class teamListCreate(generics.ListCreateAPIView):
    queryset = team.objects.all()
    serializer_class = teamSerializer