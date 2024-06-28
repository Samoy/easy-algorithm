import {describe, expect, test} from "vitest";
import {firstUniqChar} from "@/string/字符串中的第一个唯一字符";

describe('Test 字符串中的第一个唯一字符', () => {
    test('Test Case 1', () => {
        expect(firstUniqChar('leetcode')).toBe(0)
    })
    test('Test Case 2', () => {
        expect(firstUniqChar('loveleetcode')).toBe(2)
    })
    test('Test Case 3', () => {
        expect(firstUniqChar('aabb')).toBe(-1)
    })
});