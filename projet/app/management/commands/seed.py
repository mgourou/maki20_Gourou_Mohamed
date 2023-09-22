import random
import os
from django.db import IntegrityError
from app.models import Plat
from django.core.management.base import BaseCommand



class Command(BaseCommand):
    help = 'Seed the database with clothing data'
    
    

    # Fonction pour générer 15 plats au hasard
    def handle(self, *args, **options):
        # Liste de noms de plats fictifs
        noms_plats = [
            "Maki California",
            "Sushi saumon",
            "Nigiri crevette",
            "Temaki avocat",
            "Sashimi thon",
            "Yakitori poulet",
            "Ramen miso",
            "Gyoza porc",
            "Bento végétarien",
            "Sushi saumon spicy",
            "Tataki de boeuf",
            "Miso soup",
            "Soba aux légumes",
            "Okonomiyaki",
            "Tofu teriyaki",
        ]

        # Liste de types de plats fictifs
        types_plats = ["Entree-froide", "Entree-chaude", "Donburi", "California-Rolls","Makis","Hosomaki","Temaki","Sandwich","Box","Dessert"]
        for _ in range(15):
            nom_plat = random.choice(noms_plats)
            prix_plat = round(random.uniform(5.0, 20.0), 2)  # Prix entre 5.0 et 20.0
            ingredients_plat = "Ingrédients fictifs pour " + nom_plat
            image_plat = "chemin/vers/votre/image.jpg"
            type_plat = random.choice(types_plats)

            plat = Plat(
                nom=nom_plat,
                prix=prix_plat,
                ingredients=ingredients_plat,
                image=image_plat,
                type_plat=type_plat,
            )

            try:
                plat.save()
            except IntegrityError:
                # Dans le cas improbable où le nom du plat est en double, ignorez-le
                pass
            