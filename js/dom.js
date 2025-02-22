console.log("Hello from JS")
const liCollection = document.getElementsByTagName("li")
console.log(liCollection);
for(const li of liCollection){
    console.log(li)
}

const allHeadings = document.getElementsByTagName('h1')
for(const h1 of allHeadings){
    console.log(h1.innerText)
}
const cNames = document.getElementsByClassName('important-places')

for(const cName of cNames){
    console.log(cName.innerText)
}