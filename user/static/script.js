document.addEventListener('DOMContentLoaded',()=>{
    console.log('Documento cargado');
})

function Valida2daContrasena(){
    var pass1 = document.getElementById('id_password1').value;
    var pass2 = document.getElementById('id_password2').value;
    if(pass1 == ''){
        alert('contraseña 1 Vacia');
    }
    if(pass2 == ''){
        alert('Contraseña 2 Vacia');
    }
    if(pass1 != pass2){
        alert('Las contraseñas no son similares')
    }
    if(pass1 == pass2){
        var boton_registrar = document.getElementById('submit')
        boton_registrar.click();
    }

}