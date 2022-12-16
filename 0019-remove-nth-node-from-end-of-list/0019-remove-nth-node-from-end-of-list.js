/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    // Create a new LinkedList with a dummy first entry that copies the original LinkedList
    let newLinkedList = new ListNode(0);
    newLinkedList.next = head;

    // Initialise variables used to calculate the size of and traverse the original LinkedList
    let linkedListTraverser = head;
    let size = 0;

    // Traverse the LinkedList to establish its size
    while (linkedListTraverser != null) {
        linkedListTraverser = linkedListTraverser.next;
        size++;
    }

    // Reset the instance of the original LinkedList used for traversing
    linkedListTraverser = newLinkedList;

    // Traverse the list again till we reach the element before the one that needs to be removed
    for (let i = 0; i < size - n; i++) {
        linkedListTraverser = linkedListTraverser.next;
    }

    // Remove the target element
    linkedListTraverser.next = linkedListTraverser.next.next;

    // Return the copy of the original list node, minus the initial dummy node and the node that was removed
    return newLinkedList.next;
};