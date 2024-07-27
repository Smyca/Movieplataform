document.addEventListener('DOMContentLoaded',()=>{
    console.log('Documento cargado');
    // Usuario
    var userContainer       = document.querySelector('div.input-contenedor input[type="text"]').parentElement;
    var UserIcon            = document.createElement('i');    
    UserIcon.className      = 'fa-solid fa-user';
    userContainer.insertBefore(UserIcon, userContainer.querySelector('input'));
    // Email
    var EmailContainer       = document.querySelector('div.input-contenedor input[type="email"]').parentElement;
    var EmailIcon            = document.createElement('i');    
    EmailIcon.className      = 'fa-solid fa-envelope';
    EmailContainer.insertBefore(EmailIcon, EmailContainer.querySelector('input'));
    // Contraseña
    var passwordInput = document.querySelector('div.input-contenedor input[name="password1"]');
    var passwordContainer   = document.querySelector('div.input-contenedor input[name="password1"]').parentElement;
    var PassIcon            = document.createElement('i');
    PassIcon.className      = 'fa-solid fa-eye-slash';
    PassIcon.onclick = function() {
        view_password(PassIcon,passwordInput);
    };
    passwordContainer.insertBefore(PassIcon, passwordContainer.querySelector('input'));
    // Confirmar contraseña
    var password2Input = document.querySelector('div.input-contenedor input[name="password2"]');
    var password2Container   = document.querySelector('div.input-contenedor input[name="password2"]').parentElement;
    var Pass2Icon            = document.createElement('i');
    Pass2Icon.className      = 'fa-solid fa-eye-slash';
    Pass2Icon.onclick = function() {
        view_password(Pass2Icon,password2Input);
    };
    password2Container.insertBefore(Pass2Icon, password2Container.querySelector('input'));
    // console.log('Aprobado');
})

function view_password(PassIcon,passwordInput) {
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