# Generated by Django 4.2.6 on 2023-10-23 19:58

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0018_product_description'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='product',
            name='subcategory',
        ),
        migrations.DeleteModel(
            name='Subcategory',
        ),
    ]
