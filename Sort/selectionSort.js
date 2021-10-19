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
        selectionSort(arr1)
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

test(500)