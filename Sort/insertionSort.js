// 插入排序
// 逆序的情况下时间复杂度 O(n²)
// 升序的情况下时间复杂度 O(n)
// 证明插入排序的时间复杂度跟数据状况有关系的。
// 空间复杂度 O(1)

// 插入排序类似于打斗地主，扑克牌的排序
function insertionSort(arr) {
    if(arr === null || arr.length < 2) return;
    // 默认第一个数排好序
    for(let i = 1; i < arr.length; i++) {
        // j = i - 1之后，当前 j 等于之前排好序的最后一个位置， j+1 等于当前位置。
        // 排好序的最后一个位置和当前位置作比较，当前位置小于排好序的最后一个位置就交换，（否则不交换，退出循环）
        for(let j = i - 1; j >= 0 && arr[j] > arr[j+1]; j--) {
            swap(arr, j, j + 1)
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

/**对数器 */

// for test
function comparator(arr) {
    arr.sort((a, b) => a - b)
}

// for test
function generateRandomArray(maxSize, maxValue) {
    let len = parseInt((maxSize + 1) * Math.random()) // [0, maxSize]
    let arr = new Array(len)
    for(let i = 0; i < len; i++) {
        arr[i] = parseInt((maxValue + 1) * Math.random()) - parseInt(maxValue * Math.random())
    }
    return arr
}

// for test
function copyArray(arr) {
    if(arr === null) {
        return null
    }
    let res = new Array(arr.length)
    for(let i = 0; i < arr.length; i++) {
        res[i] = arr[i]
    }
    return res
}

// for test
function isEqual(arr1, arr2) {
    if((arr1 === null && arr2 !== null) || (arr1 !== null && arr2 === null)) {
        return false
    }
    if(arr1 === null && arr2 ===null) {
        return true
    }
    if(arr1.length !== arr2.length) {
        return false
    }
    for(let i = 0; i < arr1.length; i++) {
        if(arr1[i] !== arr2[i]) {
            return false
        }
    }
    return true
}

// for test
function printArray(arr) {
    if(arr === null) {
        return;
    }
    let res = ' '
    for(let i = 0; i < arr.length; i++) {
        res = res + ' ' + arr[i]
    }
    console.log(res)
}

// for test
function test(testTimes = 500000, maxSize = 100, maxValue = 100) {
    let succeed = true;
    for(let i = 0; i < testTimes; i++) {
        let arr1 = generateRandomArray(maxSize, maxValue)
        let arr2 = copyArray(arr1)
        insertionSort(arr1)
        comparator(arr2)
        if(!isEqual(arr1, arr2)) {
            printArray(arr1)
            printArray(arr2)
            succeed = false;
            break;
        }
    }
    console.log(succeed ? 'Nice' : 'Fucking fucked!')
}

test()