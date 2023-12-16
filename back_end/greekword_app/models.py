from django.db import models
from user_app.models import User
from wordbank_app.models import WordBank

class Greek_Word(models.Model):
    word = models.CharField(default=None)
    morphology = models.TextField(default=None)
    word_bank =models.ManyToManyField(WordBank, related_name='greekwords')