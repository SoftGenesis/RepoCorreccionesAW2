import { getItemsById } from "./api/items.api.js"
//import { card } from "./components/card"

const card_container = document.querySelector('article')
//const form = document.getElementById('.form-page')

/*const chargeCard = () => {
    for(let i = 1; i <= 25; i++){
        renderCardById(i)
    }
}*/

const itemInfo = await getItemsById(4)

const card = 
    `
            <article class="bg-slate-300 rounded-md shadow overflow-hidden max-w-md items-center">
                <!--encabezado-->
                <div class="h-96">
                    <img class="h-full w-full object-contain object-bottom"
                ${
                    itemInfo.map(item=>
                            {
                                return `
                                    src="${item.imagen}" alt="vestido_fiesta">
                                </div>
                                <!--Contenido-->
                                <div class="p-5 space-y-3 flex-1">
                                    <h3 class="text-sm text-sky-500 font-semibold">${item.categoria}</h3>
                                    <h2 class="text-xl text-slate-700 font-semibold leading-relaxed">${item.nombre}</h2>
                                    <p class="text-lg text-slate-700">${item.descripcion}</p>
                                </div>
                                <!--footer-->
                                <div class="flex space-x-6 p-5 text-xl text-blue-700 font-semibold shadow">
                                    <h4>${item.precio_venta}</h4>
                                    <button class="h-8 w-8 bg-sky-300 rounded-lg border-t hover:text-sky-300 hover:bg-white transition-colors">+</button>
                                </div>
                                `
                    }).join('')
                }

            </article>
    `

window.addEventListener('load', () => {
    console.log(getItemsById(1))
    card_container.innerHTML = card
})



