import {test, describe, expect} from "vitest";
import {maxProfit} from "@/array/买卖股票的最佳时机II";

describe('Test 买卖股票的最佳时机 II', () => {
    test('Test Case 1', () => {
        const prices = [7, 1, 5, 3, 6, 4]
        expect(maxProfit(prices)).toBe(7)
    })
    test('Test Case 2', () => {
        const prices = [1, 2, 3, 4, 5]
        expect(maxProfit(prices)).toBe(4)
    })
    test('Test Case 3', () => {
        const prices = [7, 6, 4, 3, 1]
        expect(maxProfit(prices)).toBe(0)
    })
})