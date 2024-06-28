/**
 * 给定两个字符串 s 和 t ，编写一个函数来判断 t 是否是 s 的字母异位词。
 *
 * 注意：若s 和 t中每个字符出现的次数都相同，则称s 和 t互为字母异位词。
 *
 * @param s
 * @param t
 */
export function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;
    const map: Record<string, number> = {};
    for (const c of s) {
        map[c] = (map[c] ?? 0) + 1
    }
    for (const c of t) {
        if (!map[c]) return false
        map[c] = map[c] - 1;
        if (map[c] === 0) {
            delete map[c]
        }
    }
    return Object.keys(map).length == 0
}