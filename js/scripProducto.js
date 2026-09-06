const productos = {
    "5kg": {
        nombre: "Cilindro 5kg",
        precio: 15000,
        imagen: "img/gas5kg.png",
        categoria: "PROPANO · GAS LP",
        descripcion: "Ideal para cocinas pequeñas, calentones portátiles y acampadas."
    },
    "11kg": {
        nombre: "Cilindro 11kg",
        precio: 28000,
        imagen: "img/gas11kg.png",
        categoria: "PROPANO · GAS LP",
        descripcion: "Perfecto para hogares, estufas y calefactores de uso diario."
    },
    "15kg": {
        nombre: "Cilindro 15kg",
        precio: 35000,
        imagen: "img/gas15kg.png",
        categoria: "PROPANO · GAS LP",
        descripcion: "Para alto consumo, restaurantes, panaderías y calefacción central."
    },
    "45kg": {
        nombre: "Cilindro Industrial",
        precio: 85000,
        imagen: "img/gas45kg.png",
        categoria: "PROPANO · GAS LP",
        descripcion: "Para grandes consumos, industrias, calderas y procesos productivos."
    },
    "regulador": {
        nombre: "Regulador de Presión",
        precio: 8500,
        imagen: "img/regulador.png",
        categoria: "ACCESORIOS · GAS LP",
        descripcion: "Controla la salida de gas de manera segura y eficiente."
    },
    "manguera": {
        nombre: "Manguera de Gas",
        precio: 6000,
        imagen: "img/manguera.png",
        categoria: "ACCESORIOS · GAS LP",
        descripcion: "Manguera flexible y resistente para instalaciones seguras."
    }
};

function cargarProducto() {
    const params = new URLSearchParams(window.location.search);
    const producto = productos[params.get("producto")];

    if (!producto) {
        window.location.href = "productos.html";
        return;
    }

    document.title = `${producto.nombre} - Gas Volcano`;
    document.getElementById("nombreProducto").textContent = producto.nombre;
    document.getElementById("descripcionProducto").textContent = producto.descripcion;
    document.getElementById("precioProducto").textContent = formatearPrecio(producto.precio);
    document.getElementById("imagenProducto").src = producto.imagen;
    document.getElementById("imagenProducto").alt = producto.nombre;
    document.getElementById("categoriaProducto").textContent = producto.categoria;
    actualizarTotal(producto);
}

function formatearPrecio(valor) {
    return valor.toLocaleString("es-CL");
}

function obtenerProductoActual() {
    const params = new URLSearchParams(window.location.search);
    return productos[params.get("producto")];
}

function actualizarTotal(producto) {
    const input = document.getElementById("cantidad");
    if (!input || !producto) return;

    const cantidad = Number(input.value);
    document.getElementById("totalProducto").textContent =
        formatearPrecio(producto.precio * cantidad);
}

function cambiarCantidad(valor) {
    const input = document.getElementById("cantidad");
    if (!input) return;

    input.value = Math.max(1, Math.min(10, Number(input.value) + valor));
    actualizarTotal(obtenerProductoActual());
}

function confirmarPedido() {
    const producto = obtenerProductoActual();
    if (!producto) return;

    const cantidad = Number(document.getElementById("cantidad").value);
    const total = producto.precio * cantidad;

    alert(
        "¡Pedido registrado correctamente!\n\n" +
        "Producto: " + producto.nombre + "\n" +
        "Cantidad: " + cantidad + "\n" +
        "Total: $" + formatearPrecio(total) + "\n" +
        "Método de pago: Efectivo al recibir.\n\n" +
        "El pago será registrado al confirmar la entrega."
    );
}

document.addEventListener("DOMContentLoaded", cargarProducto);
