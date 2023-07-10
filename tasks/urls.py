from django.urls import path, include
from rest_framework.documentation import include_docs_urls
from rest_framework import routers
from tasks import views


router = routers.DefaultRouter()
router.register(r'login', views.TaskView, 'login')

urlpatterns =[
    path("api/v1/", include(router.urls)),  
    path('doc/', include_docs_urls("Tasks API"))
              ]