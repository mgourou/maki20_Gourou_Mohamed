from django.shortcuts import render, redirect

# Create your views here.
def home(request):
    return render(request, 'app/home.html')

def products(request):
    return render(request, 'app/products.html')