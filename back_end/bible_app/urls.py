from django.contrib import admin
from django.urls import path
from .views import GreekBible

urlpatterns = [
    path('', GreekBible.as_view(), name="bible"), 
]
