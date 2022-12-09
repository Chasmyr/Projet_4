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
const modalBdy = document.querySelector('.modal-body')
const formData = document.querySelectorAll(".formData");
const closeBtn = document.querySelector(".close")
const validFormBtn = document.querySelector(".btn-submit")
const submitBtn = document.querySelector(".btn-submit")
const form = document.getElementById("formModalGameOn")
const toShowWhenSubmited = document.querySelector('.to-show-when-submited')
const firstNameData = document.getElementById("firstNameData")
const lastNameData = document.getElementById("lastNameData")
const emailData = document.getElementById("emailData")
const dateData = document.getElementById("dateData")
const competNumberData = document.getElementById("competNumberData")
const competData = document.getElementById("competData")
const condGenData = document.getElementById("condGenData")

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  // ? reset le style pour ouvrir plusieurs fois la modal
  form.style.display = "block"
  modalBdy.style.height = "auto"
  toShowWhenSubmited.style.display = "none"
}

// close modal form
closeBtn.addEventListener('click', () => {
  modalbg.style.display = "none"
})
document.querySelector('.btn-to-close-modal').addEventListener('click', () => {
  modalbg.style.display = "none"
})

// validation du formulaire
// ------------------------

// input form elements
const firstName = document.getElementById('first')
const lastName = document.getElementById('last')
const email = document.getElementById('email')
const birthDate = document.getElementById('birthdate')
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
    firstNameData.setAttribute("data-error-visible", false)
    return true
  } else {
    firstNameData.setAttribute("data-error-visible", true)
    firstNameData.setAttribute("data-error", message="Veuillez entrer 2 caractères ou plus pour le champ du prénom.")
    return false
  }
}

// validation du nom
const isLastNameValid = () => {
  let toCheck = lastName.value
  if(toCheck.length >= 2 && charaOnly.test(toCheck)) {
    lastNameData.setAttribute("data-error-visible", false)
    return true
  } else {
    lastNameData.setAttribute("data-error-visible", true)
    lastNameData.setAttribute("data-error", message="Veuillez entrer 2 caractères ou plus pour le champ du nom.")
    return false
  }
}

// validation email
const isEmailValid = () => {
  let toCheck = email.value
  if(validEmail.test(toCheck)){
    emailData.setAttribute("data-error-visible", false)
    return true
  } else {
    emailData.setAttribute("data-error-visible", true)
    emailData.setAttribute("data-error", message="Vous devez entrer votre date de naissance.")
    return false
  }
}

// validation date
const isBirthDateValid = () => {
  let toCheck = birthDate.value
  if(toCheck.length == 10) {
    dateData.setAttribute("data-error-visible", false)
    return true
  } else {
    dateData.setAttribute("data-error-visible", true)
    dateData.setAttribute("data-error", message="Veuillez entrer une date valide.")
    return false
  }
}

// validation concours
const isCompetNumberValid = () => {
  let toCheck = compet.value
  if(numberOnly.test(toCheck)) {
    competNumberData.setAttribute("data-error-visible", false)
    return true
  } else {
    competNumberData.setAttribute("data-error-visible", true)
    competNumberData.setAttribute("data-error", message="Veuillez entrer un nombre valide.")
    return false
  }
}

// validation btn radio
const isOneCheckboxChecked = () => {
  let isntChecked = 0
  for (let i = 0; i < checkbox.length; i++){
    if (checkbox[i].checked == true) {
      competData.setAttribute("data-error-visible", false)
      return true 
    } else {
      isntChecked += 1
      if (isntChecked == 6) {
        competData.setAttribute("data-error-visible", true)
        competData.setAttribute("data-error", message="Vous devez choisir une option.")
        return false
      }
    }
  }
}

// validation condition générales
const isCondGenChecked = () => {
  if(condGen.checked == true) {
    condGenData.setAttribute("data-error-visible", false)
    return true
  } else {
    condGenData.setAttribute("data-error-visible", true)
    condGenData.setAttribute("data-error", message="Vous devez vérifier que vous acceptez les termes et conditions.")
    return false
  }
}

// validation à l'envoie
const isFormValid = () => {
  let a = [isFirstNameValid(), isLastNameValid(), isBirthDateValid(), isCompetNumberValid(), isOneCheckboxChecked(), isCondGenChecked()]
  console.log(a)
  if(!a.includes(false)) {
    console.log('formulaire validé')
    return true
  } else {
    console.log('formulaire avec une erreur')
    return false
  }
}

// utilisez une vent listener sur le formulaire au submit et non pas au click
form.addEventListener('submit', (e) => {
  e.preventDefault()
  if(isFormValid()) {
    form.style.display = "none"
    modalBdy.style.height = "85vh"
    toShowWhenSubmited.style.display = "flex"
  } else {
    return false
  }
})