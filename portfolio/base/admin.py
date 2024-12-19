from django.contrib import admin
from .models import Project

@admin.register(Project)
class ProjectAdmin(admin.ModelAdmin):
    list_display = ('project_name', 'description', 'link_1', 'link_2') 
    search_fields = ('project_name', 'description') 
    list_filter = ('link_1', 'link_2')  

    fieldsets = (
        (None, {
            'fields': ('image', 'project_name', 'description', 'link_1', 'link_2')
        }),
    )