import Comparator from '../../utils/comparator/Comparator'
import HashTable from '../hash-table/HashTable'

export default class BinaryTreeNode {
    constructor(value = null) {
        this.left = null
        this.right = null
        this.parent = null
        this.value = value

        // Any node related meta information may be stored here.
        this.meta = new HashTable()

        // This comparator is used to compare binary tree nodes with each other.
        this.nodeComparator = new Comparator()
    }

    get leftHeight() {
        if (!this.left) {
            return 0
        }

        return this.left.height + 1
    }

    get rightHeight() {
        if (!this.right) {
            return 0
        }

        return this.right.height + 1
    }

    get height() {
        return Math.max(this.leftHeight, this.rightHeight)
    }

    get balanceFactor() {
        return this.leftHeight - this.rightHeight
    }

    /**
     * Get parent's sibling if it exists.
     * @return {BinaryTreeNode}
     */
    get uncle() {
        // Check if current node has parent.
        if (!this.parent) {
            return undefined
        }

        // Check if current node has grand-parent.
        if (!this.parent.parent) {
            return undefined
        }

        // Check if grand-parent has two children.
        if (!this.parent.parent.left || !this.parent.parent.right) {
            return undefined
        }

        // So for now we know that current node has grand-parent and this
        // grand-parent has two children. Let's find out who is the uncle.
        if (this.nodeComparator.equal(this.parent, this.parent.parent.left)) {
            // Right one is an uncle
            return this.parent.parent.right
        }

        // Left one is an uncle.
        return this.parent.parent.left
    }

    setValue(value) {
        this.value = value

        return this
    }

    setLeft(node) {
        // Reset parent for left node since it is going to be detached
        if (this.left) {
            this.left.parent = null
        }

        // Attach new node to the left.
        this.left = node

        // Make current node to be a parent for new left one.
        if (this.left) {
            this.left.parent = this
        }

        return this
    }

    setRight(node) {
        if (this.right) {
            this.right.parent = null
        }

        this.right = node

        if (this.right) {
            this.right.parent = this
        }

        return this
    }

    removeChild(nodeToRemove) {
        if (this.left && this.nodeComparator(this.left, nodeToRemove)) {
            this.left = null

            return true
        }

        if (this.right && this.nodeComparator(this.right, nodeToRemove)) {
            this.right = null

            return true
        }

        return false
    }


}

// main wallet
// PW5KTZm3BQBqEGf7gw5db4DSi9gNbykEED6K8mpP5r36x95NpESvk