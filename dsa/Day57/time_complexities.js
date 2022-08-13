// sum of array elements

let array = [-1, 2, 4, 6, 8, 10];
let n = array.length;

const total = sum(array, n);
console.log(total);

function sum(array, n) {
  let total = 0; // O(1)

  for (let i = 0; i < n; i++) {
    //O(n)

    total = total + array[i]; // O(1)
  }

  return total; // O(1)
}
/*

    O(1+n*(1)+1)
    O(1+n+1)
    O(2+n)
    O(n)
*/

// sum of 2d array elements

let twoDarray = [
  [-1, 2, 3, 4],
  [1, 2, 3, 4],
];
let rows = twoDarray.length;

const gTotal = sum2DArray(twoDarray, rows);
console.log(gTotal);

function sum2DArray(matrix, rows) {
  let sum = 0;
  for (let i = 0; i < rows; i++) {
    // n
    for (let j = 0; j < matrix[i].length; j++) {
      //n

      sum = sum + matrix[i][j];
    }
  }

  return sum;
}

//O(n^2)
