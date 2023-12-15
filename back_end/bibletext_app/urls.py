from django.urls import path
from .views import GreekChapter, GreekVerse

urlpatterns = [
    path('<str:chapterNumber>/', GreekChapter.as_view(), name="chapter"), 
    path('<str:chapterNumber>/verse/<str:verseNumber>/', GreekVerse.as_view(), name="verse"),
]