'use strict';

function Dog(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
}

var Cat = function cat(name, breed, age) {
    this.name = name;
    this.breed = breed;
    this.age = age;
}

var Ferret = function ferret(name, age, foodRequirements) {
    this.name = name;
    this.age = age;
    this.foodRequirements = foodRequirements;
}

var Bird = function bird(name, breed) {
    this.name = name;
    this.breed = breed;
}

var Fish = function fish(name, species, waterConditions) {
    this.name = name;
    this.species = species;
    this.waterConditions = waterConditions;
}
