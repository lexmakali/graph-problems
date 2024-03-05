// LinkedList structure
class SNode<T> {
	data: T
	next: SNode<T> | null

	constructor(data: T) {
		this.data = data
		this.next = null
	}
}

class LinkedList<T> {
    head: SNode<T> | null = null;
    comparator: (a: T, b: T) => boolean;

    constructor(comparator: (a: T, b: T) => boolean) {
        this.comparator = comparator;
    }

    append(data: T): void {
        if (!this.head) {
            this.head = new SNode(data);
        } else {
            let current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new SNode(data);
        }
    }

    delete(data: T): void {
        if (!this.head) return;

        // Check if the head SNode is the SNode to be removed
        if (this.comparator(this.head.data, data)) {
            this.head = this.head.next;
            return;
        }

        let current = this.head.next;
        let previous = this.head;

        /**
         * Search for the SNode to be removed and keep track of its previous SNode
         *
         * If it were a double linked list, we could simply search the SNode
         * and it would have a pointer to the previous SNode
         **/
        while (current) {
            if (this.comparator(current.data, data)) {
                current = null;
            } else {
                previous = current;
                current = current.next;
            }
        }

        /**
         * set previous.next to the target.next, if the SNode target is not found,
         * the 'previous' will point to the last SNode,
         * since the last SNode hasn't next, nothing will happen
         **/
        previous.next = previous.next ? previous.next.next : null;
    }

    search(data: T): SNode<T> | null {
        let current = this.head;
        while (current) {
            if (this.comparator(current.data, data)) {
                return current;
            }
            current = current.next;
        }
        return null;
    }

    traverse() {
        let current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// head1: 1 2 5
// head2: 3 4 6
function merge(head1: SNode<number> | null, head2: SNode<number> | null): SNode<number> | null {
	if (head1 === null && head2 === null) {
        return null
    } else if (head1 === null) {
        return head2
    } else if (head2 === null) {
        return head1
    }

    let mergedHead: SNode<number> | null
    if (head1.data <= head2.data) {
        mergedHead = head1
        head1 = head1.next
    } else {
        mergedHead = head2
        head2 = head2.next
    }
    let mergedTail: SNode<number> | null = mergedHead
    while (head1 && head2) {
        let tempNode: SNode<number> | null = null
        if (head1.data <= head2.data) {
            tempNode = head1
            head1 = head1.next
        } else {
            tempNode = head2
            head2 = head2.next
        }

        mergedTail.next = tempNode
        mergedTail = tempNode
    }
    if (head1) {
        mergedTail.next = head1
    } else if (head2) {
        mergedTail.next = head2
    }
	return mergedHead
}

function mergeKSortedLinkedLists(inputLists: SNode<number>[]): SNode<number> | null {
    let mergedHead: SNode<number> | null = inputLists[0]
    for (let i = 1; i < inputLists.length; i++) {
        console.log("merging")
        mergedHead = merge(mergedHead, inputLists[i])
    }
    return mergedHead
}





// Test Case
function generateKSortedLinkedList(k: number, size: number = 10): SNode<number>[] {
	const numberComparator = ((p: number, r: number) => p < r)
	const resultLists: SNode<number>[] = []
	for (var i = 0; i < k; i++) {
		const linkedList = new LinkedList<number>(numberComparator)

		// Append elements to the linked list
		const randomInt: number = Math.floor(getRandomInt(1, 10))
        for (let x = 0; x < size; x++) {
            linkedList.append(randomInt + (x * 10))
        }

        if (linkedList && linkedList.head) {
		    resultLists.push(linkedList.head)
        }
	}
	return resultLists
}

function traverseList(linkedList: SNode<number>) {
	let current = linkedList;
	while (current) {
		console.log("SNode data:", current.data);
		current = current.next;
	}
}

function getRandomInt(min: number, max: number): number {
	// The maximum is exclusive and the minimum is inclusive
	return Math.floor(Math.random() * (max - min)) + min;
}

// Test-1
const lists = generateKSortedLinkedList(2)
lists.forEach(traverseList)
const mergedList = merge(lists[0], lists[1])
var resultPtr = mergedList
while (resultPtr !== null) {
    console.log(resultPtr.data)
    resultPtr = resultPtr.next
}

// Test-2
const lists2 = generateKSortedLinkedList(10)
lists2.forEach(traverseList)
const mergedList1 = mergeKSortedLinkedLists(lists2)
var resultPtr = mergedList1
while (resultPtr !== null) {
    console.log(resultPtr.data)
    resultPtr = resultPtr.next
}