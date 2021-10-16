// 时间复杂度 O(n²) 空间复杂度 O(1)
let arr = [3,5,4,1,0,6]

// (1) 当前值和最小值交换
// (2) 交换完移入下一步，继续重复 (1)
function selectionSort(arr) {
    if( arr === null || arr.length < 2) return;

    for(let i = 0; i < arr.length; i++) {
        let minIndex = i; 
        for(let j = i + 1; j < arr.length; j++) {
            minIndex = arr[j] < arr[minIndex] ? j : minIndex
        }
        swap(arr, i, minIndex)
    }
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

selectionSort(arr)

console.log('选择排序: ', arr)