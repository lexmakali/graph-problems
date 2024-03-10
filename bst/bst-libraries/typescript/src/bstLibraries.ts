export class BstNode {
    data: number | null
    left: BstNode | null
    right: BstNode | null

    constructor(data: number) {
        this.data = data
        this.left = null
        this.right = null
    }
}

export class Bst {

    sum(root: BstNode | null): number {
        if (root === null) {
            return 0
        }
        const leftSum = this.sum(root.left)
        const rightSum = this.sum(root.right)
        return root.data + leftSum + rightSum
    }

    reverse(root: BstNode | null) {
        if (root === null) {
            return
        }
        this.reverse(root.left)
        this.reverse(root.right)
        this.swap(root.left, root.right)
    }

    height(root: BstNode | null): number {
        if (root === null) {
            return 0
        }
        const leftHeight = this.height(root.left)
        const rightHeight = this.height(root.right)
        return 1 + Math.max(leftHeight, rightHeight)
    }

    exists(root: BstNode | null, element: number): boolean {
        if (root === null) {
            return false
        }
        const leftExists = this.exists(root.left, element)
        const rightExists = this.exists(root.right, element)
        return root.data === element || leftExists || rightExists
    }

    subTreeWithSumExistsHelper(root: BstNode | null, sum: number, exists: boolean): number {
        if (root === null) {
            return 0
        }
        if (exists) {
            return Number.MIN_SAFE_INTEGER
        }
        const leftSum = this.subTreeWithSumExistsHelper(root.left, sum, exists)
        const rightSum = this.subTreeWithSumExistsHelper(root.right, sum, exists)
        const currentSum = root?.data + leftSum + rightSum
        if (currentSum === sum) {
            exists = true
        }
        return currentSum
    }

    subTreeWithSumExists(root: BstNode | null, sum: number): boolean {
        let exists: boolean = false
        if (root === null) {
            return false
        }
        this.subTreeWithSumExistsHelper(root, sum, exists)
        return exists
    }

    swap(x: any | null, y: any | null) {
        let temp = x
        x = y
        y = temp
    }
}