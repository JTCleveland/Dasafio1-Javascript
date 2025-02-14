let precio = 400000

precioSpan = document.querySelector(".precio-inicial");
precioSpan.innerHTML = precio

let cantidad = 0

cantidadSpan = document.querySelector(".cantidad");
cantidadSpan.innerHTML = cantidad

function sumar() {
    cantidad++
    cantidadSpan.innerHTML = cantidad
    updateTotal()
}

function restar() {
    if (cantidad > 0) {
        cantidad--
        cantidadSpan.innerHTML = cantidad
        updateTotal()
    }
}

function updateTotal() {
    let total = precio * cantidad;
    totalSpan = document.querySelector(".valor-total");
    totalSpan.innerHTML = total
}

