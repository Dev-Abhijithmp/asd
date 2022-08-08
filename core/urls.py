from unicodedata import name
from django import views
from django.urls import path
from . import views
urlpatterns =[
    path('',views.index,name='index'),
    path('login',views.login,name='login'),
    path('register',views.register,name='register'),
    path('home',views.home,name='home'),
    path('logout',views.logout,name='logout'),
    path('score',views.scorepage,name='scorepage'),
    path('guidelines',views.guidelines,name='guidelines')
]