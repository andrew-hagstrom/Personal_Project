from rest_framework.serializers import ModelSerializer
from .models import Item

class GreekWordSerializer(ModelSerializer):
    class Meta:
        model = Item
        fields = ['word', 'morphology']