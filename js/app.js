const btn = document.querySelector('#ajoute')
const form = document.querySelector('#form')
const cancel = document.querySelector('#cancel')
const submit = document.querySelector('#submit')
const name = document.querySelector('#name')
const price = document.querySelector('#price')
const categorie = document.querySelector('#categorie')
const qualite = document.querySelector('#qualite')
const image = document.querySelector('#image')
const cards = document.querySelector('#cards')


btn.addEventListener('click', function () {
    form.style.display = 'flex'
})
cancel.addEventListener('click', function () {
    form.style.display = 'none'
})
form.addEventListener('submit', function (e) {
    e.preventDefault()
    const file = image.files[0]
    form.style.display = 'none'
    const card = document.createElement('div')
    const imgDiv = document.createElement('div')
    cards.appendChild(card)
    card.appendChild(imgDiv)
    imgDiv.className = 'relative'
    const contentDiv = document.createElement('div')
    contentDiv.className = 'p-2 flex flex-col gap-2'
    const bottomRow = document.createElement('div')
    const nameElement = document.createElement('p')
    const categoryElement = document.createElement('p')
    const qualiteElement = document.createElement('p')
    const priceElement = document.createElement('p')
    const imageElement = document.createElement('img')
    const actionsDiv = document.createElement('div')
    actionsDiv.className = 'flex gap-2'
    const editBtn = document.createElement('button')
    editBtn.type = 'button'
    editBtn.className = 'cursor-pointer rounded-xl p-2 bg-[#89898971]'
    editBtn.innerHTML = '<i class="fa-solid fa-pencil"></i>'

    const deleteBtn = document.createElement('button')
    deleteBtn.type = 'button'
    deleteBtn.className = 'cursor-pointer rounded-xl p-2 bg-[#ff212171] text-red-600'
    deleteBtn.innerHTML = '<i class="fa-solid fa-trash"></i>'
    bottomRow.className = 'flex justify-between items-center'
    categoryElement.className = 'absolute top-3 left-5 p-2 bg-[#b7ffb7f8] rounded-xl font-bold text-green-600'

    qualiteElement.className = 'p-2 bg-[#089b0870] rounded-xl font-bold text-green-600'
    qualiteElement.textContent = qualite.selectedOptions[0].textContent


    card.className = 'w-full sm:w-[48%] xl:w-[32%] bg-white rounded-xl shadow-[0_8px_24px_rgba(22,56,38,0.1)]'
    imageElement.className = 'w-full h-[180px] object-cover rounded-t-lg'
    nameElement.className = 'font-bold text-xl'
    priceElement.className = 'text-[#025dff] font-bold'
    priceElement.textContent = price.value + ' DH'
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
    const objectURL = URL.createObjectURL(file)
    imageElement.src = objectURL;
    nameElement.textContent = name.value
    categoryElement.textContent = categorie.selectedOptions[0].textContent



})

