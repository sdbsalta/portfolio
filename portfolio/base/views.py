from django.shortcuts import render

from django.views.generic import TemplateView
from .models import About

class HomeView(TemplateView):
    template_name = "templates/home.html"

class AboutView(TemplateView):
    template_name = "templates/about.html"
