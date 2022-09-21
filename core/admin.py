from django.contrib import admin
from .models import Guidelines,Questions,Scoredata,Answerdata

# Register your models here.
admin.site.register(Questions)
admin.site.register(Guidelines)
admin.site.register(Scoredata)
admin.site.register(Answerdata)