//LINEAR SEARCH

//PROBLEM

//Given an array of length n elements and a target element t.find the index of t in the array.Return -1 if the target element is not found

// let arr=[-5,2,10,4,6]

// function linearSeach(arr,n){
//     for (let i=0;i<arr.length;i++){
//         if(arr[i]==n){
//             return i
//         }
//     }
//     return -1
// }
// console.log(linearSeach(arr,10))

//Binary SEARCH

//PROBLEM

//Given a sorted array of length n elements and a target element t.find the index of t in the array.Return -1 if the target element is not found

// let arr = [-5, 2, 4, 6, 10, 12, 14, 16];
// let count = 0;
// function binarySearch(arr, n) {
//   let startIndex = 0;
//   let lastIndex = arr.length - 1;
//   while (startIndex <= lastIndex) {
//     let mid = Math.floor((startIndex + lastIndex) / 2);
//     if (arr[mid] === n) {
//       return mid;
//     } else if (arr[mid] < n) {
//       startIndex = mid + 1;
//     } else {
//       lastIndex = mid - 1;
//     }
//     count += 1;
//   }
//   return -1;
// }
// console.log(binarySearch(arr, 10));
// console.log(count);

//Recursive BinarySearch
// let arr = [-5, 2, 4, 6, 10, 12, 14, 16];
// function recurSiveBinarySearch(startIndex, lastIndex, arr, target) {
//   let mid = ((startIndex + lastIndex) / 2) | 0;
//   if (startIndex > lastIndex) {
//     return -1;
//   } else if (arr[mid] === target) {
//     return mid;
//   } else if (arr[mid] < target) {
//     startIndex = mid + 1;
//   } else {
//     lastIndex = mid - 1;
//   }
//   return recurSiveBinarySearch(startIndex, lastIndex, arr, target);
// }
// console.log(recurSiveBinarySearch(0, arr.length - 1, arr, 30));

