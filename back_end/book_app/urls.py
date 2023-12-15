from django.contrib import admin
from django.urls import path
from .views import GreekBook

urlpatterns = [
    path('<str:bookID>/', GreekBook.as_view(), name='GreekBook')
]