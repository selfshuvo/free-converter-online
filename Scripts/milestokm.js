const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const miles = input.value;
    const Km = miles * 1.609344;
    console.log(Km);

    output.innerText = Km;
}



