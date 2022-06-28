var a = NaN;

console.log("Hello");
console.clear();
console.log("Utkarsh Gupta");

console.log(0 / 5);
console.log(3 * "a");
console.log("a" * 3);

console.log("b" + 4);
console.log(5 - "c");

var decimalNumber = 10;

console.log(decimalNumber);
console.log(decimalNumber.toString());

var stringNumber = "100";

console.log(stringNumber);

var changedNumber = parseInt(stringNumber); //converts strings to number

console.log(typeof changedNumber);

var number = "10.1";

console.log(parseFloat(number));
console.log(parseInt(number));

var floatnumber = 10.499;

console.log(floatnumber.toFixed(1));

var symbols = "@#$";
console.log(symbols);

var myUniversity = "Lovely Professional University";

var upperCaseName = myUniversity.toUpperCase();

var lowerCaseName = myUniversity.toLowerCase();

var concatString = upperCaseName.concat(" ", " -- ", lowerCaseName);

var name = "   utkarsh gupta   23   ";

console.log(name.trim());

var fullName = "utkarsh gupta 23";

console.log(fullName.split("-"));



var firstName = "Utkarsh";
var lastName = "Gupta";

console.log(firstName+" "+lastName)




var firstName = "Utkarsh";
var lastName = "Gupta";


var lengthOfFirstName = firstName.length;

//function  name() prantheses
//property .name


console.log(lengthOfFirstName)


var fullName = 'Mohammad Shadab Raza';

var length = fullName.length;
// console.log(length)
// console.log(fullName.indexOf('h'))
// console.log(fullName.lastIndexOf('a'))

console.log(fullName.slice(5,10))
console.log(fullName.slice(0,20))
console.log(fullName.slice(9,15))



var university = 'Lovely Professional University';
var sliced = university.slice(-8,-1);
var substr = university.substr(-8,12);
console.log(sliced,substr )



var mStr = "This is my test string to practice the JavaScript string function concepts. This is gonna be fun."
// 1. Find the length of the first sentence in the string.


var allSentences = mStr.split('.')

var firstSentence  = allSentences[0]
console.log(firstSentence.length)



var variable;
Browser:
{
    xsjij->variable = undefined;
}
variable = 10;


var nullish = null;





window.alert("Accept cookies") ---> ok
//undefined
window.confirm("Are you sure?") ----> ok or Cancel
//false
window.prompt("Please type your number") ---> Input 
// 989898989