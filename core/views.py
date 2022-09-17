import re
from sre_parse import TYPE_FLAGS
from django.views.decorators.csrf import csrf_exempt
import json
from django.contrib import messages
from django.shortcuts import redirect, render
from django.contrib.auth.models import User, auth
from django.contrib.auth.decorators import login_required
from django.core import serializers
import reportlab
from django.http import FileResponse
from reportlab.pdfgen import canvas
import io
from core.models import Guidelines, Questions

# Create your views here.


def index(request):
    print(request.user)

    return render(request, 'index.html')


def login(request):
    if request.method == 'POST':
        email = request.POST['email']
        password = request.POST['pass']
        user = auth.authenticate(username="vyshnavi", password=password)
        print(email), print(password)
        print(user)
        if user is not None:
            auth.login(request, user)
            print(request.user)
            return redirect('home')
        else:
            messages.info(request, 'Invalid Credentials')
            return render(request, 'login.html')

    else:
        print("in get method" )
        return render(request,'login.html')


def register(request):
    if request.method == 'POST':
        name = request.POST['username']
        email = request.POST['email']
        pass1 = request.POST['pass']
        pass2 = request.POST['pass1']
        if pass1 == pass2:
            if User.objects.filter(email=email).exists():
                messages.info(request, 'Email Taken')
                return redirect('register')
            else:

                user = User.objects.create_user(
                    username=email, password=pass1, email=email)
                user.save()
                return render(request, 'home.html')
        else:
            messages.info(request, 'Password not matching')
            return redirect('register')

    else:
        return render(request, 'register.html')


@login_required(login_url='login')
def home(request):
    print(request)

    qn = Questions.objects.all()
    tmpjson = serializers.serialize('json', qn)
    data = json.loads(tmpjson)
    return render(request, 'home.html', {'data': data})
@login_required(login_url='login')
@csrf_exempt
def scorepage(request):
    # print(request)
    
    # print("hai")
        
    # ds = request.POST.get('data')
    # print(ds)
        
 
    # m= json.loads(ds)
    # print(m[0]['question'])
    score =request.GET.get('score')
    context= {
        'score':score
    }
    return render(request,'scorepage.html',context)

@login_required(login_url='login')
def guidelines(request):
    data = Guidelines.objects.all()
    context = {'data':data}
    return render(request,'guidelines.html',context)



@login_required(login_url='login')
def logout(request):
    auth.logout(request)
    return render(request, 'index.html')



@login_required(login_url='login')
def generate_pdf(request):
    d =5
    # Create a file-like buffer to receive PDF data.
    buffer = io.BytesIO()

    # Create the PDF object, using the buffer as its "file."
    p = canvas.Canvas(buffer)

    # Draw things on the PDF. Here's where the PDF generation happens.
    # See the ReportLab documentation for the full list of functionality.
    p.drawString(100, 100, "your score = ")

    # Close the PDF object cleanly, and we're done.
    p.showPage()
    p.save()

    # FileResponse sets the Content-Disposition header so that browsers
    # present the option to save the file.
    buffer.seek(0)
    return FileResponse(buffer, as_attachment=True, filename='hello.pdf')
