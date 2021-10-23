// 荷兰国旗 
// 等于num的放在中间，小于num的放在左边，大于num的放在右边

function partition(arr, left, right, num) {
    let less = left - 1;
    let more = right + 1;
    let cur = left

    while(cur < more) {

        if(arr[cur] < num) {
            swap(arr, ++less, cur++)
        }else if(cur > num) {
            swap(arr, --more, cur)
        } else {
            cur++
        }
    }
    return arr
}

function swap(arr, i, j) {
    // arr[i] = arr[i] ^ arr[j]
    // arr[j] = arr[i] ^ arr[j]
    // arr[i] = arr[i] ^ arr[j]
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}


// for test
function generateArray() {
    let arr = new Array(10)
    for(let i = 0; i < arr["length"]; i++) {
        arr[i] = parseInt(Math.random() * 10 + 1)
    }
    return arr
}

// for test
function printArray(arr) {
    if(arr === null) {
        return;
    }
    let str = ''
    for(let i = 0; i < arr['length']; i++) {
        str = str + arr[i] + ' '
    }
    console.log(str)
}

function main() {
    let test = generateArray()
    printArray(test)
    partition(test, 0, test.length - 1, 5)
    printArray(test)
}

main()