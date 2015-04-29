//EXERCISE 1
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Complete the following function to get the letter linked to a spanish DNI
// The functions receives an eight-digit number and returns a single letter.
// The algorithm to calculate the letter is as follows:
// The number is divided by 23 and the remainder is replaced by a letter determined by the following table: 
//	 _____________________________________________________________
//  | 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 |
//	| T R W A G M Y F P D X  B  N  J  Z  S  Q  V  H  L  C  K  E  |
//	|____________________________________________________________|
// 
// You can use 'result' variable to store the resulting letter.
// If your code works, the last three equalities will be "true"

/*  isNaN(dni)

function dniLetter( dni ) { 
	if (dni < 0) {
	return 'Invalid parameter'
	}

	if (isNaN(dni)) {
	return 'Invalid parameter'
	}

	if (dni > 100000000) {
	return 'Invalid parameter'
	}

	var lockup = 'TRWAGMYFPDXBNJZSQVHLCKE';
	var array = lockup.split('');
	var result = '';

	number_letter = dni % 23; 
	result = array[number_letter];

    return result;
}



console.log( dniLetter( 12345678 ) === 'Z');
console.log( dniLetter( 34667892 ) === 'S');
console.log( dniLetter( 92234488 ) === 'A');
console.log( dniLetter( 15513426 ) === 'H');

*/


//EXERCISE 2
//
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Improve the exercise above to be able to perform this new functionality
// Of course it has to keep working as usual with right inputs.

/*

console.log( dniLetter( -1 ) === 'Invalid parameter');
console.log( dniLetter( "A1234567" ) === 'Invalid parameter');


*/

//EXERCISE 3
//
// Restore the comments marks (/* */) of the previous exercises. First two exercises have to be commented 
// Uncomment the exercise code deleting /* and */ chars
// Open the console and reload the index page to see the result of the code.
// Write a function that takes an array of words and returns the length of the longest one.


/*

function findLongestWord( array_words ){
	var arrayLength = array_words.length;
	var wordLength = 0;
	var i = 0;

	while ( i < arrayLength ){
		if (array_words[i].length > wordLength)
		wordLength = array_words[i].length;
		i++;
	}

	return wordLength;		
}




console.log( findLongestWord( ["Richie", "Joanie", "Greg", "Marcia", "Bobby"] ) ===6 );
console.log( findLongestWord( ["Blanka", "Zangief", "Chun Li", "Guile"] ) === 7 );
console.log( findLongestWord( ["Red", "Blue", "Green"] ) === 5 );


*/

//EXERCISE 4
//
// Uncomment the exercise code deleting /* and */ chars
// Now we are going to save the longest length of every array in a new array called array_lengths
// Open the console and reload the index page to see the result of the code.
// You have to complete the calculateAverage function (it is a few lines below), and it has
// to return the average of every number in a array instead of the "Not implemented yet" message.

/*
var array_lengths = [];
array_lengths.push( findLongestWord( ["Richie", "Joanie", "Greg", "Marcia", "Bobby"]) );
array_lengths.push( findLongestWord( ["Blanka", "Zangief", "Chun Li", "Guile"] ) );
array_lengths.push( findLongestWord( ["Red", "Blue", "Green"] ) );
//<place to add more lines>, read next commented text and you will understand
array_lengths.push( findLongestWord( ["Virginia", "Jessica", "Isabel Maria", "Enrique"] ) );


console.log( "These are the longest lengths of each group: " + array_lengths );
console.log( calculateAverage( array_lengths ) === 6 && "The average of longest lengths is: " + calculateAverage( array_lengths )); //funciona quitantdo el ultimo array
console.log( calculateAverage( array_lengths ) === 7.5 && "The average of longest lengths is: " + calculateAverage( array_lengths )); //funciona tras añadir el ultimo array

function calculateAverage( array ) {
	var sum = 0;
	var length = array.length;

	for (var i = 0; i < length; i++) {
		if (array === 0) { 
			return ( "Not implemented yet" ) 
		}

		sum += array[i];
	}

	return sum / length;
}



// Now add more lengths to the array_lengths. You have to do it where <place to add more lines> is written. 
// You can use this structure: array_lengths.push( findLongestWord( [<add some elements>] ) );
// Don't foget to add words to the array. The longer the better!
// Now reload the page and see how changed the average.


*/


//EXERCISE 5
//
// Restore the comments marks (/* */) of the previous exercises. Exercises 4 and 5 have to be commented
// Uncomment the exercise code deleting /* and */ chars
// Now we are going to save the longest length of every array in a new array called array_lengths
// Open the console and reload the index page to see the result of the code.
// Write a function charFreq() that takes a string and builds a frequency listing of the characters contained in it. 
// As a condition you must use the object freqCounter.
// Represent the frequency listing as a Javascript object. Try it with something like charFreq("abbabcbdbabdbdbabababcbcbab").


/*
function charFreq( string ) {
	var freqCounter = {};
	letters_array = string.split('').sort();
	
	for (var i = 0; i < string.length; ++i){
		if ( !freqCounter[letters_array[i]] ){
			freqCounter[letters_array[i]] = 0;
		}
		++freqCounter[letters_array[i]];
	}
	return freqCounter;
}

counter = charFreq("abbabcbdbabdbdbabababcbcbab");
console.log( counter['a'] === 7);
console.log( counter.b === 14);
console.log( counter['c'] === 3);

counter = charFreq("xyyyxyxyxzyxyzyxyxyasdfz");
console.log( counter.x === 7 );
console.log( counter['y'] === 10 );
console.log( counter.z === 3 );
console.log( counter['a'] === 1 );
console.log( counter['s'] === 1 );
console.log( counter.d === 1 );
console.log( counter['f'] === 1 );

*/


//BONUS EXERCISE
//
// Restore the comments marks (/* */) of the previous exercise
// Uncomment the exercise code deleting /* and */ chars
// Build a program that transform a boring array into an awesome array.
// The original array has to go through many processes, we divided every process
// in functions. You have to code these functions.
// Here you have some useful functions you can use wherever you need along the program.
// isFinite(), splice(), unshift(), push(), join(), sort(), Math.floor().
// These aren't all the needed functions, and also you can use different ones. They are only suggested functions.
// If you want to know what do they do or learn more functions, you can go to
// https://developer.mozilla.org/en-US/docs/Web/JavaScript
// http://www.w3schools.com/js/default.asp
// Use the search option in both of them to find a function.



function arrayAwesomenator( array ) 
{
	array = deleteRubbish( array );
	array = arrangeElements( array );
	array = beautifyLetters( array );
	array = beautifyNumbers( array );
	array = sortArray( array );
	array = arrayToString( array );

	return array;
}


function deleteRubbish( array ) {

	for (var i = 0; i < array.length; i++ ){
		if (array[i] === '*'){
			array.splice(i, 1);
		}
	}
	return array
}
	//It receives an array and returns it without '*' chars
	//Example:  deleteRubbish(['a',1,'*',5]) returns ['a',1,5]

	
function arrangeElements( array ) {
	for (var i = 0; i < array.length; i++ ){
		if ( isNaN(array[i]) === false ) {
		 	array.unshift(array[i]);
			array.splice((i+1), 1);
		}
	}
	
	return array
}


	//It receives an array with numbers and letters mixed and returns it with its items arrange:
	//First goes the numbers and then the letters. The order of the elements together does not matter.
	//Example:  returns [23, 4, 'B', 'a', 'J']


function beautifyLetters( array ) {

	for (var j = 0; j < array.length; j++ ){
		if ( isNaN(array[j]) === true ) {
			switch (array[j].toLowerCase()) {
				case 'a':
				case 'e':
				case 'i':
				case 'o':
				case 'u':
					array[j] = array[j].toUpperCase();
				break; 

				default:
					array[j] = array[j].toLowerCase();
				break; 
			}
		}
	}

	return array
}

	//It receives an array with numbers and letters and returns it with uppercase vowels and lowercase consonants. Numbers remain unchanged
	//Example: beautifyLetters([1,5,7,'a','J',p,'E']) returns [1,5,7,'A','j',p,'E']


function beautifyNumbers( array ) {
	
	for (var i = 0; i < array.length; i++ ) {
		if ( isNaN(array[i]) === false ) {
			while( array[i].toString().length != 1 ) {
				array[i] = reducirNumber(array[i]);
			}
		}
	}

	return array
}	

function reducirNumber(number) {


	if ( isNaN(number) === false ) {
		var stringNumber = number.toString()
		var j = 0
		var sum = 0
		while (j < stringNumber.length ) {
			sum += parseInt(stringNumber.charAt(j));
			number = sum;
			j++;
		}
	}

	return number
}



	//It receives an array with numbers and letters and returns it with its numbers beautified. Letters remain unchanged
	//Beautify process is to reduce a number into a single digit number by adding all its digits together: 
	// 123 = 6 because 1+2+3 = 6
	// 9 = 9
	// 9956 = 2 because 9+9+5+6 = 29 -> 2+9 = 11 -> 1+1 = 2
	// 793 = 1 because 7+9+3 = 19 -> 1+9 = 10 -> 1+0 = 1
	//Example: beautifyNumbers([23,59, 4,'A','b']) returns [5, 5, 4, 'A', 'b']

//console.log(beautifyNumbers([23,59, 4,'A','b']))



function sortArray( array ) {

	for (var j = 0; j < array.length; j++ ){
		if ( isNaN(array[j]) === true ) {
			array[j] = array[j].toUpperCase()
			
		}
	}

	array = array.sort();
	array = beautifyLetters(array);
	return array

	//It receives an array with numbers and letters and returns it with its items sorted. Numbers on one side and letters on the other.
	//Example: sortArray([5,5, 4, 1, 'j', A','b', 'E']) returns [1, 4, 5, 5, 'A', 'b', 'E', 'j']
}

//console.log(sortArray([5,5, 4, 1, 'j', 'A','b', 'E']))



function arrayToString( array ) {
	return array.join('')
}
	//It receives an array and returns a string with all its elements.
	//Example: arrayToString([1, 4, 5, 5, 'A', 'b', 'E', 'j']) returns "1455AbEj"




console.log(arrayAwesomenator(["a", 6, "B", "F", "*", 8, 78, "J" ]) === "668Abfj");
console.log(arrayAwesomenator(["*", "j", 6, "A", "F", "*", 8, "C", "b", "a", 78, "J", 43523, 1111, "r", "q", "y" ]) === "46688AAbcfjjqry");




