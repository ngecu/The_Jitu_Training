// Write a javascript program that check whether the array elements  is a string or number. if it is a number it should be converted into a string and vice versa

function convertArrayElements(arr) {
  
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === 'string') {
          arr[i] = parseFloat(arr[i]);
          if (!isNaN(arr[i])) {
              
              arr[i] = arr[i].toString();
          }
      } else if (typeof arr[i] === 'number') {
          
          arr[i] = arr[i].toString();
      }
     
  }
  return arr;
}

const mixedArray = [1, '2', '3.14', '4.5', true, 'hello'];
const convertedArray = convertArrayElements(mixedArray);
console.log(convertedArray);


// Given  array of five positive integers, find the minimum and maximum values that can be calculated

//  * by summing exactly four of the five integers.

//  * Then print the respective minimum and maximum values as a single line of two space-separated long integers.

 
