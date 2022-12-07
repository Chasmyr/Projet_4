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

// launch modal event
modalBtn.forEach((btn) => btn.addEventListener("click", launchModal));

// launch modal form
function launchModal() {
  modalbg.style.display = "block";
  // reset le style si le formulaire est fermé / ouvert
  // reset style du prénom
  firstName.style.border = "none"
  firstLabel.style.color = "white"
  firstLabel.innerText = "Prénom"
  // reset style du nom
  lastName.style.border = "none"
  lastLabel.style.color = "white"
  lastLabel.innerText = "Nom"
  // reset style de l'email
  email.style.border = "none"
  emailLabel.style.color = "white"
  emailLabel.innerText = "E-mail"
  // reset date de naissance
  birthDate.style.border = "none"
  dateLabel.style.color = "white"
  dateLabel.innerText = "Date de naissance"
  // reset label des options
  checkBoxGroupLabel.style.color = "white"
  checkBoxGroupLabel.innerText = "A quel tournoi souhaitez-vous participer cette année ?"
  // reset conditions générales
  condGenLabel.style.color = "white"
  condGenLabel.innerText = "J'ai lu et accepté les conditions d'utilisation."
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
const firstLabel = document.getElementById('firstLabel')
const lastName = document.getElementById('last')
const lastLabel = document.getElementById('lastLabel')
const email = document.getElementById('email')
const emailLabel = document.getElementById('emailLabel')
const birthDate = document.getElementById('birthdate')
const dateLabel = document.getElementById('dateLabel')
const compet = document.getElementById('quantity')
const checkbox = document.querySelectorAll('.checkbox-group')
const checkBoxLabel = document.getElementById('checkBoxGroupLabel')
const condGen = document.getElementById('checkbox1')
const condGenIcon = document.querySelector('.condGenIcon')
const condGenLabel = document.getElementById('condGenLabel')

// RegExp
const charaOnly = /^[A-Za-z ]+$/
const validEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
const numberOnly = /^\d+$/

// validation du prénom
firstName.addEventListener('focus', () => {
  firstName.style.border = "none"
  firstLabel.style.color = "white"
  firstLabel.innerText = "Prénom"
})
const isFirstNameValid = () => {
  let toCheck = firstName.value
  if(toCheck.length >= 2 && charaOnly.test(toCheck)) {
    return true
  } else {
    firstName.style.border = "3px solid red"
    firstLabel.style.color = "red"
    firstLabel.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du prénom."
  }
}

// validation du nom
lastName.addEventListener('focus', () => {
  lastName.style.border = "none"
  lastLabel.style.color = "white"
  lastLabel.innerText = "Nom"
})
const isLastNameValid = () => {
  let toCheck = lastName.value
  if(toCheck.length >= 2 && charaOnly.test(toCheck)) {
    return true
  } else {
    lastName.style.border = "3px solid red"
    lastLabel.style.color = "red"
    lastLabel.innerText = "Veuillez entrer 2 caractères ou plus pour le champ du nom."
  }
}

// validation email
email.addEventListener('focus', () => {
  email.style.border = "none"
  emailLabel.style.color = "white"
  emailLabel.innerText = "E-mail"
})
const isEmailValid = () => {
  let toCheck = email.value
  if(validEmail.test(toCheck)){
    return true
  } else {
    email.style.border = "3px solid red"
    emailLabel.style.color = "red"
    emailLabel.innerText = "Vous devez entrer votre date de naissance."
  }
}

// validation date
birthDate.addEventListener('focus', () => {
  birthDate.style.border = "none"
  dateLabel.style.color = "white"
  dateLabel.innerText = "Date de naissance"
})
const isBirthDateValid = () => {
  let toCheck = birthDate.value
  if(toCheck.length == 10) {
    return true
  } else {
    birthDate.style.border = "3px solid border"
    dateLabel.style.color = "red"
    dateLabel.innerText = "Veuillez entrer une date valide."
  }
}

// validation concours
const isCompetNumberValid = () => {
  let toCheck = compet.value
  if(numberOnly.test(toCheck)) {
    return true
  } else {

  }
}

// validation btn radio
for(let i =0; i < checkbox.length; i++) {
  checkbox[i].addEventListener('click', () => {
    checkBoxGroupLabel.style.color = "white"
    checkBoxGroupLabel.innerText = "A quel tournoi souhaitez-vous participer cette année ?"
  })
}
const isOneCheckboxChecked = () => {
  let isntChecked = 0
  for (let i = 0; i < checkbox.length; i++){
    if (checkbox[i].checked == true) {
      return true 
    } else {
      isntChecked += 1
      if (isntChecked == 6) {
        checkBoxGroupLabel.style.color = "red"
        checkBoxGroupLabel.innerText = "Vous devez choisir une option."
      }
    }
  }
}

// validation condition générales
condGenIcon.addEventListener('click', () => {
  condGenLabel.style.color = "white"
  condGenLabel.innerText = "J'ai lu et accepté les conditions d'utilisation."
})
const isCondGenChecked = () => {
  if(condGen.checked == true) {
    return true
  } else {
    condGenLabel.style.color = "red"
    condGenLabel.innerText = "Vous devez vérifier que vous acceptez les termes et conditions."
  }
}

// validation à l'envoie
const isFormValid = () => {
  if(isFirstNameValid() && isLastNameValid() && isEmailValid() && isBirthDateValid() && isCompetNumberValid() && isOneCheckboxChecked() && isCondGenChecked()) {
    console.log('formulaire validé')
    return true
  } else {
    console.log('formulaire avec une erreuer')
    return false
  }
}
// const validate = () => {
//   if(isFirstNameValid() && isLastNameValid() && isEmailValid() && isBirthDateValid() && isCompetNumberValid() && isOneCheckboxChecked() && isCondGenChecked()) {
//     console.log('formulaire validé')
//     modalBdy.style.visibility = "0"
//     alert('validation')
//   } else {
//     return false
//   }
// }

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