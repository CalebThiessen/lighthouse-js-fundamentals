/*const temperature = -3;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else {
  console.log("Short sleeves are fine.");
}

console.log("Now you're ready to go outside!");

if (temperature < -40 || temperature > 40) {
  console.log("Maybe going outside isn't such a great idea…");
}
const raining = true;
const cold = false;

if (raining) {
  console.log("Don't forget your umbrella!");
}

if (cold) {
  console.log("Make sure you pick out a scarf!");
}

console.log("Now you're ready to go outside!");*/

// whichSchool



const whichSchool  = function (age) {
if (age < 13) {
  console.log("I am " + age + " Which school should I go to?")
  console.log("You should attend Elementary School.")
} else if (age >= 13 && age <= 18) {
  console.log("I am " + age + " Which school should I go to?")
  console.log("You should attend Secondary School.")
} else {
  console.log("I am " + age + " Which school should I go to?")
  console.log("You should attend Lighthouse Labs.")
}
}
whichSchool(50);
