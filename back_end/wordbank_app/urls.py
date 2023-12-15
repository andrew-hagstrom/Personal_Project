from django.urls import path
from .views import WordBank

urlpatterns = [
path('<int:word_bank_id>', WordBank.as_view(), name="word_bank"), 
]