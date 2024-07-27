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
    var passwordContainer   = document.querySelector('div.input-contenedor input[type="password"]').parentElement;
    var PassIcon            = document.createElement('i');
    PassIcon.className      = 'fa-solid fa-lock';
    passwordContainer.insertBefore(PassIcon, passwordContainer.querySelector('input'));
    // Confirmar contraseña
    var passwordContainer   = document.querySelector('div.input-contenedor input[name="password2"]').parentElement;
    var PassIcon            = document.createElement('i');
    PassIcon.className      = 'fa-solid fa-lock';
    passwordContainer.insertBefore(PassIcon, passwordContainer.querySelector('input'));
    // console.log('Aprobado');
})

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