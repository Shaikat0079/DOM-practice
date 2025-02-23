// console.log("append.js Connected!")
const placesList = document.getElementById("places-list")
// console.log(placesList)
const li = document.createElement('li') 
li.innerText = "Bangladesh";
placesList.appendChild(li)

const mainContainer = document.getElementById('main-container');
console.log(mainContainer)


const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement('ul')

const li1 = document.createElement("li")
li1.innerText = "Biryani"
ul.appendChild(li1);
const li2 = document.createElement("li")
li2.innerText = "Borhani"
ul.appendChild(li2);
const li3 = document.createElement("li")
li3.innerText = "Coke"
ul.appendChild(li3);

section.appendChild(ul)

mainContainer.appendChild(section)


const sectionDress = document.createElement('section')
sectionDress.innerHTML = `
<h1>My Dress Section </h1>

<ul>
<li>T-Shirt</li>
<li>Lungi</li>
<li>Sando Genji</li>
</ul>
`

mainContainer.appendChild(sectionDress)