"use strict";

const title = document.querySelector('#title');
const jobRole = document.querySelector('#other-job-role');
const name = document.querySelector("#name");
const color = document.querySelector("#color");
const design = document.querySelector("#design");
const theme = document.querySelectorAll("#color option");
const activities = document.querySelector(".activities");
let totalCost = document.querySelector("#activities-cost");
let total = 0;
const payment = document.querySelector("#payment");
const creditCard = document.querySelector(".credit-card");
const paypal = document.querySelector(".paypal");
const bitcoin = document.querySelector(".bitcoin");
const form = document.querySelector("form");
const email = document.querySelector("#email");
const checkboxes = document.querySelectorAll("input[type=checkbox]");
const ccNum = document.querySelector("#cc-num");
const zipcode = document.querySelector("#zip");
const cvv = document.querySelector("#cvv");


//focuses on name when the web page loads
name.focus();

//hide other text area unless job role option selected is other
jobRole.style.visibility = "hidden";
//listens to input change from user 
title.addEventListener('input', (e) => {
    //checks if value is other and displays textarea 
    if (e.target.value == 'other') {
        jobRole.style.visibility = "visible";
    } else {
        jobRole.style.visibility = "hidden";
    }
});

//enables color when change happens, hides data-theme that isn't selected by the user 
color.disabled = "true";
design.addEventListener('input', (e) => {
    
    color.disabled = false; 
    if (e.target.value == "js puns") {

        for (let i = 1; i <= theme.length-1; i++) {
            if (theme[i].getAttribute("data-theme") != "js puns") {
                theme[i].hidden = true;
            } else {
                theme[i].selected = true; 
                theme[i].hidden = false;
            }
        }
    } 
    
    if (e.target.value == "heart js") {
        for (let i = 1; i <= theme.length-1; i++) {
            if (theme[i].getAttribute("data-theme") != "heart js") {
                theme[i].hidden = true;
            } else {
                theme[i].selected = true;
                theme[i].hidden = false;
            }
        }
    }
});

//adds total cost of selected activities
activities.addEventListener("change", (e) => {
    let totalDisplay = '';

    if (e.target.checked == true) {
        total += Number(e.target.getAttribute("data-cost"));
    } else {
        total -= Number(e.target.getAttribute("data-cost"));
    }

    totalDisplay += `Total: $${total}`;
    totalCost.innerHTML = totalDisplay; 
});


//payment UI updates depending on payment selection 
payment.children[1].selected = true;
paypal.hidden = "true";
bitcoin.hidden = "true";
payment.addEventListener("change", (e) => {

    if (e.target.value == "credit-card") {
        creditCard.hidden = false;
        paypal.hidden = "true";
        bitcoin.hidden = "true";
    } else if (e.target.value == "paypal") {
        paypal.hidden = false;
        creditCard.hidden = "true";
        bitcoin.hidden = "true";
    } else if (e.target.value == "bitcoin") {
        bitcoin.hidden = false;
        creditCard.hidden = "true";
        paypal.hidden = "true";
    }

});

//helper regex functions to validate form name 
const nameIsValid = (nameInput) => {
    return /\w/gi.test(nameInput);
}

//helper regex functions to validate email
const emailIsValid = (emailInput) => {
    return /^[^@]+@[a-zA-Z]+\.com$/i.test(emailInput);
}

//helper regex functions to cc number
const creditCardIsValid = (cc) => {
    return /^\d{13,16}$/.test(cc);
}

//helper regex functions to validate zipcode
const zipcodeIsValid = (zip) => {
    return /^\d{5}$/.test(zip);
    
}

//helper regex functions to validate cvv
const cvvIsValid = (cvv) => {
    return /^\d{3}$/.test(cvv);
}

//validates field with indicators when incorrect  
const validateField = (field) => {

    if (field.id == 'activities') {
        activities.classList.add('not-valid');
        activities.classList.remove('valid');
        activities.lastElementChild.style.display = 'inline';
    } else {
        field.parentElement.classList.add('not-valid');
        field.parentElement.classList.remove('valid');
        field.parentElement.lastElementChild.style.display = 'inline';
    }
}


//validates field and shows correct indicators
const correctField = (field) => {
    
    if (field.id == "activities") {
        activities.classList.add('valid');
        activities.classList.remove('not-valid');
        activities.lastElementChild.style.display = 'none';
    } else {
        field.parentElement.classList.add('valid');
        field.parentElement.classList.remove('not-valid');
        field.parentElement.lastElementChild.style.display = 'none';
    }
}


//on submit, validates form inputs and prevents submission if incomplete/incorrect
form.addEventListener('submit', (e) => {
    let count = 0; 

    if (!nameIsValid(name.value)) {
        e.preventDefault();
        validateField(name);
    } else {
        correctField(name);
    }

    if (!emailIsValid(email.value)) {
        e.preventDefault();
        validateField(email);
    } else {
        correctField(email);
    }

    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            count++;
        }
    }

    if (count == 0) {
        e.preventDefault();
        validateField(activities);
    } else {
        correctField(activities);
    }

    if (payment.value == "credit-card") {
        if (!creditCardIsValid(ccNum.value)) {
            e.preventDefault();
            validateField(ccNum);
        } else {
            correctField(ccNum);
        }

        if (!zipcodeIsValid(zipcode.value)) {
            e.preventDefault();
            validateField(zipcode);
        } else {
            correctField(zipcode);
        }

        if (!cvvIsValid(cvv.value)) {
            e.preventDefault();
            validateField(cvv);
        } else {
            correctField(cvv);
        }
    }
});

//accessibility function for focus events
//adds focus className if focus triggers
const accessibilityFocus = (e) => {
    e.target.parentElement.className = 'focus';
}

//accessibility function for blur events 
//removes focus className if blur triggers
const accessibilityBlur = (e) => {
    e.target.parentElement.classList.remove('focus');
}

for (let i = 0; i < checkboxes.length; i++) {
    checkboxes[i].addEventListener('focus', accessibilityFocus);
    checkboxes[i].addEventListener('blur', accessibilityBlur);
}
