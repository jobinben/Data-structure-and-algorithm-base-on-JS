let tree = {
    value: 1,
    left: {
        value: 2,
        left: {
            value: 3,
        },
        right: {
            value: 4
        }
    },
    right: {
        value: 5,
        left: {
            value: 6,
        },
        right: {
            value: 7
        }
    }
}

function preOrder(node) {
    if(node) {
        console.log(node.value)
        preOrder(node.left)
        preOrder(node.right)
    }

}
console.log('先序遍历 DLR')
preOrder(tree) // 1 2 3 4 5 6 7

function inOrder(node) {
    if(node) {
        inOrder(node.left)
        console.log(node.value)
        inOrder(node.right)
    }
}
console.log('中序遍历 LDR')
inOrder(tree) // 3 2 4 1 6 5 7


function posOrder(node) {
    if(node) {
        posOrder(node.left)
        posOrder(node.right)
        console.log(node.value)
    }
}
console.log('后序遍历')
posOrder(tree) // 3 4 2 6 7 5 1

