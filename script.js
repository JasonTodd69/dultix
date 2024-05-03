let navbar = document.querySelector('.navbar')

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

let searchForm = document.querySelector('.search-form')

document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');
    navbar.classList.remove('active');
    cartItem.classList.remove('active');
}

let cartItem = document.querySelector('.navbar')

document.querySelector('#cart-btn').onclick = () =>{
    cartItem.classList.toggle('active');
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
}

window.onscroll = () =>{
    navbar.classList.remove('active');
    searchForm.classList.remove('active');
    cartItem.classList.remove('active');
}

<script>
  function mostrarCarrito() {
    var carrito = document.getElementById("carrito");
    carrito.style.display = "block";
  }
</script>

<script>
  var carritoProductos = [];

  function agregarAlCarrito(nombre, precio) {
    carritoProductos.push({ nombre: nombre, precio: precio });
    actualizarCarrito();
  }

  function actualizarCarrito() {
    var carrito = document.getElementById("carrito");
    var contenido = "<h2>Carrito de Compras</h2><ul>";
    var total = 0;

    carritoProductos.forEach(function(producto) {
      contenido += "<li>" + producto.nombre + " - $" + producto.precio + "</li>";
      total += producto.precio;
    });

    contenido += "</ul><p>Total: $" + total + "</p>";
    carrito.innerHTML = contenido;
  }
</script>