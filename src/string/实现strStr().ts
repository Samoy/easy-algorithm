/**
 * 给你两个字符串haystack 和 needle ，请你在 haystack 字符串中找出 needle 字符串的第一个匹配项的下标（下标从 0 开始）。
 * 如果needle 不是 haystack 的一部分，则返回 -1 。
 *
 * @param haystack
 * @param needle
 */
export function strStr(haystack: string, needle: string): number {
    if (!needle) return 0;
    const failureTable = buildFailureTable(needle);
    let j = 0;
    for (let i = 0; i < haystack.length; i++) {
        while (j > 0 && haystack[i] !== needle[j]) {
            j = failureTable[j - 1];
        }
        if (haystack[i] === needle[j]) {
            j++;
        }
        if (j === needle.length) {
            return i - needle.length + 1;
        }
    }
    return -1;
}


function buildFailureTable(pattern: string): number[] {
    const table: number[] = new Array(pattern.length).fill(0);
    let j = 0;
    for (let i = 1; i < pattern.length; i++) {
        while (j > 0 && pattern[j] !== pattern[i]) {
            j = table[j - 1];
        }
        if (pattern[j] === pattern[i]) {
            j++;
        }
        table[i] = j;
    }
    return table;
}
