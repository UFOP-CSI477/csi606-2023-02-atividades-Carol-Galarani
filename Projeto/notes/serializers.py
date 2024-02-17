from rest_framework import serializers
from .models import Notas


class NoteSerializer(serializers.ModelSerializer):
    class Meta:
        model = Notas
        fields = ('id', 'title', 'description')
