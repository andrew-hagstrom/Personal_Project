from django.urls import path
from .views import GreekChapter, GreekVerse, GreekVerseInfo, GreekChapterInfo, ChapterTranslation

urlpatterns = [
    path("", GreekChapterInfo.as_view(), name="chapters"), 
    path('<str:chapterNumber>/', GreekChapter.as_view(), name="chapter"), 
    path('<str:chapterNumber>/translation/', ChapterTranslation.as_view(), name="translation"), 
    path("<str:chapterNumber>/verses/", GreekVerseInfo.as_view(), name="verses"), 
    path('<str:chapterNumber>/verse/<str:verseNumber>/', GreekVerse.as_view(), name="verse"),
]