# Generated by Django 4.2.6 on 2023-10-22 16:55

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0003_types'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Types',
        ),
        migrations.AddField(
            model_name='category',
            name='type',
            field=models.CharField(choices=[('0', 'Guitarras'), ('1', 'Bajos'), ('2', 'Teclados y Pianos'), ('3', 'Baterias y Percusión'), ('4', 'Instrumentos de Viento'), ('5', 'Accesorios')], default='0', max_length=1),
        ),
    ]
