from rest_framework import serializers
from .models import Location, FoodType, PlaceType


class LocationSerializer(serializers.ModelSerializer):

    class Meta:
        model = Location
        fields = ("pk", "location")


class FoodTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = FoodType
        fields = ("pk", "food_type")


class PlaceTypeSerializer(serializers.ModelSerializer):

    class Meta:
        model = PlaceType
        fields = ("pk", "place_type")
