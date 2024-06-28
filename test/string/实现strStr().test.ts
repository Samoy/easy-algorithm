import {describe, test, expect} from "vitest";
import {strStr} from "@/string/实现strStr()";

describe('Test 实现strStr()', () => {
    test('Test Case 1', () => {
        expect(strStr("sadbutsad", "sad")).toBe(0)
    })
    test('Test Case 2', () => {
        expect(strStr("leetcode", "leeto")).toBe(-1)
    })
})