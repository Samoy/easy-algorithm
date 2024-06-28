import {describe, expect, test} from "vitest";
import {myAtoi} from "@/string/字符串转整数";

describe('Test 字符串转整数', () => {
    test('Test Case 1', () => {
        expect(myAtoi("42")).toBe(42)
    })
    test('Test Case 2', () => {
        expect(myAtoi("-042")).toBe(-42)
    })
    test('Test Case 3', () => {
        expect(myAtoi("1337c0d3")).toBe(1337)
    })
    test('Test Case 4', () => {
        expect(myAtoi("0-1")).toBe(0)
    })
    test('Test Case 5', () => {
        expect(myAtoi("words and 987")).toBe(0)
    })
});