
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.hashers import make_password
from django.shortcuts import render, redirect
from django.views import View
from django.http import HttpResponse
from rest_framework import generics
from rest_framework.response import Response
from rest_framework import status
from .serializers import RegistrationSerializer
from .serializers import UserSerializer, RegistrationSerializer
from .models import User



def login_view(request):
    if request.method == 'POST':
        username = request.POST.get('username')
        password = request.POST.get('password')
        user = authenticate(request, username=username, password=password)
        if user is not None:
            login(request, user)
            # Redirige a la URL de "inicio de sesión exitoso" o muestra un mensaje de éxito.
            return redirect('login_success')
        else:
            # Muestra un mensaje de credenciales inválidas o redirige de nuevo a la página de inicio de sesión.
            return HttpResponse("Credenciales inválidas")
    else:
        return render(request, 'login.html')


def login_success_view(request):
    return render(request, 'login_success.html')


def logout_view(request):
    logout(request)
    return redirect('login')


#REGISTRATION FORM

class RegistrationView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegistrationSerializer

    def create(self, request, *args, **kwargs):
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        self.perform_create(serializer)

        # Obtener la contraseña del formulario de registro
        password = serializer.validated_data['password']

        # Cifrar la contraseña antes de asignarla al usuario
        user = serializer.save(password=make_password(password))

        headers = self.get_success_headers(serializer.data)
        return Response(serializer.data, status=status.HTTP_201_CREATED, headers=headers)


#USER ENDPOINTS

class UserList(generics.ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = UserSerializer

