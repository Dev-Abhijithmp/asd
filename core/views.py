from django.contrib import messages
from django.shortcuts import redirect, render
from django.contrib.auth.models import User,auth
from django.contrib.auth.decorators import login_required

# Create your views here.


def index(request):
    print(request.user)


    return render(request,'index.html')


def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['pass']
        user = auth.authenticate(username="vyshnavi",password=password)
        print(email),print(password)
        print(user)
        if user is not None:
            auth.login(request,user)
            print(request.user)
            return render(request,'home.html')
        else:
            messages.info(request,'Invalid Credentials')
            return render(request,'login.html')
        
    else:
        return render(request, 'login.html')


def register(request):
    if request.method == 'POST':
        name = request.POST['username']
        email = request.POST['email']
        pass1 = request.POST['pass']
        pass2 = request.POST['pass1']
        if pass1 == pass2:
            if User.objects.filter(email=email).exists():
                messages.info(request,'Email Taken')
                return redirect('register')
            else:
          
                user = User.objects.create_user(username=email,password=pass1,email=email)
                user.save()
                return render(request,'home.html')
        else:
            messages.info(request,'Password not matching')
            return redirect('register')
    
    else:
        return render(request, 'register.html')
@login_required(login_url='login')
def home(request):
    if auth.login :
        print("auth")
        print(auth.login)
        return render(request,'home.html')
    else:
        return redirect('/')
@login_required(login_url='login')
def logout(request):
    auth.logout(request)
    return render(request,'index.html')