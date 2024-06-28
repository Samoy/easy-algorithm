import {test, describe, expect} from "vitest";
import {longestCommonPrefix} from "@/string/最长公共前缀";

describe('Test 最长公共前缀', () => {
    test('Test Case 1', () => {
        expect(longestCommonPrefix(["flower", "flow", "flight"])).toBe("fl")
    })
    test('Test Case 2', () => {
        expect(longestCommonPrefix(["dog", "racecar", "car"])).toBe("")
    })
});