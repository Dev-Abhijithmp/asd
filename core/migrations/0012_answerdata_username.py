# Generated by Django 4.0.4 on 2022-09-20 15:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core', '0011_remove_score_id_alter_score_username'),
    ]

    operations = [
        migrations.AddField(
            model_name='answerdata',
            name='username',
            field=models.CharField(blank=True, max_length=500),
        ),
    ]
