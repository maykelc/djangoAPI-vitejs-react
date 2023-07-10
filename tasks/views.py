from rest_framework import viewsets 
from .serializer import TaskSerializer
from .models import login

# Create your views here.
class TaskView(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    queryset = login.objects.all()