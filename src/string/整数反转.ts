/**
 * 给你一个 32 位的有符号整数 x ，返回将 x 中的数字部分反转后的结果。
 *
 * 如果反转后整数超过 32 位的有符号整数的范围[−2^31, 2^31− 1] ，就返回 0。
 *
 * 假设环境不允许存储 64 位整数（有符号或无符号）。
 *
 * @param x
 */
export function reverse(x: number): number {
    let ans = 0;
    while (x !== 0) {
        const digit = x % 10;
        ans = ans * 10 + digit;
        x = ~~(x / 10);
        if (ans > Math.pow(2, 31) - 1 || ans < Math.pow(-2, 31)) {
            return 0;
        }
    }
    return ans;
}