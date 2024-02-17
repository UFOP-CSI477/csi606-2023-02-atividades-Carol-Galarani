from django.urls import path
from .views import (
    NotasListCreateAPIView,
    NotasRetrieveUpdateDestroyAPIView
)

urlpatterns = [
    path('notas/<int:user_id>/', NotasListCreateAPIView.as_view(), name='notas_list_create'),
    path('note/<int:pk>/', NotasRetrieveUpdateDestroyAPIView.as_view(), name='notas_retrieve_update_destroy'),
]
