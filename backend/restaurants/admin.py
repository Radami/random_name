from django.contrib import admin

from .models import Location, FoodType, PlaceType, BannedCombination

myModels = [Location, FoodType, PlaceType, BannedCombination]  # iterable list
admin.site.register(myModels)
