from django.contrib import admin
from django.urls import path
from .views import GreekWord

urlpatterns = [ 
    path('<str:word>/', GreekWord.as_view(), name="word"),
]
   