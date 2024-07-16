from django.http import HttpResponse

# Create your views here.
def test(request):
    return HttpResponse("<h1>Usuario</h1>")

def create_user(request):
    return HttpResponse("<h1>Crear Usuario</h1>")