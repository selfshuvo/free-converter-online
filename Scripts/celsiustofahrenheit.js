const input = document.getElementById("input");
const output = document.getElementById("output");

function temperatureCalculator() {
    const celsius = input.value;
    const farhenheit = (9/5) * celsius + 32;
    const farhenheitTwoDecimal = farhenheit.toFixed(2);

    output.innerText = farhenheitTwoDecimal;

}