var count = 0;
while (count < 5) {
  console.log(count);
  count++;
}

// running phase

/*

First iteration 

count =0
0
count+1

Second iteration 

count =1

1
count+1

Third iteration 

count =2

2

count+1


Fourth iteration 

count =3

3

count+1

Fifth iteration 

count =4

4

count+1

*/

let i = 0;
while (i < 5) {
  i++;
  if (i === 3) continue;
  console.log(i);
}

console.log("i: " + i);

/*
  Running Phase
    
   i=0
  0<5: First iteration
   i+=1
   1
  1<5: Second iteration
   i+=1
   2
 2<5: Third iteration
   i+=1
 3<5: Fouth iteration
   i+=1 
   4
 4<5: Fifth iteration
   i+=1 //5 
   5
 5<5:break
    
 "i:5"
  


*/

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.log(i);

/* Running Phase
    i=0
   0<5:First Iteration 
    0
    i+=1
    
    1<5:Second Iteration 
  
    1
    i+=1
    
    2<5:Third Iteration
    2
    i+=1
    
    3<5:Fourth Iteration
    3
    i+=1
    
     4<5:Fifth Iteration
    4
    i+=1
    5<5 break
    
    
  */

let j = 0;
do {
  console.log(j);
  j++;
} while (j < 5);

console.log(j);

/* Running Phase
    
       
    i=0 First Iteration
    0
    i+1
    1<5:Second Iteration
    1
    i+=1
    2<5:Third Iteration
    2
    i+=1
    3<5:Fourth Iteration
    3
    i+=1
    4<5:Fifth Iteration
    4
    i+=1
    5<5

*/

let array = [
  [0, 1, 2],
  [3, 4, 5],
  [5, 6, 7],
];

for (let i = 0; i < array.length; i++) {
  for (let j = 0; j < array[i].length; j++) {
    console.log(array[i][j]);
  }
}

let twoDarray = [
  [0, 1, 2],
  [3, 4, 5],
  [5, 6, 7],
];

for (let i = 0; i < twoDarray.length; i++) {
  console.log(twoDarray[i]);
  for (let j = 0; j < twoDarray[i].length; j++) {
    console.log(twoDarray[i][j]);
  }
}

/*

Running Phase

i=0, array.length // 3 First Iteration of i

array[0]// [0,1,2]

j=0, array[0].length //3 First Iteration of j

array[0][0] // 0

j=1 1<3 Second Iteration of j

array[0][1] // 1

j=2 2<3  Third Iteration of j

array[0][2] // 2


i=1, array.length // 3 Second Iteration of i

array[1]// [3,4,5]

j=0, array[1].length //3 First Iteration of j

array[1][0] // 0

j=1 1<3 Second Iteration of j

array[1][1] // 1

j=2 2<3  Third Iteration of j

array[1][2] // 2


*/

// Find the smallest number from the following array: [13, 40, 10, 5, 1, 12, 24];

let array1 = [13, 40, 10, 5, 2, 1, 12, 24];

var smallest = 99999;

for (let i = 0; i < array1.length; i++) {
  if (array1[i] <= smallest) {
    smallest = array1[i];
  }
}
console.log(smallest);

/*  Running Phase


i=0,smallest=9999
0<8 array1.length //8

First Iteration

array1[0]<= 99999

smallest = 13

i=1, Second Iteration

array1[1]<= 13


i=2, Third Iteration

array1[2]<= 13

smallest =10

i=3, Forth Iteration

array1[3]<= 10

smallest =5


i=4, Fifth Iteration

array1[4]<= 2

smallest =2



i=5, Sixth Iteration

array1[5]<= 2

smallest =1




i=6, Seventh Iteration

array1[6]<= 1


*/

let heightofPersons = [
  {
    name: "Utkarsh",
    height: 20,
  },
  {
    name: "Aman",
    height: 6,
  },
  {
    name: "Sachin",
    height: 30,
  },
  {
    name: "Arjun",
    height: 15,
  },
];

// Find the name of smalllest person

function generatePyramid(row) {
  var totalNumberofRows = row;
  var output = "";
  for (var i = 1; i <= totalNumberofRows; i++) {
    for (var j = 1; j <= i; j++) {
      output += j + "  ";
    }
    console.log(output);
    output = "";
  }
}

generatePyramid(5);

// "1  "
// "1  2  "
// "1  2  3  "
// "1  2  3  4  "
// "1  2  3  4  5  "

let pyramidLeft = (rows) => {
  for (let i = 1; i <= rows; i++) {
    let str = "";

    for (let j = 1; j <= i; j++) {
      //Count the '*' for each row
      str += "*";
    }

    //Print the pyramid pattern for each row
    console.log(str);
  }
};

pyramidLeft(5);

//  "*"
// "**"
// "***"
// "****"
// "*****"
