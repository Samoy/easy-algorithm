import {test, describe, expect} from "vitest";
import {plusOne} from "@/array/加一";

describe('Test 加一', () => {
    test('Test Case 1', () => {
        expect(plusOne([1, 2, 3])).toEqual([1, 2, 4])
    })
    test('Test Case 2', () => {
        expect(plusOne([4, 3, 2, 1])).toEqual([4, 3, 2, 2])
    })
    test('Test Case 3', () => {
        expect(plusOne([0])).toEqual([1])
    })
    test('Test Case 4', () => {
        expect(plusOne([9, 9, 9])).toEqual([1, 0, 0, 0])
    })
});