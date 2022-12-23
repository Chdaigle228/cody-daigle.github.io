// const dogs = require('./dogData');
let dogs = [
    {
        "name": "Doggo-co-WOOF",
        "age": 3,
        "species": "dog",
        "weight": 45,
        "votes": 22
    }, {
        "name": "Space CATdet",
        "age": 4,
        "species": "cat",
        "weight": 20,
        "votes": 5
    }, {
        "name": "Solar Squirrel",
        "age": 1,
        "species": "squirrel",
        "weight": 0.5,
        "votes": 13
    }, {
        "name": "Bark Hole",
        "age": 20,
        "species": "dog",
        "weight": 19,
        "votes": 20
    }, {
        "name": "Howlling Winds",
        "age": 55,
        "species": "dog",
        "weight": 90,
        "votes": 200
    }, {
        "name": "Electron Nutria",
        "age": 7,
        "species": "nutria",
        "weight": 3,
        "votes": 0
    }, {
        "name": "Howlling Winds Sr.",
        "age": 59,
        "species": "dog",
        "weight": 101,
        "votes": 201
    }, {
        "name": "Tycho Brahe",
        "age": 35,
        "species": "moose",
        "weight": 500,
        "votes": 123
    }, {
        "name": "Johannes Kepler",
        "age": 9,
        "species": "dog",
        "weight": 5,
        "votes": 55
    }, {
        "name": "Pluto",
        "age": 89,
        "species": "dog",
        "weight": 10,
        "votes": 190
    }, {
        "name": "Quark",
        "age": 20,
        "species": "dog",
        "weight": 1,
        "votes": 45
    }, {
        "name": "Higgs",
        "age": 26,
        "species": "dog",
        "weight": 0.00001,
        "votes": 200
    }, {
        "name": "Lepton",
        "age": 12,
        "species": "dog",
        "weight": 15,
        "votes": 175
    }, {
        "name": "Boson",
        "age": 9,
        "species": "dog",
        "weight": 8,
        "votes": 141
    }
]

// Since this is an intergalatic event, many of our patrons speak different languages!
// Assign a function to our our `greeting` variable that takes 3 inputs: `greeting`, `location` and `time`. Concatanate these values together to form a viable sentence 
//and log it to the console. Don't forget the spaces!

// 1.
var greeting = function(greeting, location, time){
    let greet =  greeting + ' ' + location + ' ' + time;
    console.log(greet)
};


// 2. We have more contestants than anticipated. (We actually don't have a count!)
// Assign a function to our `contestants` variable that will return the number of entries in our dogs array. 

// 2.
var contestants = function(array){
    return array.length;
};
//console.log(array);

// 3. Oh no! Some of our contestants aren't even dogs!
// Using the native filter method with our `dogs` array, create an array called `filterSpecies` that 
// will filter out all of the species that are not dogs! 

// 3.
var filterSpecies = dogs.filter((item) =>{
    if(item.species === 'dog')
    return item;
});


// 4. 
var dogContestants = [...filterSpecies];



// 5. 
var dogsWithClasses = dogContestants.map((contestant) => {
    if(contestant.weight <= 10){
        contestant.class = 'red';
    }else if (contestant.weight <= 20){
        contestant.class = 'yellow';
    } else {
        contestant.class = 'green';
    }
    return contestant;
 });

    


// 6.
var firstInClass = function(array, output={}){
    //base
    if(array.length === 0){
        return output;
    }
    //recursion
    for(let key in array[0]){
        //    OR
   // output = {...output, ...array[0]};
        output[key] = array[0][key]
    }
    return firstInClass(array.slice(1), output);
};



// 7.
var votes = dogs.reduce((acc, curr) => {
    return acc + curr.votes;
}, 0);