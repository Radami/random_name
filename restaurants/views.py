from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework import status

import random

from .models import Location, FoodType, PlaceType, BannedCombination


def generate_name(locations: list, food_types: list, place_types: list) -> str:
    return (
        str(random.choice(locations))
        + " "
        + str(random.choice(food_types))
        + " "
        + str(random.choice(place_types))
    )


class Restaurant(APIView):

    def get(self, request, format=None):
        banned_combinations = BannedCombination.objects.all()
        generated_name = None
        locations = Location.objects.all()
        food_types = FoodType.objects.all()
        place_types = PlaceType.objects.all()

        generated_name = generate_name(locations, food_types, place_types)
        while generate_name in banned_combinations:
            generated_name = generate_name(locations, food_types, place_types)
        return Response({"generated_name": generated_name})
