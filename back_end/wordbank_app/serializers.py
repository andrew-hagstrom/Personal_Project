from rest_framework.serializers import ModelSerializer, SerializerMethodField
from .models import WordBank

class WordBankSerializer(ModelSerializer):
    greekwords = SerializerMethodField()
    class Meta: 
        model = WordBank
        fields = ['user', 'greekwords']
    
    def get_greekwords(self, instance):
        greekwords = instance.greekwords.all()
        return greekwords