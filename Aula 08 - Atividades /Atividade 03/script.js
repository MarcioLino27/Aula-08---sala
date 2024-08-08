// seleciona o body para por o texto
let corpo = document.querySelector('body')

const filho1 = document.createElement('p')
corpo.appendChild(filho1)
filho1.classList.add("meuElemento")
filho1.innerText= "teste"