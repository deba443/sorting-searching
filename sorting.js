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

const arr=[-6,20,8,-2,4]
function insertionSort(arr){
    for(let i=1;i<arr.length;i++){
        for(let j=0;j<i+1;j++){
            if(arr[j]>arr[j+1]){
                let temp=arr[j]
                arr[j]=arr[j+1]
                arr[j+1]=arr[0]
            }
            // else if
        }

    }

}
console.log(insertionSort(arr))