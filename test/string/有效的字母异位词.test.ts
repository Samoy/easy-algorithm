import {describe, expect, test} from "vitest";
import {isAnagram} from "@/string/有效的字母异位词";

describe('Test 有效的字母异位词', () => {
    test('Test Case 1', () => {
        expect(isAnagram("anagram", "nagaram")).toBeTruthy()
    })
    test('Test Case 2', () => {
        expect(isAnagram("rat", "car")).toBeFalsy()
    })
    test('Test Case 3', () => {
        expect(isAnagram("rat", "ca")).toBeFalsy()
    })
    test('Test Case 4', () => {
        expect(isAnagram("ra", "car")).toBeFalsy()
    })
});