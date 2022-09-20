from django.db import models
from django.contrib.auth.models import User


# Create your models here.

class Questions(models.Model):
    slnum = models.IntegerField()
    question = models.CharField(max_length=255)
    helpdata = models.CharField(max_length=255, default='', blank=True)
    # ref_image = models.ImageField(upload_to='images/', blank=True, null=True)
    answer = models.CharField(max_length=255)
    def __str__(self):
        return self.question

class Guidelines(models.Model):
    heading = models.CharField(max_length=100)
    desc = models.CharField(max_length=500)
    def __str__(self):
        return self.heading

class Scoredata(models.Model):
    score=models.IntegerField()
    desc=models.CharField(max_length=500)
    def __str__(self):
        return self.score
class Answerdata(models.Model):
    slnum =models.IntegerField()
    question=models.CharField(max_length=500)
    helpdata=models.CharField(max_length=500,blank=True)
    answer=models.CharField(max_length=5)
    def __str__(self):
        return self.question
class Score(models.Model):
    username =models.CharField(max_length=500)
    score=models.IntegerField()
    def __str__(self):
        return self.username
