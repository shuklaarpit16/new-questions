class ListNode {
  constructor(val = 0, next = null) {
    this.val = val;
    this.next = next;
  }
}

var deleteDuplicates = function (head) {
  let current = head;

  while (current && current.next) {
    if (current.val === current.next.val) {
      current.next = current.next.next; // Skip the duplicate
    } else {
      current = current.next; // Move to the next node
    }
  }

  return head;
};
