from dataclasses import fields
from rest_framework import serializers
from BookApp.models import DetailsBook


class DetailsSerializer(serializers.ModelSerializer):
    class Meta:
        model = DetailsBook
        fields = "__all__"
