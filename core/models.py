from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Questions(models.Model):
    question = models.CharField(max_length=255)
    helpdata = models.CharField(max_length=255, default='')
    # ref_image = models.ImageField(upload_to='images/', blank=True, null=True)
    answer = models.CharField(max_length=255)
    def __str__(self):
        return self.question

class Guidelines(models.Model):
    heading = models.CharField(max_length=100)
    desc = models.CharField(max_length=500)
    def __str__(self):
        return self.heading

