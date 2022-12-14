# Generated by Django 4.1.2 on 2022-10-09 22:45

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('teacher', '0002_rename_foro_professor_foto'),
    ]

    operations = [
        migrations.CreateModel(
            name='Aula',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('nome', models.CharField(max_length=100)),
                ('email', models.EmailField(max_length=255)),
                ('professor', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='aulas', to='teacher.professor')),
            ],
        ),
    ]
