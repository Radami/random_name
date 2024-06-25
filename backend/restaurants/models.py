from django.db import models


class Location(models.Model):
    location = models.CharField("Location", max_length=50)

    def __str__(self):
        return self.location


class FoodType(models.Model):
    food_type = models.CharField("Food Type", max_length=50)

    def __str__(self):
        return self.food_type


class PlaceType(models.Model):
    place_type = models.CharField("Place Type", max_length=50)

    def __str__(self):
        return self.place_type


class BannedCombination(models.Model):
    location = models.ForeignKey(Location, on_delete=models.CASCADE)
    food_type = models.ForeignKey(FoodType, on_delete=models.CASCADE)
    place_type = models.ForeignKey(PlaceType, on_delete=models.CASCADE)

    def __str__(self):
        return str(self.location + " " + self.food_type + " " + self.place_type)
