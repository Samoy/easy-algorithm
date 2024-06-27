/**
 * 请你判断一个9 x 9 的数独是否有效。只需要 根据以下规则 ，验证已经填入的数字是否有效即可。
 *
 * 数字1-9在每一行只能出现一次。
 * 数字1-9在每一列只能出现一次。
 * 数字1-9在每一个以粗实线分隔的3x3宫内只能出现一次。（请参考示例图）
 * 注意：
 * 一个有效的数独（部分已被填充）不一定是可解的。
 * 只需要根据以上规则，验证已经填入的数字是否有效即可。
 * 空白格用'.'表示。
 *
 * @param board 棋盘
 */
export function isValidSudoku(board: string[][]): boolean {
    for (let i = 0; i < board.length; i++) {
        const rowSet = new Set<string>();
        for (let j = 0; j < board[i].length; j++) {
            // 判断九宫格是否有重复
            if (i % 3 == 0 && j % 3 == 0 && isExistDuplicateAtGrid(board, [i, j])) {
                return false
            }
            // 判断行是否有重复
            const element = board[i][j]
            if (element === ".") continue;
            if (rowSet.has(element)) return false;
            rowSet.add(element);
        }
    }
    // 判断列是否重复
    for (let i = 0; i < board[0].length; i++) {
        const columnSet = new Set<string>();
        for (let j = 0; j < board.length; j++) {
            const element = board[j][i];
            if (element === ".") continue;
            if (columnSet.has(element)) return false;
            columnSet.add(element);
        }
    }
    return true;
}

function isExistDuplicateAtGrid(board: string[][], position: [number, number]): boolean {
    const [x, y] = position;
    const set = new Set<string>();
    for (let i = x; i < x + 3; i++) {
        for (let j = y; j < y + 3; j++) {
            const element = board[i][j];
            if (element === ".") continue;
            if (set.has(element)) return true;
            set.add(element);
        }
    }
    return false;
}