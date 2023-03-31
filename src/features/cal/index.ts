/**
 * 引数の合計を返す
 */
export const sum = (...a: number[]) => a.reduce((acc, val) => acc + val, 0);
