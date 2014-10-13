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

// Nested Data exercise

// Create a friendslist and use animals array to add two usernames
var friends = [];
friends.push(animals[0].username);
friends.push(animals[1].username);
console.log(friends);

// Create relationships object
var relationships = {};

// Add your friends data structure to relationships array
relationships["friends"] = friends;

// Find the "length" (number of properties) in the object
var count = 0;
for (var key in relationships) {
  count++;
}
console.log(count);

// Create matches array and add to relationships object
var matches = [];
relationships.matches = matches;

// Add one username to matches, using the relationships object
relationships.matches.push(animals[2].username); // returns "Daisy"

// Loop through your animals collection, adding relationships object to each animal object
for(var i = 0; i < animals.length; i++) {
  animals[i].relationships = relationships;
}

function AnimalTestUser(username){
  var args = arguments.length;
  if(args > 1)
  {
    var otherArgs = [];
    for(var i = 1; i < arguments.length; i++)
    {
        otherArgs[i-1] = arguments[i];
    }
  return {
    "otherArgs" : otherArgs,
    "username" : username
    };
  }
  else
  {
  return {
    "username" : username };
  }
}

function AnimalCreator (username, species, tagline, noises) {
  return {
    "username" : username,
    "species" : species,
    "tagline" : tagline,
    "noises" : noises,
    "friends" : []
  };
}

var man = AnimalCreator ("bob", "man", "I am Bob", ["zzz", "boo", "man noise"]);
var woman = AnimalCreator ("doreen", "woman", "I am Doreen", ["hi", "cool", "woman noise"]);

function addFriend (animal1, animal2) {
    return (animal1.friends.push(animal2),
      animal2.friends.push(animal1));
}
