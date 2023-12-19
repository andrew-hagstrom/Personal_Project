from django.db import models
from wordbank_app.models import WordBank

class GreekWord(models.Model):
    word = models.CharField(max_length=100, default=None, unique=True)
    morphology = models.TextField(default=None, null=True)
    word_bank =models.ForeignKey(WordBank, on_delete=models.CASCADE, related_name='greekwords')