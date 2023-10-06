from django.contrib.auth import login, authenticate
#from django.contrib.auth.models import User 
from django.shortcuts import render, redirect
from .forms import RegistrationForm

def register(request):
    if request.method == 'POST':
        form = RegistrationForm(request.POST)
        if form.is_valid():
            form.save()
            username = form.cleaned_data.get('username')
            raw_password = form.cleaned_data.get('password1')
            user = authenticate(username=username, password=raw_password)
            login(request, user)
            return redirect('home')  # acá hay que poner el nombre de la vista de inicio
    else:
        form = RegistrationForm()
    return render(request, 'registration/register.html', {'form': form})
