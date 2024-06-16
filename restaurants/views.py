from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

import random

from .models import Location, FoodType, PlaceType, BannedCombination


def generate_random(input_list: list) -> str:
    return str(random.choice(input_list))


def generate_name(locations: list, foods: list, places: list) -> str:
    return {
        "location": generate_random(locations),
        "food": generate_random(foods),
        "place": generate_random(places),
    }


def serialize_name(location: str, food: str, place: str) -> str:
    return location + " " + food + " " + place


class Restaurant(APIView):

    def get(self, request, format=None):
        banned_combinations = BannedCombination.objects.all()
        generated_name = None
        data = request.query_params
        if "location" in data and data["location"] is not None:
            locations = list(data["location"])
        else:
            locations = Location.objects.all()

        if "food" in data and data["food"] is not None:
            foods = list(data["food"])
        else:
            foods = FoodType.objects.all()

        if "place" in data and data["place"] is not None:
            places = list(data["place"])
        else:
            places = PlaceType.objects.all()

        generated_name = generate_name(locations, foods, places)
        while (
            serialize_name(
                generated_name["location"], generated_name["food"], generated_name["place"]
            )
            in banned_combinations
        ):
            generated_name = generate_name(locations, foods, places)
        # return Response({"generated_name": generated_name})
        return Response(generated_name)
