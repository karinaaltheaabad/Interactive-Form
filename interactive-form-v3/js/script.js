"use strict";

const title = document.querySelector('#title');
const jobRole = document.querySelector('#other-job-role');
const nameFocus = document.querySelector("#name");
const color = document.querySelector("#color");
const design = document.querySelector("#design");
const activities = document.querySelector(".activities");
let totalCost = document.querySelector("#activities-cost");
let total = 0;
const payment = document.querySelector("#payment");
const creditCard = document.querySelector(".credit-card");
const paypal = document.querySelector(".paypal");
const bitcoin = document.querySelector(".bitcoin");

//focuses on name when the web page loads
nameFocus.focus();

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

//NOT DONE
color.disabled = "true";
design.addEventListener('input', (e) => {
     
    color.disabled = "false";
    if (e.target.value == "js puns") {

    } else if (e.target.value == "heart js") {

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
creditCard.selected = "selected";
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