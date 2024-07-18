import { ListNode } from "@/common/node";
import { hasCycle } from "@/linkedlist/环形链表";
import { describe, expect, test } from "vitest";

describe("Test 环形链表", () => {
  test("Test Case 1", () => {
    const listNode = new ListNode(3);
    listNode.next = new ListNode(2);
    listNode.next.next = new ListNode(0);
    listNode.next.next.next = new ListNode(-4);
    listNode.next.next.next.next = listNode.next;
    expect(hasCycle(listNode)).toBe(true);
  });
  test("Test Case 2", () => {
    const listNode = new ListNode(1);
    listNode.next = new ListNode(2);
    listNode.next.next = listNode;
    expect(hasCycle(listNode)).toBe(true);
  });
  test("Test Case 3", () => {
    const listNode = new ListNode(1);
    expect(hasCycle(listNode)).toBe(false);
  });
});
