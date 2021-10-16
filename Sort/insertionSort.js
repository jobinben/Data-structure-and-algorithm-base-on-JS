// 逆序的情况下时间复杂度 O(n²)
// 升序的情况下时间复杂度 O(n)
// 证明插入排序的时间复杂度跟数据状况有关系的。
// 空间复杂度 O(1)
let arr = [3,5,4,1,0,6]

// 插入排序类似于打斗地主，扑克牌的排序
function insertionSort(arr) {
    if(arr === null || arr.length < 2) return;
    // 默认第一个数排好序
    for(let i = 1; i < arr.length; i++) {
        // j = i - 1之后，当前 j 等于之前排好序的最后一个位置， j+1 等于当前位置。
        // 排好序的最后一个位置和当前位置作比较，当前位置小于排好序的最后一个位置就交换，（否则不交换，退出循环）
        for(let j = i - 1; j >= 0 && arr[j] > arr[j+1]; j--) {
            swap(arr, i, j)
        }
    }
}

function swap(arr, i, j) {
    arr[i] = arr[i] ^ arr[j]
    arr[j] = arr[i] ^ arr[j]
    arr[i] = arr[i] ^ arr[j]
    // 等同于
    // let temp = arr[i]
    // arr[i] = arr[j]
    // arr[j] = temp
}