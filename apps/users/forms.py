from django import forms
from .models import UserProfile
from django.contrib.auth.forms import UserCreationForm

class RegistrationForm(UserCreationForm):
    address = forms.CharField(max_length=100)
    birthdate = forms.DateField(widget=forms.SelectDateWidget)
    profile_image = forms.ImageField()

    class Meta:
        model = UserProfile
        fields = ('username', 'email', 'password1', 'password2', 'first_name', 'last_name', 'address', 'birthdate', 'profile_image')
