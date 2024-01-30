import requests
import re
from rest_framework import serializers
from django.shortcuts import render
from django.db import models
from rest_framework.views import APIView
from rest_framework.response import Response
from bible_proj.settings import env
from openai import OpenAI 
from .models import GreekWord
from user_app.views import UserPermissions
from wordbank_app.models import WordBank
from greekword_app.serializers import GreekWordSerializer
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_204_NO_CONTENT,
    HTTP_404_NOT_FOUND
)

class GW(UserPermissions):

    def get(self, request, word):
        api_key = env.get('OPENAI_API_KEY')
        print(api_key)
        
        client = OpenAI(api_key=api_key)
        
        greek_pattern = r'[\u0370-\u03FF\u1F00-\u1FFF]+'

        if re.match(greek_pattern, word):

            response = client.chat.completions.create(
                model="gpt-3.5-turbo",
                messages=[
                    {"role": "system", "content": "You are a Greek morphological assistant."},
                    {"role": "user", "content": f"Provide the Greek morphology of the following word: {word}. First, give the transliteration, definition, and part of speech. If it is a noun or adjective or participle, provide case, number (singular or plural), gender. If it is a verb, provide mood, tense, person, number (singular or plural), voice."}
                ]
            )
            return Response(response, status=HTTP_200_OK)
        else: 
            return Response({"message": "This is not a Greek Word."}, status=HTTP_204_NO_CONTENT)
    

    def post(self, request, word):
        wordbank= WordBank.objects.get(user=request.user)
        new_wordbank_word = GreekWord(word=word, morphology=request.data.get('morphology'), word_bank=wordbank, bookId=request.data.get('bookId'), chapterNumber=request.data.get('chapterNumber'), verseNumber=request.data.get('verseNumber'))
        new_wordbank_word.save()
        return Response(f'{new_wordbank_word} has been added to your word bank', status=HTTP_201_CREATED)
    

    def delete(self, request, word):
        wordbank= WordBank.objects.get(user=request.user)
        wordbank_word = GreekWord.objects.get(word=word, word_bank=wordbank)
        wordbank_word.delete()
        return Response('{new_wordbank_word} has been deleted from your word bank', status=HTTP_204_NO_CONTENT)
    

