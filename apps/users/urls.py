from django.urls import path
from . import views

urlpatterns = [
    
    path('register/', views.RegistrationView.as_view(), name='register'),
    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),
]
