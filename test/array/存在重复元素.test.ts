import {describe, expect, test} from "vitest";
import {containsDuplicate} from "@/array/存在重复元素";

describe("Test 存在重复元素", () => {
    test("Test Case 1", () => {
        const nums = [1, 2, 3, 1];
        expect(containsDuplicate(nums)).toBeTruthy();
    });
    test("Test Case 2", () => {
        const nums = [1, 2, 3, 4];
        expect(containsDuplicate(nums)).toBeFalsy();
    });
    test('Test Case 3', () => {
        const nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2];
        expect(containsDuplicate(nums)).toBeTruthy();
    })
});