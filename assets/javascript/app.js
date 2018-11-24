var DigitalPet = function() {
    this.hunger = 100;
    this.energy = 100;
    this.mood = 100;
}

// Create a new animals object to contain our new Digital Pals
var animals = {};

// creates a new DigitalPal object with the name "dog"
animals.pet = new DigitalPet();

$("#hunger").html("Hunger:  " + animals.pet.hunger + "</p>");
$("#energy").html("Energy: " + animals.pet.energy + "</p>");
$("#mood").html("Mood: " + animals.pet.mood +"</p>");

// FEED FUNCTION
$("#feed").on("click", function() {
    // If hunger is below 95%...
    if (animals.pet.hunger <= 95) {
    // console.log("fed");
    // INCREASE HUNGER
    animals.pet.hunger = animals.pet.hunger +5;
    // INCREASE ENERGY BY ONE
    animals.pet.energy = animals.pet.energy +1;

    // console.log(animals.pet.hunger);
    $("#hunger").html("Hunger:  " + animals.pet.hunger + "</p>");
    $("#energy").html("Energy:  " + animals.pet.energy + "</p>");
    } else {
        console.log("too full!");
    }
});

// SLEEP FUNCTION
$("#sleep").on("click", function() {
    // console.log("zzzz");
    animals.pet.energy = animals.pet.energy +5;

        // DECREASE HUNGER & MOODd
        animals.pet.hunger = animals.pet.hunger -5;
        animals.pet.mood = animals.pet.mood -2;

    // console.log(animals.pet.energy);
    $("#hunger").html("Hunger:  " + animals.pet.hunger + "</p>");
    $("#energy").html("Energy:  " + animals.pet.energy + "</p>");
    $("#mood").html("Mood:  " + animals.pet.mood + "</p>");


    });

// MOOD FUNCTION
$("#play").on("click", function() {
if (animals.pet.mood <= 95) {
    // console.log("fun!");
    animals.pet.mood = animals.pet.mood +5;

    // DECREASE ENERGY
    animals.pet.energy = animals.pet.energy -7;
    // console.log(animals.pet.mood);
    $("#hunger").html("Hunger:  " + animals.pet.hunger + "</p>");
    $("#energy").html("Energy:  " + animals.pet.energy + "</p>");
    $("#mood").html("Mood:  " + animals.pet.mood + "</p>");
} else {
    console.log("too much fun!");
}
    });