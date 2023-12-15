import requests
from django.shortcuts import render
from django.db import models
from rest_framework.views import APIView
from rest_framework.response import Response
from bible_proj.settings import env  

class GreekBook(APIView):
    def get_book_data(self, api_url, api_key):
        headers = {
            'api-key': api_key,
            'Content-Type': 'application/json',  
        }
        try:
            response = requests.get(api_url, headers=headers)
            print(f"\n\n\n {response} \n\n\n")
            response.raise_for_status()  # Check for errors
            data = response.json()  # Assuming the API returns JSON data
            return data
        except requests.exceptions.RequestException as e:
            # Handle errors, such as connection issues or API errors
            print(f"Error accessing API: {e}")
            return None

    def get(self, request, bookID):
        api_url = f"https://api.scripture.api.bible/v1/bibles/7644de2e4c5188e5-01/books/{bookID}"
        api_key = env.get('API_KEY')
        book_data = self.get_book_data(api_url, api_key)
        print(book_data)
        if book_data:
            print("API Data:")
            print(book_data)
        else:
            print("Failed to retrieve API data.")

        return Response(book_data['data'])