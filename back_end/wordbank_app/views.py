import requests
from openai import OpenAI
import re
from django.shortcuts import render
from django.db import models
from rest_framework.views import APIView
from rest_framework.response import Response
from bible_proj.settings import env  
from greekword_app.models import GreekWord
from user_app.views import UserPermissions
from .models import WordBank
from .serializers import WordBankSerializer
from greekword_app.serializers import GreekWordSerializer
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_204_NO_CONTENT,
    HTTP_404_NOT_FOUND
)

class WBInfo(UserPermissions):
    def get(self, request):
        wordbank=WordBank.objects.get(user=request.user)
        greekwords = GreekWord.objects.filter(word_bank=wordbank)
        ser_greekwords = GreekWordSerializer(greekwords, many=True)
        return Response(ser_greekwords.data, status=HTTP_200_OK)
    
#     def post(self, request):
#         wordbank= WordBank.objects.get(user=request.user)
#         word = request.data.get('word')
#         ser_word = GreekWordSerializer(data={'word': word, 'word_bank': wordbank.id})
#         if ser_word.is_valid():
#             ser_word.save()
#         return Response(f'{word} has been added to your word bank', status=HTTP_201_CREATED)      

# class WB(UserPermissions):
#     def delete(self, request, id):
#         wordbank= WordBank.objects.get(user=request.user)
#         word = GreekWord.objects.get(id=id, word_bank=wordbank)
#         word.delete()
#         return Response('{word} has been deleted from your word bank', status=HTTP_204_NO_CONTENT)




