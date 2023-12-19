from django.contrib import admin
from django.urls import path
from .views import GW

urlpatterns = [ 
    path('<str:word>/', GW.as_view(), name="word-action"),
]
   