import { ListNode } from "@/common/node";
import { isPalindrome } from "@/linkedlist/回文链表";
import { describe, test, expect } from "vitest";

describe("Test 回文链表", () => {
  test("Test Case 1", () => {
    const listNode = new ListNode(
      1,
      new ListNode(2, new ListNode(2, new ListNode(1)))
    );
    expect(isPalindrome(listNode)).toBe(true);
  });
  test("Test Case 2", () => {
    const listNode = new ListNode(
      1,
      new ListNode(2, new ListNode(3, new ListNode(2)))
    );
    expect(isPalindrome(listNode)).toBe(false);
  });
});
