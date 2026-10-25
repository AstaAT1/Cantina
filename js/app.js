const btn = document.querySelector('#ajoute')
const form = document.querySelector('#form')
const modalForm = document.querySelector('#modal-form')
const cancel = document.querySelector('#cancel')
const submit = document.querySelector('#submit')
const name = document.querySelector('#name')
const price = document.querySelector('#price')
const categorie = document.querySelector('#categorie')
const qualite = document.querySelector('#qualite')
const image = document.querySelector('#image')
const cards = document.querySelector('#cards')
const lundiEntree = document.querySelector('#lundi-entree')

const foods = []
let editId = null

btn.addEventListener('click', function () {
    form.style.display = 'flex'
    image.required = true
    editId = null
    modalForm.reset()
})
cancel.addEventListener('click', function () {
    form.style.display = 'none'
    modalForm.reset()
    editId = null

})
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const recette = {
        id: "",
        name: "",
        price: "",
        category: "",
        qualite: "",
        image: "",
    }

    const file = image.files[0]
    let objectURL = null
    if (file !== undefined) {
        objectURL = URL.createObjectURL(file)
    }
    
    recette.name = name.value
    recette.price = Number(price.value)
    recette.category = categorie.value
    recette.qualite = qualite.value
    recette.image = objectURL
    recette.id = crypto.randomUUID()

    if (editId === null) {
        foods.push(recette)
    }
    else{
       const testfind = foods.find(function (f) {
            return f.id === editId
        })
        if (testfind !== undefined) {
            testfind.name = name.value
            testfind.price = Number(price.value)
            testfind.category = categorie.value
            testfind.qualite = qualite.value
            if (objectURL !== null) {
            testfind.image = objectURL
            }
        }
        console.log(foods);
        
    }
    console.log(foods)

    afficheRecettes()
    affichePlanning()
    modalForm.reset()
    editId = null
})

function afficheRecettes() {
    cards.innerHTML = ''

    foods.forEach(function (recette) {
        const card = document.createElement('div')
        const imgDiv = document.createElement('div')
        const contentDiv = document.createElement('div')
        const bottomRow = document.createElement('div')
        const nameElement = document.createElement('p')
        const categoryElement = document.createElement('p')
        const qualiteElement = document.createElement('p')
        const priceElement = document.createElement('p')
        const imageElement = document.createElement('img')
        const actionsDiv = document.createElement('div')
        const editBtn = document.createElement('button')
        const deleteBtn = document.createElement('button')
        form.style.display = 'none'
        cards.appendChild(card)
        card.appendChild(imgDiv)
        imgDiv.className = 'relative'
        contentDiv.className = 'p-2 flex flex-col gap-2'
        actionsDiv.className = 'flex gap-2'
        editBtn.type = 'button'
        editBtn.className = 'cursor-pointer rounded-xl p-2 bg-[#89898971]'
        editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>'
        deleteBtn.type = 'button'
        deleteBtn.className = 'cursor-pointer rounded-xl p-2 bg-[#ff212171] text-red-600'
        deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
        bottomRow.className = 'flex justify-between items-center'
        categoryElement.className = 'absolute top-3 left-5 p-2 bg-[#b7ffb7f8] rounded-xl font-bold text-green-600'
        qualiteElement.className = 'p-2 bg-[#089b0870] rounded-xl font-bold text-green-600'
        qualiteElement.textContent = recette.qualite
        card.className = 'w-full sm:w-[48%] xl:w-[32%] bg-white rounded-xl shadow-[0_8px_24px_rgba(22,56,38,0.1)]'
        imageElement.className = 'w-full h-[180px] object-cover rounded-t-lg'
        nameElement.className = 'font-bold text-xl'
        priceElement.className = 'text-[#025dff] font-bold'
        priceElement.textContent = recette.price + ' DH'
        imgDiv.appendChild(imageElement)
        imgDiv.appendChild(categoryElement)
        contentDiv.appendChild(nameElement)
        actionsDiv.appendChild(editBtn)
        actionsDiv.appendChild(deleteBtn)
        bottomRow.appendChild(priceElement)
        bottomRow.appendChild(qualiteElement)
        bottomRow.appendChild(actionsDiv)
        contentDiv.appendChild(bottomRow)
        card.appendChild(contentDiv)
        imageElement.src = recette.image
        nameElement.textContent = recette.name
        categoryElement.textContent = recette.category

        deleteBtn.addEventListener('click', function () {
            const index = foods.findIndex(function (f) {
                return f.id === recette.id
            })
            if (index !== -1) {
                foods.splice(index, 1)
                afficheRecettes()
             
            }
        })
        editBtn.addEventListener('click', function () {
            form.style.display = 'flex'
            name.value = nameElement.textContent
            price.value = parseInt(priceElement.textContent)
            categorie.value = recette.category
            qualite.value = recette.qualite
            editId = recette.id
            image.required = false
        })
    })

}
function affichePlanning() {
    const entree = foods.filter(function(food) {
    return food.category === "Entree"
    })
    console.log(entree)
    entree.forEach(function(recette) {
        const option = document.createElement('option')
        option.textContent = recette.name
        option.value = recette.id
        lundiEntree.appendChild(option)
    })
    
}
