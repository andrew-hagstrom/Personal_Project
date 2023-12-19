from django.urls import path
from .views import GreekChapter, GreekVerse, GreekChapterInfo

urlpatterns = [
    path("", GreekChapterInfo.as_view(), name="chapter"), 
    path('<str:chapterNumber>/', GreekChapter.as_view(), name="chapter"), 
    path("", GreekVerse.as_view(), name="chapter"), 
    path('<str:chapterNumber>/verse/<str:verseNumber>/', GreekVerse.as_view(), name="verse"),
]