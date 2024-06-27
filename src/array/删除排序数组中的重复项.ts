/**
 * 给你一个 非严格递增排列 的数组 nums ，请你 原地 删除重复出现的元素，使每个元素 只出现一次 ，返回删除后数组的新长度。元素的 相对顺序 应该保持 一致 。
 * 然后返回 nums 中唯一元素的个数。
 * 考虑 nums 的唯一元素的数量为 k ，你需要做以下事情确保你的题解可以被通过：
 * 更改数组 nums ，使 nums 的前 k 个元素包含唯一元素，并按照它们最初在 nums 中出现的顺序排列。nums的其余元素与 nums 的大小不重要。
 * 返回 k。
 * @param nums
 */
export function removeDuplicates(nums: number[]): number {
    if (nums.length < 2) return nums.length;
    // 初始化左指针，用于指向已处理的唯一元素部分的最后一个位置
    let left = 0;

    // 使用右指针遍历数组
    for (let right = 1; right < nums.length; right++) {
        // 检查当前右指针指向的元素是否与左指针指向的元素不同（即是否为新唯一元素）
        if (nums[right] !== nums[left]) {
            // 若是新元素，则将其移至已处理的唯一元素部分，并将左指针后移
            nums[++left] = nums[right];
        }
    }

    // 左指针加1即为去重后数组的长度（因为左指针从0开始）
    return left + 1;
}