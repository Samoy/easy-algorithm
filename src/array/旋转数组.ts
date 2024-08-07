/**
 * 给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
 * @param nums
 * @param k
 */
export function rotate(nums: number[], k: number): void {
    const n = nums.length
    const arr = nums.splice(n - k % n)
    nums.unshift(...arr)
}