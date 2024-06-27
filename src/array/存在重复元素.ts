/**
 * 给你一个整数数组 nums 。如果任一值在数组中出现 至少两次 ，返回 true ；如果数组中每个元素互不相同，返回 false 。
 * @param nums
 */
export function containsDuplicate(nums: number[]): boolean {
    const set = new Set<number>();
    for (const ele of nums) {
        if (set.has(ele)) return true;
        set.add(ele);
    }
    return false;
}