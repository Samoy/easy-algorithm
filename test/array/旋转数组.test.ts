import {describe, expect, test} from "vitest";
import {rotate} from "@/array/旋转数组";

describe("Test 旋转数组", () => {
    test("Test Case 1", () => {
        const nums = [1, 2, 3, 4, 5, 6, 7];
        rotate(nums, 3);
        expect(nums).toEqual([5, 6, 7, 1, 2, 3, 4]);
    });
    test("Test Case 2", () => {
        const nums = [-1, -100, 3, 99];
        rotate(nums, 2);
        expect(nums).toEqual([3, 99, -1, -100]);
    });
    test('Test Case 3', () => {
        const nums = [1, 2];
        rotate(nums, 5);
        expect(nums).toEqual([2, 1]);
    })
});