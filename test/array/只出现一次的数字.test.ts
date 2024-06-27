import {expect, test, describe} from "vitest";
import {singleNumber} from "@/array/只出现一次的数字";

describe('Test 只出现一次的数字', () => {
    test('Test Case 1', () => {
        const nums = [2, 2, 1];
        expect(singleNumber(nums)).toBe(1);
    });
    test('Test Case 2', () => {
        const nums = [4, 1, 2, 1, 2];
        expect(singleNumber(nums)).toBe(4);
    });
    test('Test Case 3', () => {
        const nums = [1];
        expect(singleNumber(nums)).toBe(1);
    });
});