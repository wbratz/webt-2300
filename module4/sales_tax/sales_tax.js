"use strict";

const $ = selector => document.querySelector(selector);

const processEntries = () => {
    const subTotal = parseFloat($("#subtotal").value);
    const taxRate = parseFloat($("#tax_rate").value);

    if (isNaN(subTotal) || subTotal < 0 || subTotal > 10000) {
        alert("Subtotal must be > 0 and < 10000");
    }
    else if (isNaN(taxRate) || taxRate < 0 || taxRate > 12) {
        alert("Tax Rate must be > 0 and < 12");
    }
    else {
        const salesTax = parseFloat(subTotal * (taxRate / 100));
        $("#sales_tax").value = salesTax.toFixed(2);
        const total = subTotal + salesTax;
        $("#total").value = total.toFixed(2);
    }

    subTotalFocus();
};

const clearForm = () => {
    $("#subtotal").value = "";
    $("#tax_rate").value = "";
    $("#sales_tax").value = "";
    $("#total").value = "";

    subTotalFocus();
};

const subTotalFocus = () => {
    $("#subtotal").focus();
}

document.addEventListener("DOMContentLoaded", () => {
    let calculate = $("#calculate");
    calculate.addEventListener("click", processEntries);

    let clera = $("#clear");
    clera.addEventListener("click", clearForm);
});

window.onload = () => {
    subTotalFocus();
};
