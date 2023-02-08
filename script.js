const carrito =[]

const prodContenedor = document.getElementById("contenedor")

prodContenedor.addEventListener('click', (e) =>{
    agregarAlCarrito(e.target.id)
})

const agregarAlCarrito = (productoId) =>{
    const producto = productos.find(producto => producto.id ==productoId)
    console.push(producto)

    console.table(carrito)
}
