# Generated by Django 4.0.4 on 2022-07-24 07:23

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0003_guidelines_remove_questions_ref_image_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='questions',
            name='help',
            field=models.CharField(default='', max_length=255),
        ),
    ]