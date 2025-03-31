class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var deleteDuplicates = function (head) {
  if (!head) return null;

  let dummy = new ListNode(0, head); // Dummy node before the head
  let prev = dummy;
  let curr = head;

  while (curr) {
    // Check if this node has duplicates
    if (curr.next && curr.val === curr.next.val) {
      // Skip all nodes with the same value
      while (curr.next && curr.val === curr.next.val) {
        curr = curr.next;
      }
      prev.next = curr.next; // Remove all duplicates
    } else {
      prev = prev.next; // Move prev pointer if no duplicate
    }
    curr = curr.next; // Move current pointer
  }

  return dummy.next; // Return modified list
};
