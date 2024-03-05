// LinkedList structure
var SNode = /** @class */ (function () {
    function SNode(data) {
        this.data = data;
        this.next = null;
    }
    return SNode;
}());
var LinkedList = /** @class */ (function () {
    function LinkedList(comparator) {
        this.head = null;
        this.comparator = comparator;
    }
    LinkedList.prototype.append = function (data) {
        if (!this.head) {
            this.head = new SNode(data);
        }
        else {
            var current = this.head;
            while (current.next != null) {
                current = current.next;
            }
            current.next = new SNode(data);
        }
    };
    LinkedList.prototype.delete = function (data) {
        if (!this.head)
            return;
        // Check if the head SNode is the SNode to be removed
        if (this.comparator(this.head.data, data)) {
            this.head = this.head.next;
            return;
        }
        var current = this.head.next;
        var previous = this.head;
        /**
         * Search for the SNode to be removed and keep track of its previous SNode
         *
         * If it were a double linked list, we could simply search the SNode
         * and it would have a pointer to the previous SNode
         **/
        while (current) {
            if (this.comparator(current.data, data)) {
                current = null;
            }
            else {
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
    };
    LinkedList.prototype.search = function (data) {
        var current = this.head;
        while (current) {
            if (this.comparator(current.data, data)) {
                return current;
            }
            current = current.next;
        }
        return null;
    };
    LinkedList.prototype.traverse = function () {
        var current = this.head;
        while (current != null) {
            console.log(current.data);
            current = current.next;
        }
    };
    return LinkedList;
}());
// head1: 1 2 5
// head2: 3 4 6
function merge(head1, head2) {
    if (head1 === null && head2 === null) {
        return null;
    }
    else if (head1 === null) {
        return head2;
    }
    else if (head2 === null) {
        return head1;
    }
    var mergedHead;
    if (head1.data <= head2.data) {
        mergedHead = head1;
        head1 = head1.next;
    }
    else {
        mergedHead = head2;
        head2 = head2.next;
    }
    var mergedTail = mergedHead;
    while (head1 && head2) {
        var tempNode = null;
        if (head1.data <= head2.data) {
            tempNode = head1;
            head1 = head1.next;
        }
        else {
            tempNode = head2;
            head2 = head2.next;
        }
        mergedTail.next = tempNode;
        mergedTail = tempNode;
    }
    if (head1) {
        mergedTail.next = head1;
    }
    else if (head2) {
        mergedTail.next = head2;
    }
    return mergedHead;
}
function mergeKSortedLinkedLists(inputLists) {
    var mergedHead = inputLists[0];
    for (var i = 1; i < inputLists.length; i++) {
        console.log("merging");
        mergedHead = merge(mergedHead, inputLists[i]);
    }
    return mergedHead;
}
// Test Case
function generateKSortedLinkedList(k, size) {
    if (size === void 0) { size = 10; }
    var numberComparator = (function (p, r) { return p < r; });
    var resultLists = [];
    for (var i = 0; i < k; i++) {
        var linkedList = new LinkedList(numberComparator);
        // Append elements to the linked list
        var randomInt = Math.floor(getRandomInt(1, 10));
        for (var x = 0; x < size; x++) {
            linkedList.append(randomInt + (x * 10));
        }
        if (linkedList && linkedList.head) {
            resultLists.push(linkedList.head);
        }
    }
    return resultLists;
}
function traverseList(linkedList) {
    var current = linkedList;
    while (current) {
        console.log("SNode data:", current.data);
        current = current.next;
    }
}
function getRandomInt(min, max) {
    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (max - min)) + min;
}
// Test-1
var lists = generateKSortedLinkedList(2);
lists.forEach(traverseList);
var mergedList = merge(lists[0], lists[1]);
var resultPtr = mergedList;
while (resultPtr !== null) {
    console.log(resultPtr.data);
    resultPtr = resultPtr.next;
}
// Test-2
var lists2 = generateKSortedLinkedList(10);
lists2.forEach(traverseList);
var mergedList1 = mergeKSortedLinkedLists(lists2);
var resultPtr = mergedList1;
while (resultPtr !== null) {
    console.log(resultPtr.data);
    resultPtr = resultPtr.next;
}
