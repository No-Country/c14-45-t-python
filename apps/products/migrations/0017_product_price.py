# Generated by Django 4.2.6 on 2023-10-22 19:51

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0016_remove_category_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='product',
            name='price',
            field=models.PositiveIntegerField(default=0),
        ),
    ]
