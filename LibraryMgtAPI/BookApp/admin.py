from django.contrib import admin
from BookApp.models import DetailsBook
# Register your models here.


class DetailsAdmin(admin.ModelAdmin):
    pass


admin.site.register(DetailsBook, DetailsAdmin)
