// Question 1:
// Write a program to search if a number exists in an array. If the number exists then return the position. If it exists multiple time then return an array with all the positions. If the number doesn't exist then return -1;
// For example,
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 4
// Output: 3
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 1
// Output: [0, 5]
// Input: [1, 2, 3, 4, 5, 1, 3] and Search Elem: 7
// Output: -1

/* Pseudo code

input_array =  [1, 2, 3, 4, 5, 1, 3] 
num =4


result_array = []

for loop to iterate each_item:
    check if current_item is target_number
        push current_item's index in result_array

if result_array is empty
    return -1

else if size of result_array is more than 1
    return result_array

else
    return first value of result_array;

*/

function find_number_positions(num, input_array) {
  let result_array = [];

  for (let i = 0; i < input_array.length; i++) {
    if (input_array[i] === num) {
      result_array.push(i);
    }
  }

  if (result_array.length === 0) {
    return -1;
  } else if (result_array.length > 1) {
    return result_array;
  } else {
    return result_array[0];
  }
}

let array = [];
let input = 1;

let positions = find_number_positions(input, array);

console.log(positions);

// Question 2:
// Write a program to print following pattern in the console.
// 54321
// 5432
// 543
// 54
// 5

function printPattern() {
  for (let i = 1; i <= 5; i++) {
    let str = "";
    for (let j = 5; j >= i; j--) {
      str += j;
    }
    console.log(str);
  }
}

printPattern();

// Question 4:
// Write a JavaScript program to check if two strings are anagrams. Anagram string are such two strings which can be rearranged to create one another.
// For example,
// Input: LISTEN and SILENT
// Output: True
// Input: HELLO and JELLO
// Output: False

const check_is_anagram = (wordA, wordB) => {
  /*
Pseudo code 

convert both strings in lowercase or uppercase;

split string each string 
sort both splited string arrays in any order


join both sorted arrays to get sorted strings.

check if both string are equal
    return true
else
    return false    
*/
};

const isAnagram = check_is_anagram("LISTEN", "SILENT");
console.log(isAnagram);
