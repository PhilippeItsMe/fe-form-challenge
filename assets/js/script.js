//Elements selection
const form = document.querySelector('form');
const emailInput = document.querySelector('input[type = "text"]');


//Thriggering when submit is clicked
form.addEventListener('submit', function (event) {
    event.preventDefault(); //Prevent sending the email before verification

    const emailValue = emailInput.value.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;


    //Email threatment
    if (!emailRegex.test(emailValue)) {
        const errorMessage = document.querySelector('#invalid-email');
        errorMessage.textContent = 'Valid email required';

        const inputStyle = document.querySelector('input');
        inputStyle.style.backgroundColor = 'var(--orange30)';
        inputStyle.style.borderColor = 'var(--orange)';

    } else {
        form.submit();
        setTimeout(() => {
            window.location.href = 'thanks.html';
        }, 100);
    }
})