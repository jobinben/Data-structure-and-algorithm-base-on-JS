// 归并排序
// 时间复杂度O(N*logN) 
// 空间复杂度 O(N)
function mergeSort(arr) {
    if(arr === null || arr.length < 2) {
        return;
    }
    startSort(arr, 0, arr.length - 1)
}

function startSort(arr, l, r) {
    if(l === r) {
        return;
    }
    let mid = l + ((r - l) >> 1)
    startSort(arr, l, mid);
    startSort(arr, mid + 1, r)
    merge(arr, l, mid, r)
}

function merge(arr, l, m, r) {
    let help = new Array(r - l + 1)
    let i = 0,
        p1 = l,
        p2 = m + 1;
    while(p1 <= m && p2 <= r) {
        help[i++] = arr[p1] < arr[p2] ? arr[p1++] : arr[p2++]
    }
    // 两个必须且只有一个越界
    while(p1 <= m) {
        help[i++] = arr[p1++]
    }

    while(p2 <= r) {
        help[i++] = arr[p2++]
    }

    for(i = 0; i < help.length; i++) {
        arr[l+i] = help[i]
    }
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
        mergeSort(arr1)
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

test(50, 5, 10)