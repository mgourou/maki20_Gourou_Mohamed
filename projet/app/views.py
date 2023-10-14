from django.shortcuts import render, redirect
from .models import Plat , LoadingPage , Ingredient

# Create your views here.
def homeFR(request):
    return render(request, 'app/homeFR.html')
def homeNL(request):
    return render(request, 'app/homeNL.html')
def homeEN(request):
    return render(request, 'app/homeEN.html')

def productsFR(request):
    plats = Plat.objects.all()
    ingredients = Ingredient.objects.all()
    # Liste des types de plats
    types_plats = ["Entree-froide", "Entree-chaude", "Donburi", "California-Rolls", "Makis", "Hosomaki", "Temaki", "Sandwich", "Box", "Dessert"]
    
    # Créez un dictionnaire pour stocker les plats de chaque type
    plats_par_type = {}
    
    # Parcourez chaque type de plat et récupérez les plats correspondants
    for type_plat in types_plats:
        plats_par_type[type_plat] = Plat.objects.filter(type_plat=type_plat)
    context = locals()
    return render(request, 'app/productsFR.html', context)
def productsNL(request):
    return render(request, 'app/productsNL.html')
def productsEN(request):
    return render(request, 'app/productsEN.html')

def show_plat(request,id):
    plat = Plat.objects.get(id=id)
    return render(request,'app/plat_detail.html',{'plat' : plat})

def loading_page(request):
    loading_data = LoadingPage.objects.first()  # Récupérez les données de la page de chargement
    return render(request, 'app/loading_page.html', {'loading_data': loading_data})