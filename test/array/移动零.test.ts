import {describe, expect, test} from "vitest";
import {moveZeroes} from "@/array/移动零";

describe('Test 移动零', () => {
    test('Test Case 1', () => {
        const nums = [0, 1, 0, 3, 12];
        moveZeroes(nums);
        expect(nums).toEqual([1, 3, 12, 0, 0]);
    });
    test('Test Case 2', () => {
        const nums = [0];
        moveZeroes(nums);
        expect(nums).toEqual([0]);
    });
});