from django.db import models

#base/models.py

from django.db import models

class Project(models.Model):
    image = models.ImageField(upload_to='static/img/') 
    project_name = models.CharField(max_length=255) 
    description = models.TextField()  
    link_1 = models.URLField(max_length=500, blank=True, null=True)  
    link_2 = models.URLField(max_length=500, blank=True, null=True)  

    def __str__(self):
        return self.project_name
