import {describe, expect, test} from "vitest";
import {isPalindrome} from "@/string/验证回文串";

describe('Test 字符串中的第一个唯一字符', () => {
    test('Test Case 1', () => {
        expect(isPalindrome('A man, a plan, a canal: Panama')).toBeTruthy()
    })
    test('Test Case 2', () => {
        expect(isPalindrome('race a car')).toBeFalsy()
    })
    test('Test Case 3', () => {
        expect(isPalindrome(' ')).toBeTruthy()
    })
});