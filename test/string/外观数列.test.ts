import {describe, expect, test} from "vitest";
import {countAndSay} from "@/string/外观数列";

describe('Test 外观数列', () => {
    test('Test Case 1', () => {
        const results = ["1", "11", "21", "1211", "111221"];
        for (let i = 0; i < results.length; i++) {
            expect(countAndSay(i + 1)).toBe(results[i])
        }
    })
});