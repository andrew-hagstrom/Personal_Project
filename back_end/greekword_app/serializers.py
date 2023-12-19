from rest_framework.serializers import ModelSerializer
from .models import GreekWord

class GreekWordSerializer(ModelSerializer):
    class Meta:
        model = GreekWord
        fields = ['id', 'word', 'morphology', 'word_bank']