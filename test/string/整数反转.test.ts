import {describe, test, expect} from "vitest";
import {reverse} from "@/string/整数反转";

describe('Test 整数反转', () => {
    test('Test Case 1', () => {
        expect(reverse(123)).toBe(321);
    })
    test('Test Case 2', () => {
        expect(reverse(-123)).toBe(-321);
    })
    test('Test Case 3', () => {
        expect(reverse(120)).toBe(21);
    })
    test('Test Case 4', () => {
        expect(reverse(0)).toBe(0);
    })
    test('Test Case 5', () => {
        expect(reverse(1534236469)).toBe(0)
    })
    test('Test Case 6', () => {
        expect(reverse(-1534236469)).toBe(0)
    })
})