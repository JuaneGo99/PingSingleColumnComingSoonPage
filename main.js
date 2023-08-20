let inputEmail = document.getElementById('email');
let inputButton = document.getElementById('button');


inputButton.addEventListener('click', (event)=>{
    event.preventDefault();
    validateEmail(inputEmail.value);
});

function validateEmail(email){
    let expReg = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/g;

    if(expReg.test(email) == true){
        inputEmail.style.border = '2px solid var(--Blue)';
        ErroR.style.visibility = 'hidden';
        inputEmail.value = ''; 
    }else{
        inputEmail.style.border = '2px solid var(--Light-Red)';
        ErroR.style.visibility = 'visible';
    }
}