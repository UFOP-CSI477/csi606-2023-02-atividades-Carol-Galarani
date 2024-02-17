from rest_framework import serializers
from .models import User


class UserSignupSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['email', 'name', 'password']
        extra_kwargs = {'password': {'write_only': True}}


class UserLoginSerializer(serializers.Serializer):
    email = serializers.EmailField()
    password = serializers.CharField()
