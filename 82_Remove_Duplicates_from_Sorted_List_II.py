from typing import Optional

class ListNode:
    def __init__(self, val=0, next=None):
        self.val = val
        self.next = next

class Solution:
    def deleteDuplicates(self, head: Optional[ListNode]) -> Optional[ListNode]:
        if not head:
            return None
        
        dummy = ListNode(0, head)  # Dummy node before the head
        prev = dummy
        curr = head

        while curr:
            # Check if this node has duplicates
            if curr.next and curr.val == curr.next.val:
                # Skip all nodes with the same value
                while curr.next and curr.val == curr.next.val:
                    curr = curr.next
                prev.next = curr.next  # Remove all duplicates
            else:
                prev = prev.next  # Move prev pointer if no duplicate
            
            curr = curr.next  # Move current pointer

        return dummy.next  # Return modified list
