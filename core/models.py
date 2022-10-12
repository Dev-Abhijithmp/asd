
from django.db import models


# Create your models here.

class Questions(models.Model):
    slnum = models.IntegerField()
    question = models.CharField(max_length=255)
    helpdata = models.CharField(max_length=255,  blank=True)
    # ref_image = models.ImageField(upload_to='images/', blank=True, null=True)
    answer = models.CharField(max_length=255)
    def __str__(self):
        return self.question

class Guidelines(models.Model):
    heading = models.CharField(max_length=100)
    desc = models.CharField(max_length=500)
    def __str__(self):
        return self.heading


class Answerdata(models.Model):

    slnum =models.IntegerField()
    username =models.CharField(max_length=500,blank=True)
    question=models.CharField(max_length=500)
    helpdata=models.CharField(max_length=500,blank=True,default='')
    answer=models.CharField(max_length=5)
    def __str__(self):
        return self.username
class Scoredata(models.Model):
    username = models.CharField(max_length=256,blank=True)
    score =models.IntegerField()


class Training(models.Model):
    level = models.IntegerField()
    imagurl =models.CharField(max_length=500)
    imageans =models.CharField(max_length=500)
    options =models.CharField(max_length =500)
    
    
