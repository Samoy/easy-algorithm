/**
 * 给定一个字符串 s ，找到 它的第一个不重复的字符，并返回它的索引 。如果不存在，则返回 -1 。
 * @param s
 */
export function firstUniqChar(s: string): number {
    const map: Record<string, number> = {};
    for (const e of s) {
        map[e] = (map[e] ?? 0) + 1
    }
    for (let i = 0; i < s.length; i++) {
        if (map[s[i]] === 1) return i;
    }
    return -1;
}