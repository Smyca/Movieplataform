document.addEventListener('DOMContentLoaded',()=>{
    console.log('Documento cargado');
    // Usuario
    var userContainer       = document.querySelector('div.input-contenedor input[type="text"]').parentElement;
    var UserIcon            = document.createElement('i');    
    UserIcon.className      = 'fa-solid fa-user';
    userContainer.insertBefore(UserIcon, userContainer.querySelector('input'));
    // Contraseña
    var passwordContainer   = document.querySelector('div.input-contenedor input[name="password"]').parentElement;
    var PassIcon            = document.createElement('i');
    PassIcon.className      = 'fa-solid fa-eye-slash';
    PassIcon.onclick = function() {
        view_password(PassIcon);
    };
    passwordContainer.insertBefore(PassIcon, passwordContainer.querySelector('input'));

})

function view_password(PassIcon) {
    var passwordInput = document.querySelector('div.input-contenedor input[name="password"]');
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';
        PassIcon.className = 'fa-solid fa-eye'; // Cambiar el ícono al de ojo abierto
    } else {
        passwordInput.type = 'password';
        PassIcon.className = 'fa-solid fa-eye-slash'; // Cambiar el ícono al de ojo cerrado
    }
}
// function Valida2daContrasena(){
//     var pass1 = document.getElementById('id_password1').value;
//     var pass2 = document.getElementById('id_password2').value;
//     if(pass1 == ''){
//         alert('contraseña 1 Vacia');
//     }
//     if(pass2 == ''){
//         alert('Contraseña 2 Vacia');
//     }
//     if(pass1 != pass2){
//         alert('Las contraseñas no son similares')
//     }
//     if(pass1 == pass2){
//         var boton_registrar = document.getElementById('submit')
//         boton_registrar.click();
//     }

// }