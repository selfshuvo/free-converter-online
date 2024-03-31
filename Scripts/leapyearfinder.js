const input = document.getElementById("input");
const output = document.getElementById("output");

function leapYearChecker() {
    const year = input.value;
    if(year % 4 == 0) {
        output.innerText = "This is a Leap Year";
    }
    else {
        output.innerText = "This is not a Leap Year"
    }
}
