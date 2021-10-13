// 时间复杂度 O(n²) 空间复杂度 O(1)
let arr = [3,5,4,1,0,6]

function bubbleSort(arr) {
    if(arr === null || arr.length < 2) return;
    // 比较完一轮后，就排序好一个数， end - 1,
    // 复杂度是: end + (end - 1) + (end - 2) + (end - 3) + ... + 2 + 1 是一个等差数列 
    // 复杂度评定：只要高阶数， 不要低阶数，不要常数项系数。 而等差数列前n项和公式: (d/2)*n²+（a1-d/2）*n
    // 最高阶数是 n²  所以时间复杂度为: O(n²)
    for(let end = arr.length - 1; end > 0; end --) {
        for( let i = 0; i < end; i++) {
            if(arr[i] > arr[i + 1]) {
                swap(arr, i, i + 1)
            }
        }
    }
}


function swap(arr, i , j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}

bubbleSort(arr)
console.log(arr)