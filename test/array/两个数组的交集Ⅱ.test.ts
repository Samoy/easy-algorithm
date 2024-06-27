import {describe, expect, test} from "vitest";
import {intersect} from "@/array/两个数组的交集Ⅱ";

describe('Test 两个数组的交集Ⅱ', () => {
    test('Test Case 1', () => {
        expect(intersect([1, 2, 2, 1], [2, 2])).toEqual([2, 2])
    })
    test('Test Case 2', () => {
        const arr = intersect([4, 9, 5], [9, 4, 9, 8, 4]);
        expect(arr).toContainEqual(4);
        expect(arr).toContainEqual(9);
    })
});