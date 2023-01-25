const form = document.querySelector('#form-habits')
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")
let images = document.querySelectorAll("img")

button.addEventListener("click", add)
form.addEventListener("change", save)

for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", overDescription)
}
for (let i = 0; i < images.length; i++) {
  images[i].addEventListener("mouseover", outDescription)
}

function overDescription() {
  let description = this.getAttribute("alt")
  alert(description)
}

function outDescription() {
  let description = this.getAttribute("alt")
  alert("")
}

function add() {
  // const today = "19/01"
  const today = new Date().toLocaleDateString('pt-br').slice(0, -5)
  const dayExists = nlwSetup.dayExists(today)
  
  if(dayExists) {
    alert("Dia já incluso!")
    return
  }

  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem('NLWSetup@habits', JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem('NLWSetup@habits')) || {}
nlwSetup.setData(data)
nlwSetup.load()