/**
 * 给定一个数组 nums，编写一个函数将所有 0 移动到数组的末尾，同时保持非零元素的相对顺序。
 *
 * 请注意 ，必须在不复制数组的情况下原地对数组进行操作。
 * @param nums
 */
export function moveZeroes(nums: number[]): void {
    let writeIndex = 0, i = 0;
    while (i < nums.length) {
        if (nums[i] !== 0) {
            nums[writeIndex++] = nums[i];
        }
        i++;
    }
    for (let i = writeIndex; i < nums.length; i++) {
        nums[i] = 0;
    }
}