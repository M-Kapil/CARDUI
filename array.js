// map,filter,reduce examples

// const arr = [1, 2, 3, 4, 5];

// // const thirdEle  = arr[2];

// // console.log(thirdEle); // 3

// // for(let i = 0; i < arr.length; i++) {
// //     console.log(arr[i]);
// // }

// // Map method - creates a new array populated with the results of calling a provided function on every element in the calling array.

// const mapArr = arr.map((ele, idx) => { // ele = ele * 2;
//   console.log("idx: ", idx, "ele :", ele); // 0 1 2 3 4
//   ele = ele * 2; // 2 4 6 8 10
//   return ele; // [2,4,6,8,10]
// });
// console.log("arr:", arr); // [1,2,3,4,5]
// console.log("mapArr: ", mapArr); // [2,4,6,8,10]

// const strArr = ["a" , "b", "c", "d" , "e"]; // ['a','b','c','d','e']
// const mapArr2 = strArr.map((ele, idx) => {// ele = ele.toUpperCase();
//   console.log("idx:", idx, "ele:", ele); // 0 a 1 b 2 c 3 d 4 e
//   ele = ele.toUpperCase(); // A B C D E
//   ele = ele.concat("!"); // A! B! C! D! E!
//   return ele;
// });
// console.log("strArr:", strArr); // ['a','b','c','d','e']
// console.log("mapArr2:", mapArr2); // ['A!','B!','C!','D!','E!']

// // Filter Method - creates a new array with all elements that pass the test implemented by the provided function.

// const filArr = [2, 5, 3, 4, 7, 9, 65];

// const filterArr = filArr.filter((ele, idx) => { // ele = ele % 2 === 0;
//   return ele % 2 === 0; // [2,4]
// });
// // console.log("filArr:", filArr); // [2,5,3,4,7,9,65]
// console.log("filterArr:", filterArr); // [2,4]
// console.log(filArr3); // [2,5,3,4,7,9,65]

// const newRestArr = [...filArr2, ...filArr3];
// console.log(newRestArr); // [2,5,3,4,7,9,65]

// arr = [1, 2, 3, 4];

// const mapArr = arr.map((ele, idx) => {
//   return ele + 10;
// });
// console.log(mapArr); // [11,12,13,14]

// const str = ["apple" , "banana" , "cherry" , "date" , "elderberry"]

// const mapArr = str.map((ele, idx) => {
//   return ele.length; 
// });
// console.log(mapArr);

// const filterArr = mapArr.filter((ele, idx) => {
//   return ele % 2 === 0;
// });
// console.log( filterArr); 

// const filterArr2 = mapArr.filter((ele, idx) => {
//   return ele % 2 !== 0;
// });
// console.log( filterArr2);


// reduce  ye reduce the array to a single value
const redArr = [1,2,3,4,5,6,7,8,9];

const  redArr2 = redArr.reduce((acc, ele) => {
  return acc + ele;
}, 0);
console.log("redArr2:", redArr2);


// const str = ["apple", "banana", "cherry", "date", "elderberry"];

// const redArr2 = str.reduce((acc, ele) => {
//   return acc.concat(ele);
// }, "");

// console.log("redArr2:", redArr2);



// const newRestArr = [...filterArr, ...filterArr2];
// console.log(newRestArr);


// const redArr = newRestArr.reduce((acc, ele) => {
//   return acc + ele;
// }, 0);
// console.log("redArr:", redArr);