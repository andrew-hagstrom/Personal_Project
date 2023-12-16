import requests
from openai import OpenAI
import re
from django.shortcuts import render
from django.db import models
from rest_framework.views import APIView
from rest_framework.response import Response
from bible_proj.settings import env  
from .models import Greek_Word
from user_app.views import UserPermissions
from wordbank_app.models import WordBank
from rest_framework.status import (
    HTTP_200_OK,
    HTTP_201_CREATED,
    HTTP_400_BAD_REQUEST,
    HTTP_204_NO_CONTENT,
    HTTP_404_NOT_FOUND
)

class GreekWord(UserPermissions):

    def get(self, request, word):
        api_key = env.get('OPENAI_API_KEY')
        
        client = OpenAI(api_key=api_key)
        
        greek_pattern = r'[\u0370-\u03FF\u1F00-\u1FFF]+'

        if re.match(greek_pattern, word):
            greekword = word
        else: 
            print("This is not a Greek Word.")

        response = client.chat.completions.create(
            model="gpt-3.5-turbo",
            messages=[
                {"role": "system", "content": "You are a Greek morphological assistant."},
                {"role": "user", "content": f"Provide the Greek morphology of the following word: {word}. If it is a noun or adjective, provide case, number (singular or plural), gender. If it is a verb, provide mood, tense, person, number (singular or plural), voice."}
            ]
        )
        print(response)
        return Response(response)

    

