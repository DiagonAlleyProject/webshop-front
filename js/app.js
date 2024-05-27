
// Recuperar token de localStorage.
const token = localStorage.getItem('token');
const btnCerrarSesion = document.querySelector('.cerrar-sesion');
const url = 'http://localhost:8080/product/getAll';
const get = {
            method: 'GET',
            headers: {
                'Authorization': token,
                'Content-Type': 'application/json'
                }
            };

// Fetch para buscar los productos del backend.
fetch(url, get)
    // Convierto la respuesta en JSON
    .then(response => response.json())
    .then(data => {
        // ForEach para recorrer la lista de productos.
        data.response.forEach((product) => {
            crearCard(product);
        })
    })
    .catch(error => console.error('Error:', error));

// Función para crear CARD
function crearCard(product){

    console.log(product)
    // Etiqueta "img" para cargar la imagen.
    const img = document.createElement('img');
    img.src = `img/${product.picture}`;
    img.classList.add('card-img-top');
    img.title = product.name;
   
    // Etiqueta "h3" para el titulo.
    const h3 = document.createElement('h3');
    h3.classList.add('card-title');
    h3.textContent = product.name;

    // Etiqueta "p" para el párrafo.
    const p = document.createElement('p');
    p.classList.add('card-text');
    p.textContent = product.description;

    // Etiqueta "a" para el botón de comprar ahora.
    const a = document.createElement('a');
    a.href = '#';
    a.classList.add('btn');
    a.classList.add('btn-primary');
    a.classList.add('comprar');
    a.textContent = 'Comprar ahora';

    // Etiqueta "button" para el botón de agregar al carrito.
    const button = document.createElement('button');
    button.href = '#';
    button.classList.add('btn');
    button.classList.add('btn-primary');
    button.classList.add('agregar-carrito');
    button.textContent = 'Agregar al carrito';

    //Crear un div que va ser el contenedor de las etiquetas: h3, p, a y button.
    const div = document.createElement('div');
    div.classList.add('card-body');

    const labels = [h3, p, a, button];
    labels.forEach( (label) => {
        div.appendChild(label);
    })
   
    // Crear "div" contenedor.
    const divContainer = document.createElement('div');
    divContainer.classList.add('card');
    divContainer.appendChild(img);
    divContainer.appendChild(div);
   

    // Buscar el div que va contener todas las cars.
    const divContainerCards = document.getElementById('containerCards');
    divContainerCards.appendChild(divContainer);
};

// Botón cerrar sesión.
btnCerrarSesion.addEventListener('click', (ev) =>{
    // Eleminar token de localStorage.
    const EliminarToken = localStorage.removeItem('token');

    // Ir pagina de logueo.
    window.location.href = '../login.html';    
});