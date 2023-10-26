from django.urls import path
from . import views

urlpatterns = [
    
    path('register/', views.RegistrationView.as_view(), name='register'),
    path('users/', views.UserList.as_view(), name='user-list'),
    path('users/<int:pk>/', views.UserDetail.as_view(), name='user-detail'),
    path('login/', views.login_view, name='login'),
    path('login_success/', views.login_success_view, name='login_success'),
    path('logout/', views.logout_view, name='logout'),# Ruta de cierre de sesión
    

]
