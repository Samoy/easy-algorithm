import {expect, describe, test} from "vitest";
import {twoSum} from "@/array/两数之和";

describe('Test 两数之和', () => {
    test('Test Case 1', () => {
        expect(twoSum([2, 7, 11, 15], 9)).toEqual([0, 1])
    })
    test('Test Case 2', () => {
        expect(twoSum([3, 2, 4], 6)).toEqual([1, 2])
    })
    test('Test Case 3', () => {
        expect(twoSum([3, 3], 6)).toEqual([0, 1])
    })
})