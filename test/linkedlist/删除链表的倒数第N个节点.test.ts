import { ListNode } from "@/common/node";
import { removeNthFromEnd } from "@/linkedlist/删除链表的倒数第N个节点";
import { describe, test, expect } from "vitest";

describe("Test 删除链表的倒数第N个节点", () => {
  test("Test Case 1", () => {
    const listNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    expect(removeNthFromEnd(listNode, 2)).toEqual(
      new ListNode(1, new ListNode(2, new ListNode(3, new ListNode(5))))
    );
  });
});
