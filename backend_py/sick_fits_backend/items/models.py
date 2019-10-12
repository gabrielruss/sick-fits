from django.db import models


class Item(models.Model):
    title = models.TextField()
    description = models.TextField()
    image = models.TextField(blank=True)
    large_image = models.TextField(blank=True)
    price = models.IntegerField()
