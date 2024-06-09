//Bubble sort

// function bubbleSort(arr){
//     let swapped
//     for(let i=0;i<arr.length;i++){
//         swapped=false
//         for (let j=0;j<arr.length-i-1;j++){
//             if(arr[j]>arr[j+1]){
//                 let val=arr[j]
//                 arr[j]=arr[j+1]
//                 arr[j+1]=val
//                 swapped=true
//             }
//         }
//         if(!swapped){
//             break
//         }
//     }
//     return arr
// }
// console.log(bubbleSort(arr))

//Insertion Sort

// const arr=[-6,20,8,-2,4]
// function insertionSort(arr){
//     let currentElem
//     for(let i=1;i<=arr.length-1;i++){
//         currentElem=arr[i]
//         let j=i-1
//         while(j>=0 && arr[j]>key){
//                 arr[j+1]=arr[j]
//                 j=j-1
//         }
//     }
//     return arr

// }
// console.log(insertionSort(arr))

//QUICK SORT

// const arr=[-6,20,8,-2,4]
// function quickSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let pivot=arr[arr.length-1]
//     let leftArr=[]
//     let rightArr=[]
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]>pivot){
//             rightArr.push(arr[i])
//         }
//         else{
//             leftArr.push(arr[i])
//         }
//     }
//     return[...quickSort(leftArr),pivot,...quickSort(rightArr)]
// }
// console.log(quickSort(arr))

//MERGE SORT
// const arr=[-6,20,8,-2,4]
// function merge(leftArr,rightArr){
//     let sortedArr=[]
//     let i=0
//     let j=0
//     while (i<leftArr.length && j < rightArr.length){
//         if(leftArr[i]<rightArr[j]){
//             sortedArr.push(leftArr[i])
//             i++
//         }
//         else{
//             sortedArr.push(rightArr[j])
//             j++
//         }
//     }
//     while(i<leftArr.length){
//         sortedArr.push(leftArr[i])
//         i++
//     }
//     while(j<rightArr.length){
//         sortedArr.push(rightArr[j])
//         j++
//     }
//     return sortedArr
// }

// function mergeSort(arr){
//     if(arr.length<2){
//         return arr
//     }
//     let mid=arr.length/2 | 0
//     const leftArr = arr.slice(0, mid);
//     const rightArr = arr.slice(mid);
//     return merge(mergeSort(leftArr),mergeSort(rightArr))
// }
// console.log(mergeSort(arr))

//SELECTION SORT
const arr = [-6, 20, 8, -2, 4];
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex != i) {
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}
console.log(selectionSort(arr));
