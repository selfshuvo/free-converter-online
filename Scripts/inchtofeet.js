const input = document.getElementById("input");
const output = document.getElementById("output");

function calculation() {
    const inch = input.value;
    const feet = inch / 12;
    console.log(feet);

    output.innerText = feet;
}



