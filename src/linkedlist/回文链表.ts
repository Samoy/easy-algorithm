import { ListNode } from "@/common/node";

export function isPalindrome(head: ListNode | null): boolean {
  if (!head) return true;
  const firstHalf = endOfFirstHalf(head);
  const secondHalf = reverseList(firstHalf.next);
  let p1 = head,
    p2 = secondHalf;
  let result = true;
  while (p2) {
    if (p1.val !== p2.val) {
      result = false;
    }
    p1 = p1.next;
    p2 = p2.next;
  }
  firstHalf.next = reverseList(secondHalf);
  return result;
}

function endOfFirstHalf(head: ListNode | null): ListNode | null {
  let fast = head;
  let slow = head;
  while (fast.next && fast.next.next) {
    fast = fast.next.next;
    slow = slow.next;
  }
  return slow;
}

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;
  let curr = head;
  while (curr) {
    const nextTemp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = nextTemp;
  }
  return prev;
}
