"use strict";
var $ = function(id) { return document.getElementById(id); };


var clearTextBoxes = function() {
    $("degrees_entered").value = "";
    $("degrees_computed").value = "";
};

window.onload = function() {
    $("convert").onclick = convertTemp;
    $("to_celsius").onclick = toCelsius;
    $("to_fahrenheit").onclick = toFahrenheit;
	$("degrees_entered").focus();
};

const toFahrenheit = () => {
    let degreesLabel = $("degree_label_1");
    let degreesComputed = $("degree_label_2");

    degreesLabel.innerHTML = "Enter C degrees:";
    degreesComputed.innerHTML = "Degrees Fahrenheit:";

    clearTextBoxes();
    $("degrees_entered").focus();
}

const toCelsius = () => {
    let degreesLabel = $("degree_label_1");
    let degreesComputed = $("degree_label_2");
    
    degreesLabel.innerHTML = "Enter F degrees:";
    degreesComputed.innerHTML = "Degrees Celsius:";

    clearTextBoxes();
    $("degrees_entered").focus();
}

const convertTemp = () => {

    if(isNaN($("degrees_entered").value)) {
        alert("You must enter a valid number of degrees.");
    } else {

        if($("to_celsius").checked) {
            let degreesEntered = parseFloat($("degrees_entered").value);
            let degreesComputed = (degreesEntered - 32) * 5 / 9;
            $("degrees_computed").value = degreesComputed;
        } else {
            let degreesEntered = parseFloat($("degrees_entered").value);
            let degreesComputed = (degreesEntered * 9 / 5) + 32;
            $("degrees_computed").value = degreesComputed;
        }
    }
};