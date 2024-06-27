import {removeDuplicates} from "@/array/删除排序数组中的重复项";
import {test, describe, expect} from "vitest";

describe("Test 删除排序数组中的重复项", () => {
    test("Test Case 1", () => {
        const nums = [1, 1, 2];
        const k = removeDuplicates(nums);
        const expectedNums = [1, 2];
        expect(k).toBe(2);
        for (let i = 0; i < k; i++) {
            expect(nums[i]).toBe(expectedNums[i])
        }
    });
    test("Test Case 2", () => {
        const nums = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4, 4];
        const expectedNums = [0, 1, 2, 3, 4];
        const k = removeDuplicates(nums);
        for (let i = 0; i < k; i++) {
            expect(nums[i]).toBe(expectedNums[i])
        }
    });
    test('Test Case 3', () => {
        const nums = [0];
        const expectedNums = [0];
        const k = removeDuplicates(nums);
        for (let i = 0; i < k; i++) {
            expect(nums[i]).toBe(expectedNums[i]);
        }
    })
});
