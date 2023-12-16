from django.urls import path
from .views import WordBank

urlpatterns = [
# path("", Info.as_view()),
path('<int:word_bank_id>', WordBank.as_view()), 
]