function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

// DOM Elements
const modalbg = document.querySelector(".bground");
const modalBtn = document.querySelectorAll(".modal-btn");
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close")
const validFormBtn = document.querySelector(".btn-submit")
const submitBtn = document.querySelector(".btn-submit")
const form = document.getElementsByName("reserve")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
}

// close modal form
closeBtn.addEventListener('click', () => {
  modalbg.style.display = "none"
})

// validation du formulaire
// ------------------------

// input form elements
const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const compet = document.getElementById('quantity')
const checkbox = document.querySelectorAll('.checkbox-group')
const condGen = document.getElementById('checkbox1')

// RegExp
const charaOnly = /^[A-Za-z ]+$/
const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const numberOnly = /^\d+$/

// validation du prénom
const isFirstNameValid = () => {
  let toCheck = firstName.value
  if(toCheck.length >= 2 && charaOnly.test(toCheck)) {
    console.log('prénom c bon')
    return true
  } else {
  }
}

// validation du nom
const isLastNameValid = () => {
  let toCheck = lastName.value
  if(toCheck.length >= 2 && charaOnly.test(toCheck)) {
    console.log('nom c bon')
    return true
  } else {
  }
}

// validation email
const isEmailValid = () => {
  let toCheck = email.value
  if(validEmail.test(toCheck)){
    console.log('bonne email')
    return true
  } else {
  }
}

// validation concours
const isCompetNumberValid = () => {
  let toCheck = compet.value
  if(numberOnly.test(toCheck)) {
    console.log('compet valide')
    return true
  } else {

  }
}

// validation btn radio
const isOneCheckboxChecked = () => {
  let isChecked = 0
  if(isChecked == 0) {
    for (let i = 0; i < checkbox.length; i++){
      if (checkbox[i].checked == true) {
        console.log('une checkbox a été coché')
        return true
      }
    }
  } else {
  }
}

// validation condition générales
const isCondGenChecked = () => {
  if(condGen.checked == true) {
    console.log('conditions générales accéptées')
    return true
  } else {

  }
}

// validation à l'envoie
const isFormValid = () => {
  if(isFirstNameValid() && isLastNameValid() && isEmailValid() && isCompetNumberValid() && isOneCheckboxChecked() && isCondGenChecked()) {
    console.log('formulaire validé')
  } else {
    console.log('formulaire avec une erreuer')
  }
}
submitBtn.addEventListener('click', (e) => {
  e.preventDefault()
  isFormValid()
})