from django.urls import path
from .views import HomeView, AboutView

#base/urls.py
urlpatterns = [
    path('', HomeView.as_view(), name='home'),  
    path('about/', AboutView.as_view(), name='about'), 
]

app_name = 'base'