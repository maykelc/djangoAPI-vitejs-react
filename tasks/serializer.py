from rest_framework import serializers
from .models import login

class TaskSerializer(serializers.ModelSerializer):
    class Meta:
        model = login
        fields= '__all__'