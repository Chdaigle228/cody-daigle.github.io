//////////////////////////////////////////////////////////////////////
// Function 1 - Object Values ////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

//const { noises } = require("../matchy/data");

function objectValues(object) {
var obj = Object.values(object);
return obj;
}

//////////////////////////////////////////////////////////////////////
// Function 2 - Keys to String ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function keysToString(object) {
    var str = Object.keys(object);
    return str.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 3 - Values to String /////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function valuesToString(object) {
    //loop over the object array
    var newArr = [];
    for(var key in object){
        if(typeof object[key] === "string"){
            newArr.push(object[key]);
        }
    } return newArr.join(" ");
}

//////////////////////////////////////////////////////////////////////
// Function 4 - Array or Object //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function arrayOrObject(collection) {
    if(Array.isArray(collection)){
        return 'array';
    } else{
        return 'object';
    }
}

//////////////////////////////////////////////////////////////////////
// Function 5 - Capitalize Word //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeWord(string) {
 return string.charAt(0).toUpperCase() + string.slice(1);
}

//////////////////////////////////////////////////////////////////////
// Function 6 - Capitalize All Words /////////////////////////////////
//////////////////////////////////////////////////////////////////////

function capitalizeAllWords(string) {
    //split words from array 
    var spl = string.split(" "); //string becomes an array= spl
    //iterate through array
    for(var i = 0; i < spl.length; i++){
     //capitalize letters and then add back together
       spl[i] = spl[i][0].toUpperCase() + spl[i].substring(1); // = reassigning spl to uppercase string
    } return spl.join(" ");
   

}

//////////////////////////////////////////////////////////////////////
// Function 7 - Welcome Message //////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function welcomeMessage(object) {
    let objName = object.name;
    let objUp = objName[0].toUpperCase()
return "Welcome " + objUp + objName.slice(1) + "!";
}

//////////////////////////////////////////////////////////////////////
// Function 8 - Profile Info /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function profileInfo(object) {
var spec = object.species[0].toUpperCase() + object.species.slice(1);
var sName = object.name[0].toUpperCase() + object.name.slice(1)
return sName + " is a " + spec;
}

//////////////////////////////////////////////////////////////////////
// Function 9 - Maybe Noises /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

function maybeNoises(object) {

if ("noises" in object && object.noises.length > 0){
    return object.noises.join(" ");
} else {
    return 'there are no noises'
}

}


//////////////////////////////////////////////////////////////////////
// Function 10 - Has Words ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a string of words and a word and return true if <word> is in <string of words>, otherwise return false."
function hasWord(string, word) {
    if (string.includes(word)){
        return true;
    } else{
        return false;
    }
}

//////////////////////////////////////////////////////////////////////
// Function 11 - Add Friend //////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and add the name to the object's friends array then return the object"
/* object = {
    friends: ['name', 'name', 'name']
}
*/
function addFriend (name, object) {
    object["friends"].push(name);
    return object;
} 

//////////////////////////////////////////////////////////////////////
// Function 12 - Is Friend ///////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take a name and an object and return true if <name> is a friend of <object> and false otherwise"
function isFriend(name, object) {

        if (object.friends && object["friends"].includes(name)){
        return true;
        
    } return false;
}
// if (object && object.friends && object.friends.include(name)) {
//     return true;
// }
// return false;

//////////////////////////////////////////////////////////////////////
// Function 13 - Non-Friends /////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//"nonFriends() : Should take a name and a list of people, and return a list of all the names that <name> is not friends with"
// var data = [
//     {name: "Jimmy", friends:["Sara", "Liza"]},
//     {name: "Bob", friends:[]},
//     {name: "Liza", friends: ["Jimmy"]},
//     {name: "Sara", friends: ["Jimmy"]}

function nonFriends(name, array) {
    //open array to add all names
    var list = [];
    //open array to add frenemies
    var notFriends = [];
    //when iterating if name matches then move on
    var stillFriends = null;
    for (var i = 0; i < array.length; i++){
        if(name === array[i].name){
            stillFriends = array[i];
        }else {
            list.push(array[i].name);
        }
    }
        for (var n = 0; n < list.length; n++){
            if(stillFriends["friends"].indexOf(list[n]) === -1){
                 notFriends.push(list[n]);
        }
    } return notFriends;

   

}

//////////////////////////////////////////////////////////////////////
// Function 14 - Update Object ///////////////////////////////////////
//////////////////////////////////////////////////////////////////////
// /* global updateObject */
// QUnit.test("updateObject() : Should take an object, a key and a value. Should update the property <key> on <object> with new <value>. If <key> does not exist on <object> create it.", function(assert){
//     var data = {a: "one", b: "two", "hokey": false};
//     assert.deepEqual(updateObject(data, "b", "three"), {a:"one", b:"three", hokey: false});
//     var data = {a: "one", b: "two", "hokey": false};
//     assert.deepEqual(updateObject(data, "ponies", "yes"), {a:"one", b:"two", hokey: false, ponies: "yes"});
//     var data = {a: "one", b: "two", "hokey": false};
//     assert.deepEqual(updateObject(data, "a", Infinity), {a:Infinity, b:"two", hokey: false});
//   });


function updateObject(object, key, value) {
    if(object[key] = value){
    return object;
    }
  }

//////////////////////////////////////////////////////////////////////
// Function 15 - Remove Properties ///////////////////////////////////
//////////////////////////////////////////////////////////////////////
  //Should take an object and an array of strings. Should remove any properties on <object> that are listed in <array>", function(assert){
    // var data = {a: "one", b: "two", "hokey": false};
    // removeProperties(data, ["a","hokey"]);
    // assert.deepEqual(data, {b: "two"});
/*var object = {}
array: ['str1', 'str2', 'str3'];

*/
function removeProperties(object, array) {
      //get properties that are in the object (index only in for loop?)
    for(var i = 0; i < object.length; i++){
        //[i] should be the indexes that are within object
        var obj = object[i];
        //get items within the array
        for(var a = 0; a < array.length; a++){
            //[a] should be the indexes that are in the array
            var arr = array[a];
         //check if arr[a] is the same as obj[i]
         if (array.forEach(item)){
            delete obj;
            } 
        }
    } return;

}
//tried object.some() (.some() stops on the first true, but can I make it continue to iterate with the for loop?)
//tried object.indexOf(i) === aray.indexOf(a)

//////////////////////////////////////////////////////////////////////
// Function 16 - Dedup ///////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////
//Should take an array and return an array with all the duplicates removed"
function dedup(array) {

}

//////////////////////////////////////////////////////////////////////
// DON'T REMOVE THIS CODE ////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////

if((typeof process !== 'undefined') &&
   (typeof process.versions.node !== 'undefined')) {
    // here, export any references you need for tests //
    module.exports.objectValues = objectValues;
    module.exports.keysToString = keysToString;
    module.exports.valuesToString = valuesToString;
    module.exports.arrayOrObject = arrayOrObject;
    module.exports.capitalizeWord = capitalizeWord;
    module.exports.capitalizeAllWords = capitalizeAllWords;
    module.exports.welcomeMessage = welcomeMessage;
    module.exports.profileInfo = profileInfo;
    module.exports.maybeNoises = maybeNoises;
    module.exports.hasWord = hasWord;
    module.exports.addFriend = addFriend;
    module.exports.isFriend = isFriend;
    module.exports.nonFriends = nonFriends;
    module.exports.updateObject = updateObject;
    module.exports.removeProperties = removeProperties;
    module.exports.dedup = dedup;
}