import { describe, test, expect } from "vitest";
import { deleteNode } from "@/linkedlist/删除链表中的节点";
import { ListNode } from "@/common/node";

describe("Test 删除链表中的节点", () => {
  test("Tesst Case 1", () => {
    let node = new ListNode(4);
    node.next = new ListNode(5);
    node.next.next = new ListNode(1);
    node.next.next.next = new ListNode(9);
    deleteNode(node.next);
    expect(node.next.val).toBe(1);
  });
});
