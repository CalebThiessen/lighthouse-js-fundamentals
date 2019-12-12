const ingredients = ["eggs", "milk", "flour", "sugar", 
"baking soda", "baking powder", "chocolate chips", "bananas"];

// while loop printing each item
var i = 0;
while (i < ingredients.length) {
    console.log(ingredients[i]);
    ++i;
}

// for loop printing each item
for (var i = 0; i < ingredients.length; ++i) {
    console.log(ingredients[i]);
}

// loop printing each item in reversed order
for (var i = (ingredients.length - 1); i >= 0; --i) {
    console.log(ingredients[i]);
}