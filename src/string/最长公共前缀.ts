/**
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 *
 * 如果不存在公共前缀，返回空字符串 ""。
 * @param strs
 */
export function longestCommonPrefix(strs: string[]): string {
    if (strs.length === 0) return '';
    let ans = '';
    for (let i = 0; i < strs[0].length; i++) {
        const c = strs[0][i];
        for (let j = 1; j < strs.length; j++) {
            // 检查当前字符是否在所有字符串的相同位置上都相同
            if (i >= strs[j].length || c !== strs[j][i]) {
                // 一旦发现不匹配，直接返回已找到的公共前缀
                return ans;
            }
        }
        // 所有字符串在该位置的字符都相同，将该字符加入答案
        ans += c;
    }
    return ans;
}
