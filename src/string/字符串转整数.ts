/**
 * 请你来实现一个myAtoi(string s)函数，使其能将字符串转换成一个 32 位有符号整数。
 *
 * 函数myAtoi(string s) 的算法如下：
 *
 * 空格：读入字符串并丢弃无用的前导空格（" "）
 * 符号：检查下一个字符（假设还未到字符末尾）为'-' 还是 '+'。如果两者都不存在，则假定结果为正。
 * 转换：通过跳过前置零来读取该整数，直到遇到非数字字符或到达字符串的结尾。如果没有读取数字，则结果为0。
 * 舍入：如果整数数超过 32 位有符号整数范围 [−2^31, 2^31− 1] ，需要截断这个整数，使其保持在这个范围内。
 * 具体来说，小于 −2^31 的整数应该被舍入为 −2^31 ，大于 2^31− 1 的整数应该被舍入为 2^31− 1 。
 * 返回整数作为最终结果。
 *
 * @param s
 */
export function myAtoi(s: string): number {
    let ans = 0, positive = true
    const normalS = s.trimStart();
    const minInt = -(2 ** 31)
    const maxInt = 2 ** 31 - 1
    for (let i = 0; i < normalS.length; i++) {
        const element = normalS[i];
        if (i === 0) {
            if (element === '-') {
                positive = false;
                continue;
            } else if (element === '+') {
                positive = true;
                continue;
            }
        }
        if (isNaN(Number(element)) || element == ' ') {
            break;
        }
        ans = ans * 10 + Number(element)
    }
    if (positive) {
        return Math.min(ans, maxInt)
    }
    return Math.max(-ans, minInt)
}