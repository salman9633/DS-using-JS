var treeify = require('treeify')

class Node {
    value: number
    left: number | null
    right: number | null
    constructor(value: number) {
        this.value = value
        this.left = null
        this.right = null
    }
}

class BinarySearchTree {
    root: any
    constructor() {
        this.root = null
    }

    isEmpty() {
        return this.root === null
    }

    insert(value: number) {
        const newNode = new Node(value)

        if (this.isEmpty()) {
            this.root = newNode
        } else {
            this.insertNode(this.root, newNode)
        }
    }

    insertNode(root: any, newNode: any) {
        if (newNode.value < root.value) {
            if (root.left === null) {
                root.left = newNode
            } else {
                this.insertNode(root.left, newNode)
            }
        } else {
            if (root.right === null) {
                root.right = newNode
            } else {
                this.insertNode(root.right, newNode)
            }
        }
    }

    search(root: any, value: any): boolean {
        if (!root) {
            return false
        } else {
            if (root.value === value) {
                return true
            } else if (value < root.value) {
                return this.search(root.left, value)
            } else {
                return this.search(root.right, value)
            }
        }
    }
    /*_____________________________________DFS___________________________________________________*/
    preOrder(root: any) {
        if (root) {
            console.log(root.value);
            this.preOrder(root.left)
            this.preOrder(root.right)
        }
    }

    inOrder(root: any) {
        if (root) {
            this.inOrder(root.left)
            console.log(root.value);
            this.inOrder(root.right)

        }
    }

    postOrder(root: any) {
        if (root) {
            this.postOrder(root.left)
            this.postOrder(root.right)
            console.log(root.value);

        }
    }

    /*____________________________BFS__________________________________________________________________*/

    levelOrder() {
        const queue: any = []
        queue.push(this.root)
        while (queue.length) {
            let curr = queue.shift()
            console.log(curr.value, ';')
            if (curr.left) {
                queue.push(curr.left)
            } else if (queue.right) {
                queue.push(curr.right)
            }
        }

    }
    /*...................................................................................................................*/
    min(root: any): any {
        if (!root.left) {
            return root.value
        } else {
            return this.min(root.left)
        }
    }

    max(root: any): any {
        if (!root.right) {
            return root.value
        } else {
            return this.max(root.right)
        }
    }

   
}


const bst = new BinarySearchTree()

bst.insert(10)
bst.insert(15)
bst.insert(5)
bst.insert(3)
bst.insert(7)

console.log(bst.search(bst.root, 45));
console.log("preOrder");

bst.preOrder(bst.root)
console.log("inOrder");
// bst.inOrder(bst.root)
bst.levelOrder()

console.log(bst.min(bst.root), 'min');
console.log(bst.max(bst.root), 'max');

console.log(treeify.asTree(bst, true))

export { }