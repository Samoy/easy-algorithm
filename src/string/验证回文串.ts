/**
 * 如果在将所有大写字符转换为小写字符、并移除所有非字母数字字符之后，短语正着读和反着读都一样。则可以认为该短语是一个 回文串 。
 *
 * 字母和数字都属于字母数字字符。
 *
 * 给你一个字符串 s，如果它是 回文串 ，返回 true ；否则，返回 false 。
 *
 * @param s
 */
export function isPalindrome(s: string): boolean {
    const regexStr = s.replace(/[^\dA-Za-z]/ig, '')
    if (regexStr.length <= 1) return true;
    let i = 0, j = regexStr.length - 1;
    while (i < j) {
        if (regexStr[i].toLowerCase() !== regexStr[j].toLowerCase()) return false;
        i++;
        j--;
    }
    return true;
}