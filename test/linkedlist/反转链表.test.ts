import { ListNode } from "@/common/node";
import { reverseList } from "@/linkedlist/反转链表";
import { describe, test, expect } from "vitest";

describe("Test 反转链表", () => {
  test("Test Case 1", () => {
    const head = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(5))))
    );
    expect(reverseList(head)).toEqual(
      new ListNode(
        5,
        new ListNode(4, new ListNode(3, new ListNode(2, new ListNode(1))))
      )
    );
  });
});
