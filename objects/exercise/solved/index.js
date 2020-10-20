/*
  Looping through the animals array below

  1. log all to the console
  2. log only the fish
  3. log all of the animals names to lowercase
  4. create arrays for each of the different classes of animals, and push the appropriate animals to that array
  5. log only the animals that end in "e"
  6. log only the animals that contain an "o"
*/

var animals = [
  {
    name: "Whale",
    class: "mammal"
  },
  {
    name: "Bear",
    class: "mammal"
  },
  {
    name: "Shark",
    class: "fish"
  },
  {
    name: "Goldfish",
    class: "fish"
  },
  {
    name: "Eagle",
    class: "bird"
  },
  {
    name: "Robin",
    class: "bird"
  }
];

//4
var mammals = [];
var birds = [];
var fish = [];

for(var i = 0; i < animals.length; i++){
  //1
  console.log(animals[i]);
  //2
  if(animals[i].class == "fish"){
    console.log(animals[i]);
  }
  //3
  console.log(animals[i].name.toLowerCase());
  //4
  if(animals[i].class == "fish"){
    fish.push(animals[i])
  } else if(animals[i].class == "bird"){
    birds.push(animals[i])
  } else {
    mammals.push(animals[i])
  }
  //5
  if(animals[i].name.slice(animals[i].name.length-1) == "e"){
    console.log(animals[i])
  }
  //6
  if(animals[i].name.indexOf("o") > -1){
    console.log(animals[i])
  }
}
