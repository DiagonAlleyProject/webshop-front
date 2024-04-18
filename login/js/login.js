
const loginForm = document.getElementById('login-form');
const btnIniciarSesion = document.getElementById('inciarSesion');

loginForm.addEventListener('submit', (ev) => {
    // Prevenir recarga de la pagina.
    ev.preventDefault();

    // Obteniendo valores del Email y Password.
    let inputEmail = document.getElementById('email').value;
    let inputPassword = document.getElementById('password').value;

    // Objeto con las credenciales del usuario.
    let credentials = {
        email: inputEmail,
        password: inputPassword
    };

    // Fetch para enviar las credenciales al backend.
    const URL = 'http://localhost:8080/client/login';
    const post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    };

    fetch(URL, post)
        .then(response => {
            console.log(response.headers.get('Authorization'));

            if(response.status === 200){
                const token = response.headers.get('Authorization');
                // Almacenar el token en localStorage
                localStorage.setItem('token', token);

                window.location.href = '../app/app.html';

            }else {
                alert('Contraseña incorrecta..');
            }
        })
        .catch(error => console.error('Error:', error));
});

// btnIniciarSesion.addEventListener('click', (ev) => {
   

//     const parrafo = document.createElement('p');
//     parrafo.textContent = 'Hello Word';
//     parrafo.style.color = 'white';
//     parrafo.style.textAlign = 'center';
    
//     const container = document.querySelector('.container');
//     container.appendChild(parrafo); 
//     console.log(container)
    
//     window.location.href = '../app/app.html';
// });



// erikatorres@gmail.com
// hola123



































