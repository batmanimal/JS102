//Use this file to implement Part One of your project

// Objects exercises

var animal = {};
animal.username = "Mini";
animal["tagline"] = "Meow";
var noises = [];
animal["noises"] = noises;

var count = 0;
for(var key in animal) {
  count++;
  if (key == "username") {
     // return is illegal
     console.log("Hi my name is " + animal.username);
  }
  if(key == "tagline"){
    console.log("I like to say " + '"' + animal.tagline + '"');
  }
}

// Array exercises

var noiseArray = ["candy"];

// Add a noise to the beginning of the array
noiseArray.unshift("duh na na na");

// Add a noise to the end of the array
noiseArray.push("rawr");

// Add a noise to the end using []
noiseArray['push']("clap clap");

// Find the length of the array
console.log(noiseArray.length);

// Find the last item in the array (just for fun)
console.log(noiseArray[noiseArray.length - 1]);
console.log(noiseArray);

// Put noiseArray inside the animal object, on the noises property
animal.noises = noiseArray;
console.log(animal);

// Add a new noise to the end of noiseArray when you don't know the length (alternative to push)
noiseArray[noiseArray.length] = "hahahaha";
console.log(noiseArray);

// Create new var and set it = to empty array
var animals = [];

// Add your animal object to the new animals array
animals.push(animal);

// Create var called quackers and assign it some stuff
var quackers= {
  username: 'DaffyDuck',
  tagline: 'Yippeee!',
  noises: ['quack', 'honk', 'sneeze', 'growl']
};
// Add quackers to animals array
animals[animals.length]=quackers;

// Create 2 more animal objects with 3 properties each, and add to your animals array
var quackers2= {
  username: 'Daisy',
  tagline: 'Yayyyy!',
  noises: ['yayyy', 'ewwww', 'sighhhhh', 'sqeakkk']
};

var quackers3= {
  username: 'Mickey',
  tagline: 'I am Mickey!',
  noises: ['hello', 'world', 'yumyum', 'food']
};

animals.push(quackers2,quackers3);

// Check the length of the animals array; should be 4
console.log(animals.length);

