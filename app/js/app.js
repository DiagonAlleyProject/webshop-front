
const btnCerrarSesion = document.querySelector('.cerrar-sesion');
btnCerrarSesion.addEventListener('click', (ev) =>{
    // Recuperar token de localStorage.
    const token = localStorage.getItem('token');
    console.log(token);

    // Eleminar token de localStorage.
    const EliminarToken = localStorage.removeItem('token');
    console.log(EliminarToken);

    // Ir pagina de logueo
    window.location.href = '../login/login.html';    
})