/*

  Guess random numbers
  1. Using the JS Math Object, Create 4 variables that generate a random number out of 100
  2. Create a prompt to guess one of those four numbers
  3. If you guess one of the numbers correctly, alert that you won.
  4. If you dont guess any of the numbers correctly, do nothing.

  Guess random animal
  1. create an array with at least 5 animals
  2. Using the JS Math Object, generate a random index out of that array
  3. create a prompt to guess which animal gets selected randomly
  4. If you guess the random animal correctly, alert that you won.
  5. If you dont guess the random animal correctly, do nothing.


*/
var randumNumberOne = Math.floor(Math.random() * 101);
var randumNumberTwo = Math.floor(Math.random() * 101);
var randumNumberThree = Math.floor(Math.random() * 101);
var randumNumberFour = Math.floor(Math.random() * 101);

var numberGuess = prompt("Please guess a number out of 100");
var numberGuessToInteger = parseInt(numberGuess);

console.log(randumNumberOne + ", " + randumNumberTwo + ", " + randumNumberThree + ", " + randumNumberFour);
if(numberGuess === randumNumberOne || numberGuess === randumNumberTwo || numberGuess === randumNumberThree || numberGuess === randumNumberFour){
  alert("You have guessed the number correctly")
}

var animalArray = ['manatee', 'camel', 'stegasaurus', 'inchworm', 'bear'];
var randomIndexInAnimalArray = Math.floor(Math.random() * animalArray.length);
var randomAnimalGuess = prompt("Guess the random animal");
var randomAnimal = animalArray[randomIndexInAnimalArray];

console.log(randomAnimal);
if(randomAnimalGuess == randomAnimal){
  alert("You guessed the animal correctly");
}
