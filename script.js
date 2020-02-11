const container = document.querySelector(".container")

const content = document.createElement('div')

content.classList.add("content")
content.textContent = "This is a Glorious Text!"

container.appendChild(content);

const para = document.createElement('p')
para.style.cssText = 'color: red;'
para.textContent = "Hey I'm Red!"

container.appendChild(para)

const headThree = document.createElement('h3')
headThree.style.cssText = 'color: blue;'
headThree.textContent = "Hey I am Blue!"

container.appendChild(headThree)

const div = document.createElement('div')
div.style.cssText = 'border: 3px solid black; background-color: pink;'

const headOne = document.createElement('h1')
headOne.textContent = "I am in Div!"

div.appendChild(headOne)

const para_div = document.createElement('p')
para_div.textContent = "Me Too!"

div.appendChild(para_div)

container.appendChild(div)