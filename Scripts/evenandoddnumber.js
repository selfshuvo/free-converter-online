const input = document.getElementById("input");
const output = document.getElementById("output");


function eventChecker() {
  const number = input.value;
  if(number % 2 == 0) {
   return output.innerText = 'Even Number'
  }
  return output.innerText = 'Odd Number';

}