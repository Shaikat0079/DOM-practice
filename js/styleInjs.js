const sections = document.querySelectorAll('section');
// console.log(sections)
// console.log("Connected");
for(const section of sections){
    section.style.border = "5px solid grey"
    section.style.margin = "10px"
    section.style.borderRadius = "15px"
    section.style.paddingLeft = "15px"
    section.style.backgroundColor = "lightgrey"
}

const placesContainer = document.getElementById("places-container");

// placesContainer.style.backgroundColor = "aqua"

placesContainer.classList.add('red-bg')

const placesList = document.getElementById("places-list");

placesList.classList.add('list-none')
console.log(placesContainer.childNodes)
const children = placesContainer.childNodes;
for(const child of children){
    console.log(child)
}
console.log(placesContainer.childNodes[3].childNodes)
