from django.db import models
from user_app.models import User
from wordbank_app.models import WordBank

class Greek_Word(models.Model):
    word = models.CharField(default=None)
    morphology = models.TextField(default=None)
    # meaning = models.CharField(default=None)
    # part_of_speech = models.CharField(default=None)
    # case = models.CharField(default=None)
    # number = models.CharField(default=None)
    # gender = models.CharField(default=None)
    # mood = models.CharField(default=None)
    # tense = models.CharField(default=None)
    # voice = models.CharField(default=None)
    # person = models.CharField(default=None)
    word_bank =models.ForeignKey(WordBank, on_delete=models.CASCADE, related_name='wordbank')