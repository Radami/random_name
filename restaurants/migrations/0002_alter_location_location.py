# Generated by Django 5.0.6 on 2024-05-24 22:59

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('restaurants', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='location',
            name='location',
            field=models.CharField(max_length=50, verbose_name='Location'),
        ),
    ]