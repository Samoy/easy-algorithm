/**
 * 给你两个整数数组nums1 和 nums2 ，请你以数组形式返回两数组的交集。返回结果中每个元素出现的次数，
 * 应与元素在两个数组中都出现的次数一致（如果出现次数不一致，则考虑取较小值）。可以不考虑输出结果的顺序。
 * @param nums1
 * @param nums2
 */
export function intersect(nums1: number[], nums2: number[]): number[] {
    // 定义一个map，key存数组中元素，value存其出现的次数
    let map = new Map<number, number>();
    for (const ele of nums1) {
        map.set(ele, (map.get(ele) ?? 0) + 1)
    }
    const arr = [];
    for (const ele of nums2) {
        const value = map.get(ele);
        // 每出现一次，就将元素放到数组中，并将计数减一
        if (map.has(ele) && value > 0) {
            arr.push(ele);
            map.set(ele, value - 1);
        }
    }
    return arr;
}