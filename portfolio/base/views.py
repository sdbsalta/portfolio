from django.shortcuts import render
from .models import Project

from django.views.generic import TemplateView

class HomeView(TemplateView):
    template_name = "home.html"
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context['projects'] = Project.objects.all()  
        return context

class AboutView(TemplateView):
    template_name = "about.html"

