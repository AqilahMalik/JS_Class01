// ARRAYS IN_CLASS_EXERCISE///////////////////////////////////////////////////////////////////////////////////

// [1] Working with Arrays
// an empty array called rainbowColors
// Add "orange" to the end of the array
// Add "red" to the start of the array
// Add "yellow" to the end
// Add "green", "blue", "indigo", and "violet" to the end of the array
// Log out the length of the array
// Log out the second item 
// Log out the last item (make this flexible/dynamic!)
// Log out the index of the string "blue"



let rainbowColors = [];
rainbowColors.push("Orange");
rainbowColors.unshift("Red");
rainbowColors.push("Yellow");
rainbowColors.push('green', 'blue', 'indigo', 'violet' );
    // or combine using concat
    // Used concat = combine array in other array
    // let color = ["Green","Blue", "Indigo","Violet"];
    // rainbowColors = rainbowColors.concat(color); 
console.log(rainbowColors);
console.log(rainbowColors.length);
console.log(rainbowColors[1]);
rainbowColors.slice(rainbowColors.length-1);
console.log("Index of String 'blue' = " +rainbowColors.indexOf('blue'));




// Find out the difference between .slice and .splice
// Create an array called twoColors using one method - 
// don't change the rainbowColors array! Essentially pull two colors out of the array (say, between the index of 1 and 3)
// The splice() method can be used to add new items to an array
// The slice() method slices out a piece of an array into a new array

let twoColors = rainbowColors;
console.log(rainbowColors);
console.log("Slice: " + rainbowColors.slice(1,3));
console.log(rainbowColors); 
console.log("Splice: " + rainbowColors.splice(1,3));
console.log(rainbowColors);
// The slice() method returns the selected element(s) in an array, as a new array object.
// The splice() method returns the removed items in an array. 




const nums = [0,1,2,2,2,3,3,4,5]; 
// remove the duplicates destructively using slice or splice
let numsWithoutDup = nums.splice(3,3); //starting index 2 and get two element
console.log (nums); // remove 2,2,3


// 1) sort kan dulu array 
// 2) Run an reverse loop (to avoid problems with splicing).
const nums00 = [0,1,2,2,2,3,3,4,5]; 
let arrNums = nums00.sort();
let i = arrNums.length;
while (--i){                    
    if (arrNums[i] == arrNums[i-1]){
        arrNums.splice(i,1);  // at posution i = remove 1 item
        console.log (arrNums);

    }
}


// Work with arrays of arrays
const arrOfArrs = [["inner array first item","inner array second item"],["first","second","third"]];

// Access "inner array first item" and print it out
console.log (arrOfArrs[0]);
console.log (arrOfArrs[0][0]);

// Print "third" by using a dynamic index
console.log (arrOfArrs[1][arrOfArrs[arrOfArrs.length-1].length-1]);


