# Generated by Django 5.0 on 2023-12-15 19:49

import django.db.models.deletion
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('wordbank_app', '0002_alter_wordbank_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Greek_Word',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('word', models.CharField(default=None)),
                ('morphology', models.TextField(default=None)),
                ('word_bank', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='wordbank', to='wordbank_app.wordbank')),
            ],
        ),
    ]
