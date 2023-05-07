from django.urls import path,re_path
from . import views
urlpatterns = [
   path('getData',views.getData),
   re_path(r'^(?:.*)/?$',views.getData)
]