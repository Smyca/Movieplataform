from django.http import HttpResponse

# Create your views here.
def test(request):
    return HttpResponse("<h1>Test Page</h1>")

def create_user(request):
    return HttpResponse("<h1>Crear Usuario</h1>")

def log_in(request):
    return HttpResponse("<h1>Iniciar sesion</h1>")