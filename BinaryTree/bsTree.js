
let bsTree = {
    value: 5,
    left: {
        value: 3,
        left: {
            value: 2
        },
        right: {
            value: 4
        }
    },
    right: {
        value: 7,
        left: {
            value: 6
        },
        right: {
            value: 8
        }
    }
}

let inArr = []
function KthNode(pRoot, k){
    // write code here
 
    if(!pRoot) return null
    // 利用中序遍历BST可以把结点以升序遍历出来
    KthNode(pRoot.left, k)
    inArr.push(pRoot)
    KthNode(pRoot.right, k)
    return inArr[k-1]
}

let result = KthNode(bsTree, 3)
console.log(result)