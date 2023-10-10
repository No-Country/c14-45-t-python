from django.shortcuts import render, redirect
from django.contrib.auth import login, authenticate
from rest_framework import status
from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework.views import APIView
from rest_framework_simplejwt.tokens import RefreshToken
#from django.contrib.auth.models import User 
from .serializers import LoginSerializer
# from .forms import RegistrationForm

@api_view(['GET', 'POST'])
def getRoutes(request):
    routes = [
        '/api/token',
        '/api/token/refresh',
    ]

    return Response(routes)

class LogInAPIView(APIView):

    def post(self, request):
        try:
            data = request.data
            serializer = LoginSerializer(data=data)
            if serializer.is_valid():
                email = serializer.data['email']
                password = serializer.data['password']

                user = authenticate(email=email, password=password)

                if user is None:

                    return Response({
                        'status': status.HTTP_401_UNAUTHORIZED,
                        'message': 'Invalid email or password',
                        'data': {}
                    })

                refresh = RefreshToken.for_user(user)

                return Response({
                    'refresh': str(refresh),
                    'access': str(refresh.access_token),
                })
            return Response({
                'status': status.HTTP_400_BAD_REQUEST,
                'message': 'Something went wrong',
                'data': serializer.errors
            })
        
        except Exception as e:
            return Response({
                'status': status.HTTP_500_INTERNAL_SERVER_ERROR,
                'message': 'Internal server error',
                'data': {'error_message': str(e)}
            })

# def register(request):
#     if request.method == 'POST':
#         form = RegistrationForm(request.POST)
#         if form.is_valid():
#             form.save()
#             username = form.cleaned_data.get('username')
#             raw_password = form.cleaned_data.get('password1')
#             user = authenticate(username=username, password=raw_password)
#             login(request, user)
#             return redirect('home')  # acá hay que poner el nombre de la vista de inicio
#     else:
#         form = RegistrationForm()
#     return render(request, 'registration/register.html', {'form': form})
