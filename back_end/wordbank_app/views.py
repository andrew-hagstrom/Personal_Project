import requests
from openai import OpenAI
import re
from django.shortcuts import render
from django.db import models
from rest_framework.views import APIView
from rest_framework.response import Response
from bible_proj.settings import env  
from greekword_app.models import Greek_Word
from user_app.views import UserPermissions
from .models import WordBank
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_204_NO_CONTENT,
    HTTP_404_NOT_FOUND
)

class WordBank(UserPermissions):

    def post(self, request):
        wordbank= WordBank.objects.get(user=request.user)
        word = request.data
        new_wordbank_word = Greek_Word(word=word, word_bank=wordbank)
        new_wordbank_word.save()
        return Response(f'{new_wordbank_word.word} has been added to your word bank', status=HTTP_201_CREATED)
    
    def delete(self, request, word_id):
        pass

    def put(self, request, word_id):
        pass

# class Info(UserPermissions):
#    def get(self, request):
#         return Response({"wordbank":request.user.wordbank.pk})
    