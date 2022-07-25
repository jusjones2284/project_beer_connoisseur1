const base_url = 'https://api.punkapi.com/v2/beers'

document.addEventListener("DOMContentLoaded", ()=> {


function getBeers(){

  fetch(base_url)
  .then(response => response.json())
  .then(data => data.forEach(beer => showBeer(beer)))}

  getBeers()

  
function showBeer(beer){

const beerCollection = document.getElementById("beer")
  
  
  const div = document.createElement("div")
  div.classList.add("beverage")
  const p = document.createElement('p')
  p.textContent = `${beer.name}`

  const ul = document.createElement('ul')
  ul.textContent = `${beer.description}`
  ul.classList.add("beer-descrip")
  div.append(p)
  beerCollection.append(div)
  div.addEventListener('mouseover',function(e){
  const attachBeerDescrip = ul.textContent
  div.append(ul)
} )

}
const form = document.querySelector(".add-beer-form")
form.addEventListener("submit", addNewbeer)

function addNewbeer(event){
  event.preventDefault()
  const [name] = event.target
  console.log("Name of beer:", name.value)
  const beerCollection = document.getElementById("beer")
  const beerValue = name.value
  const p = document.createElement("p")
  p.textContent = beerValue
  const div =  document.createElement("div")
  div.classList.add("description")
  div.append(p)
  beerCollection.append(div)
  form.reset()

 
}

const allBeverages = document.querySelectorAll(".beverage")
allBeverages.forEach((div)=>{ 
  console.log("beers")
})

document.querySelector('#alert').addEventListener('click', ()=> alert('Thank you for your submission! Drink responsibly.'))
})




