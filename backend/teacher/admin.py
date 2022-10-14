from django.contrib import admin

from teacher.models import Aula, Professor

# Register your models here.
admin.site.register(Professor)
admin.site.register(Aula)