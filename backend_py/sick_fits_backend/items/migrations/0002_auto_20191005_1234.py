# Generated by Django 2.2.5 on 2019-10-05 16:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('items', '0001_initial'),
    ]

    operations = [
        migrations.RenameField(
            model_name='item',
            old_name='largeImage',
            new_name='large_image',
        ),
    ]