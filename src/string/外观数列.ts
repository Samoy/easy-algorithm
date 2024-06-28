/**
 * 「外观数列」是一个数位字符串序列，由递归公式定义：
 *    1. countAndSay(1) = "1"
 *    2. countAndSay(n) 是countAndSay(n-1) 的行程长度编码。
 * 行程长度编码（RLE）是一种字符串压缩方法，其工作原理是通过将连续相同字符（重复两次或更多次）替换为字符重复次数（运行长度）和字符的串联。
 * 例如，要压缩字符串"3322251"，我们将"33"用"23"替换，将"222"用"32"替换，将"5"用"15"替换并将"1"用"11"替换。因此压缩后字符串变为 "23321511"。
 *
 * @param n
 */
export function countAndSay(n: number): string {
    let ans = '1'
    let i = 2;
    while (i <= n) {
        let j = 1, cnt = 1, prev = ans[0], s = '';
        while (j < ans.length) {
            if (ans[j] === prev) {
                cnt++;
            } else {
                s += `${cnt}${prev}`;
                prev = ans[j];
                cnt = 1;
            }
            j++;
        }
        s += `${cnt}${prev}`
        ans = s;
        i++;
    }
    return ans;
}