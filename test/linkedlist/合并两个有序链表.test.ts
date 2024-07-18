import { ListNode } from "@/common/node";
import { mergeTwoLists } from "@/linkedlist/合并两个有序链表";
import { describe, test, expect } from "vitest";

describe("Test 合并两个有序列表", () => {
  test("Test Case 1", () => {
    expect(
      mergeTwoLists(
        new ListNode(1, new ListNode(2, new ListNode(4))),
        new ListNode(1, new ListNode(3, new ListNode(4)))
      )
    ).toEqual(
      new ListNode(
        1,
        new ListNode(
          1,
          new ListNode(2, new ListNode(3, new ListNode(4, new ListNode(4))))
        )
      )
    );
  });
});
