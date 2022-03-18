"use strict";

const $ = selector => document.querySelector(selector);

const padSingleDigit = num => num.toString().padStart(2, "0");

const displayCurrentTime = () => {
    
    const now = new Date();

    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";
    const convertedHours = hours % 12;
    const convertedMinutes = padSingleDigit(minutes);
    const convertedSeconds = padSingleDigit(seconds);
    
    $("#hours").firstChild.nodeValue = convertedHours;
    $("#minutes").firstChild.nodeValue = convertedMinutes;
    $("#seconds").firstChild.nodeValue = convertedSeconds;
    $("#ampm").firstChild.nodeValue = ampm;
};

document.addEventListener("DOMContentLoaded", () => {

    displayCurrentTime();
    setInterval(displayCurrentTime, 1000);
});