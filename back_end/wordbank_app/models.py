from django.db import models;
from user_app.models import User;


class WordBank(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='wordbank')

  