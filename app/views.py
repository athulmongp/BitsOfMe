from django.shortcuts import render
from django.http import HttpResponse

# def home(request):
#     return HttpResponse("Welcome to my portfolio!")

def home(request):
    return render(request, 'index.html')

def about(request):
    return render(request, 'about.html')

def resume(request):
    return render(request, 'resume.html')