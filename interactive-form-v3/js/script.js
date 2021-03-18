"use strict";

const title = document.querySelector('#title');
const jobRole = document.querySelector('#other-job-role');
const nameFocus = document.querySelector("#name");
const color = document.querySelector("#color");
const design = document.querySelector("#design");
const activities = document.querySelector(".activities");
const totalCost = document.querySelector("#activity-cost");

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

color.disabled = "true";
design.addEventListener('input', (e) => {
     
    if (e.target.value == "Theme - JS Puns") {
        console.log(e.target.value);
    }

});

activities.addEventListener("change", (e) => {

});