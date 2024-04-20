
const sigUpForm = document.getElementById('sig-up-form');

sigUpForm.addEventListener('submit', (ev) => {
    // Prevenir recarga de la pagina.
    ev.preventDefault();

    // Obteniendo valores del Email y Password.
    let name = document.getElementById('name').value;
    let lastName = document.getElementById('lastName').value;
    let address = document.getElementById('address').value;
    let idCardNumber = document.getElementById('idCardNumber').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    // Validar que todos los campos esten completos.
    if(name === '' && lastName === '' && address === '' && idCardNumber === '' && email === '' && password === ''){
        alert('Debes compretar todos los campos.');
        return;
    }

    // Objeto con los valores del registro.
    let valoresResgistro = {
        name: name,
        lastName: lastName,
        address: address,
        idCardNumber: idCardNumber,
        email: email,
        password: password
    };

    // Fetch para enviar registro al backend.
    const URL = 'http://localhost:8080/client/add';
    const post = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(valoresResgistro)
    };

    fetch(URL, post)
    .then(response => {
        if (response.status === 201){
            window.location.href = 'usuario-registrado.html';
        }else{
            alert('No fue posible crear el usuaio')
        }
    })
    .catch(error => console.error('Error', error));
});