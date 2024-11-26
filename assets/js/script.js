//Elements selection
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type = "text"]');


//Thriggering when submit is clicked
form.addEventListener('submit', function (event) {
    event.preventDefault(); //Prevent sending the email before verification

    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    console.log(emailValue);
})