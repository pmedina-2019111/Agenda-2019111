document.addEventListener('DOMContentLoaded', function(){
    const loginForm = document.getElementById('loginForm ');
    loginForm.addEventListener('submit', function (event){
        event.preventDefault();
        login();
    });
});

function login(){
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();

    if (email === 'pmedina-2019111@kinal.edu.gt' && password === '0') {
        
        alert('Inicio de sesión exitoso. Redirigiendo a la página de contactos.');
        window.location.href = 'contacts.html'; 
      } else {
        // Autenticación fallida
        alert('Inicio de sesión fallido. Verifica tu correo y contraseña.');
      }
}

