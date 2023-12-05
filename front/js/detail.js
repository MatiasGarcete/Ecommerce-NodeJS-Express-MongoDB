const detailProduct = document.querySelector('#detailProduct')

const getProduct = async () => {
    const url = new URLSearchParams(window.location.search)
    const id = url.get('idproducto')
    try {
        let response = await fetch(`http://localhost:3008/api/productos/${id}`)
        let producto = await response.json()
        if (producto) return producto
    } catch (err) {
        alert('No existe el producto ' + err)
    }
}

    const renderDetail = (producto) =>{
        const {nombre, color, imagen, Description, precio} = producto
        detailProduct.innerHTML = `
                                <div class='containerImagen'>
                                    <h1>${nombre}</h1>
                                    <small>${color}</small>
                                    <img src=${imagen} alt="foto">            
                                </div>
                                <div class='containerInfo'>
                                    <p>${Description}</p>
                                    <strong>${precio}</strong>
                                    <button>Agregar al carrito</button>
                                </div>
                                `
    }

    

document.addEventListener('DOMContentLoaded', async () =>{
    let producto = await getProduct()
    console.log(producto);
    renderDetail(producto)
})

