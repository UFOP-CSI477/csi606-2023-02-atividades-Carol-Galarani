
from django.urls import path
from .views import (
    UserSignupAPIView,
    UserLoginAPIView
)

urlpatterns = [
    path('signup/', UserSignupAPIView.as_view(), name='user-signup'),
    path('login/', UserLoginAPIView.as_view(), name='user-login'),
]
