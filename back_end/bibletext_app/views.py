import requests
from django.shortcuts import render
from django.db import models
from rest_framework.views import APIView
from rest_framework.response import Response
from bible_proj.settings import env 
from user_app.views import UserPermissions 

class GreekChapterInfo(APIView):
    def get_chapters_data(self, api_url, api_key):
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
        
    def get(self, request, bookId):
        api_url = f"https://api.scripture.api.bible/v1/bibles/7644de2e4c5188e5-01/books/{bookId}/chapters"
        api_key = env.get('API_KEY')

        chapters_data = self.get_chapters_data(api_url, api_key)
        print(chapters_data)
        if chapters_data:
            print("API Data:")
            print(chapters_data)
        else:
            print("Failed to retrieve API data.")

        return Response(chapters_data['data'])
        

class GreekChapter(APIView):
    def get_chapter_data(self, api_url, api_key):
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

    def get(self, request, bookId, chapterNumber):
        api_url = f"https://api.scripture.api.bible/v1/bibles/7644de2e4c5188e5-01/chapters/{bookId}.{chapterNumber}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=false"
        api_key = env.get('API_KEY')
       
        chapter_data = self.get_chapter_data(api_url, api_key)
        print(chapter_data)
        if chapter_data:
            print("API Data:")
            print(chapter_data)
        else:
            print("Failed to retrieve API data.")

        return Response(chapter_data['data'])
    

class GreekVerseInfo(APIView):
    def get_verses_data(self, api_url, api_key):
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
        
    def get(self, request, bookId, chapterNumber):
        api_url = f"https://api.scripture.api.bible/v1/bibles/7644de2e4c5188e5-01/chapters/{bookId}.{chapterNumber}/verses"
        api_key = env.get('API_KEY')

        verses_data = self.get_verses_data(api_url, api_key)
        print(verses_data)
        if verses_data:
            print("API Data:")
            print(verses_data)
        else:
            print("Failed to retrieve API data.")

        return Response(verses_data['data'])


class GreekVerse(APIView):
    def get_verse_data(self, api_url, api_key):
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

    def get(self, request, bookId, chapterNumber, verseNumber):
        api_url = f"https://api.scripture.api.bible/v1/bibles/7644de2e4c5188e5-01/verses/{bookId}.{chapterNumber}.{verseNumber}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=true&include-verse-numbers=true&include-verse-spans=false&use-org-id=false"
        api_key = env.get('API_KEY')
        verse_data = self.get_verse_data(api_url, api_key)
        print(verse_data)
        if verse_data:
            print("API Data:")
            print(verse_data)
        else:
            print("Failed to retrieve API data.")

        return Response(verse_data['data'])

class ChapterTranslation(APIView):
    def get_chapter_translation(self, api_url, api_key):
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

    def get(self, request, bookId, chapterNumber):
        api_url = f"https://api.scripture.api.bible/v1/bibles/32339cf2f720ff8e-01/chapters/{bookId}.{chapterNumber}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false"
        api_key = env.get('API_KEY')
        chapter_translation = self.get_chapter_translation(api_url, api_key)
        print(chapter_translation)
        if chapter_translation:
            print("API Data:")
            print(chapter_translation)
        else:
            print("Failed to retrieve API data.")

        return Response(chapter_translation['data'])
    

class VerseTranslation(APIView):
    def get_verse_translation(self, api_url, api_key):
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

    def get(self, request, bookId, chapterNumber, verseNumber):
        api_url = f"https://api.scripture.api.bible/v1/bibles/32339cf2f720ff8e-01/verses/{bookId}.{chapterNumber}.{verseNumber}?content-type=text&include-notes=false&include-titles=true&include-chapter-numbers=false&include-verse-numbers=true&include-verse-spans=false&use-org-id=false"
        api_key = env.get('API_KEY')
        verse_translation = self.get_verse_translation(api_url, api_key)
        print(verse_translation)
        if verse_translation:
            print("API Data:")
            print(verse_translation)
        else:
            print("Failed to retrieve API data.")

        return Response(verse_translation['data'])

    



      


    


   


    


   

