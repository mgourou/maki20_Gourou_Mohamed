from django.shortcuts import render, redirect

# Create your views here.
def homeFR(request):
    return render(request, 'app/homeFR.html')
def homeNL(request):
    return render(request, 'app/homeNL.html')
def homeEN(request):
    return render(request, 'app/homeEN.html')

def products(request):
    return render(request, 'app/products.html')