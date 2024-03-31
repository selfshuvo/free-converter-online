const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const inch = input.value;
    const feet = inch / 12;
    const feetTwoDecimal = feet.toFixed(2);

    output.innerText = feetTwoDecimal;
}



