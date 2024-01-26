from django.db import models
from wordbank_app.models import WordBank

class GreekWord(models.Model):
    word = models.CharField(max_length=100, default='word', unique=True)
    morphology = models.TextField(default='morphology')
    bookId=models.CharField(max_length=100, default='book', null=True)
    chapterNumber=models.CharField(max_length=100, default='chapter', null=True)
    verseNumber=models.CharField(max_length=100, default='verse', null=True)
    word_bank =models.ForeignKey(WordBank, on_delete=models.CASCADE, related_name='greekwords')