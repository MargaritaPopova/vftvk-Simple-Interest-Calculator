
var year = document.getElementById("years").value;
document.getElementById("principal").focus()
var slider = document.getElementById("range");
var output = document.getElementById("rate");
output.innerHTML = slider.value; // Display the default slider value

slider.oninput = function() {
output.innerHTML = '  ' + this.value + '%';
}
console.log('onload called')

function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal == 0 || principal < 0 || !principal) {
        alert("Please enter a number that is greater than 0")
        return;
    }
    var rate = parseFloat(document.getElementById("range").value);
    var year = parseInt(document.getElementById("years").value);
    var final = principal * (rate/100) * year;
    var result = document.getElementById("result");
    result.innerHTML =
    "If you deposit <span class='markered'>" + principal + "</span>,<br>" +
    "at an interest rate <span class='markered'>" + rate + "%</span>.<br>" +
    "You will receive an amount of <span class='markered'>" + final + "</span>,<br>" +
    "in the year <span class='markered'>" + (2021+year) + "</span>.<br>";
}
