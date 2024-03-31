const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const miles = input.value;
    const Km = miles * 1.609344;
    const KmTwoDecimal = Km.toFixed(2);

    output.innerText = KmTwoDecimal;
}



