# Generated by Django 4.2.3 on 2023-09-21 18:41

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='Plat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nom', models.CharField(max_length=255)),
                ('prix', models.DecimalField(decimal_places=2, max_digits=8)),
                ('ingredients', models.TextField()),
                ('image', models.ImageField(upload_to='plats/')),
                ('type_plat', models.CharField(choices=[('entree', 'Entrée'), ('plat_principal', 'Plat Principal'), ('dessert', 'Dessert'), ('boisson', 'Boisson')], max_length=20)),
            ],
        ),
    ]
