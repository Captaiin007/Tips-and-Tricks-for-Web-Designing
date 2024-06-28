var a = 10;
var b = "10";
console.log(a + b); // concatenates number(a) and string(b) e.g.1010
console.log(a + +b); // adds number(a) and numeric equivalent of string(b) e.g.20

if (a == b) {
  console.log("Only values are same."); // '==' only compares values of both sides
}
if (a === b) {
  console.log("Values and types both are same."); // '===' compares values & types of both sides
}

// Logic to generate a random number from the given range
var random = Math.random() * 10; // here random() method gives result between 0-9
var completeRandom = Math.floor(random);
console.log(completeRandom);

//Javascript Project: A mini digital clock
let temp;
let time;
let date;
const options = { weekday:'long', year:'numeric', month:'long', day:'numeric' };
setInterval(() => {
    temp = new Date();
    time = addLeadingZero(temp.getHours()) + ":" + addLeadingZero(temp.getMinutes()) + ":" + addLeadingZero(temp.getSeconds());
    date = temp.toLocaleDateString(undefined, options);
    document.getElementById('c29-time').innerHTML = time + "<br>" + date;
  }, 1000);
  function addLeadingZero(number){
    return number < 10 ? `0${number}` : number;
  }