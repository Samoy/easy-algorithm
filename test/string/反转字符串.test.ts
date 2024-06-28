import {describe, test, expect} from "vitest";
import {reverseString} from "@/string/反转字符串";

describe('Test 反转字符串', () => {
    test('Test Case 1', () => {
        const s = ["h", "e", "l", "l", "o"];
        reverseString(s)
        expect(s).toEqual(["o", "l", "l", "e", "h"])
    })
    test('Test Case 2', () => {
        const s = ["H", "a", "n", "n", "a", "h"]
        reverseString(s)
        expect(s).toEqual(["h", "a", "n", "n", "a", "H"])
    })
})