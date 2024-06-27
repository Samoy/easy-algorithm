/**
 * 给定一个 n×n 的二维矩阵matrix 表示一个图像。请你将图像顺时针旋转 90 度。
 *
 * 你必须在 原地 旋转图像，这意味着你需要直接修改输入的二维矩阵。请不要 使用另一个矩阵来旋转图像。
 * @param matrix
 */
export function rotate(matrix: number[][]): void {
    // 水平翻转
    const n = matrix.length;
    for (let i = 0; i < n / 2; i++) {
        [matrix[i], matrix[n - i - 1]] = [matrix[n - i - 1], matrix[i]]
    }
    // 主对角线翻转
    for (let i = 0; i < n; i++) {
        for (let j = i + 1; j < n; j++) {
            [matrix[i][j], matrix[j][i]] = [matrix[j][i], matrix[i][j]]
        }
    }
}