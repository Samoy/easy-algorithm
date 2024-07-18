import { ListNode } from "@/common/node";

export function reverseList(head: ListNode | null): ListNode | null {
  if (!head) return null;
  let pre: ListNode | null = null;
  while (head) {
    let next = head.next;
    head.next = pre;
    pre = head;
    head = next;
  }
  return pre;
}
