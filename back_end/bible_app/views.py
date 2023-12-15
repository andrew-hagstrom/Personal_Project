from django.shortcuts import render
from rest_framework.views import APIView
from rest_framework.response import Response
import requests


class GreekBible(APIView):
    def get_bible_data(self, api_url, api_key):
        headers = {
            'api-key': api_key,
            'Content-Type': 'application/json',  
        }
        try:
            response = requests.get(api_url, headers=headers)
            print(f"\n\n\n {response} \n\n\n")
            response.raise_for_status()  
            data = response.json()  
            return data
        except requests.exceptions.RequestException as e:
    
            print(f"Error accessing API: {e}")
            return None

    def get(self, request):
        api_url = f"https://api.scripture.api.bible/v1/bibles/7644de2e4c5188e5-01/books"
        api_key = env.get('API_KEY')
        bible_data = self.get_bible_data(api_url, api_key)
        print(bible_data)
        if bible_data:
            print("API Data:")
            print(bible_data)
        else:
            print("Failed to retrieve API data.")

        return Response(bible_data['data'])