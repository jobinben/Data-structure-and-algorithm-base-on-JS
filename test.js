
let arr = [4,6,7,3,8,5,2,9]

let j = 0;
for(let i = 0; i < arr.length; i++) {
    if(arr[i] <= 5) {
        swap(arr, i, j)
        j++
    }
}

function swap(arr, i, j) {
    arr[i] = arr[i] ^ arr[j]
    arr[j] = arr[i] ^ arr[j]
    arr[i] = arr[i] ^ arr[j]
}

console.log(arr)