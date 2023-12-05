
const $ = document;
const contenedorProductos = $.querySelector('#containerProducts')

const newCard = ({nombre, imagen, Description, precio, id}) => {
    return `
            <div class="card" id='${id}'>
                <h3 class="card-title">${nombre}</h3>
                <img class="card-img" src="${imagen}" alt="imagen de producto">
                <p class="card-desc">${Description.slice(0,40)}</p>
                <strong class="card-price">${precio}</strong>
                <button class="btn-add">agregar al carrito</button>
            </div>
            `
}

const renderCards = (array) => {
    containerProducts.innerHTML = '';
    array.map(item => {
        containerProducts.innerHTML += newCard(item)
    })
}

const handleDetailCard = (id) => {
    // console.log('hiciste click' + evento.target);
    window.location = `./pages/detail.html?idproducto=${id}`
}

const addClickDetailCard = () => {
    const cards = document.querySelectorAll('.card')
    console.log(cards);
    cards.forEach((card) => card.addEventListener('click', (evento) => {
        handleDetailCard(evento.target.id)
    }))
}

const getAll = async () => {
    try {
        const response = await fetch('http://localhost:3008/api/productos')
        if (response.status !== 200) throw new Error('Error en la solicitud')
        const data = await response.json()
        renderCards(data)
    } catch (error) {
        alert('Error' + error)
    }
}

document.addEventListener('DOMContentLoaded', async () => {

    await getAll();
    addClickDetailCard();

})
