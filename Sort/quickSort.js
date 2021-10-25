// 随机快速排序
// 时间复杂度: O(N*logN)
// 空间复杂度: O(logN)
// 划分一个数，小于放左边，等于放中间，大于放右边

function quickSort(arr) {
    if(arr === null || arr.length < 2) {
        return;
    }
    startSort(arr, 0, arr.length -1)
}

function startSort(arr, L, R) {
    if(L < R) {
        swap(arr, L + parseInt(Math.random() * (R-L+1)), R) // 这一行决定了是否随机快排
        let p = partition(arr, L, R)
        startSort(arr, L, p[0] - 1);
        startSort(arr, p[1]+1, R);
    }
}

function partition(arr, L, R) {
    let less = L -1;
    let more = R;
    while(L < more) {
        if(arr[L] < arr[R]) {
            swap(arr, ++less, L++)
        } else if(arr[L] > arr[R]) {
            swap(arr, --more, L)
        } else {
            L++
        }
    }
    swap(arr, more, R)
    return [less+1, more]
}

function swap(arr, i, j) {
    let temp = arr[i]
    arr[i] = arr[j]
    arr[j] = temp
}