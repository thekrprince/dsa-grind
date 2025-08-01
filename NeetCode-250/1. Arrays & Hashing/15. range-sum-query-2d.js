// LC 304 - Range Sum Query 2D - Immutable

class NumMatrix {

    constructor(matrix) {
        this.num = matrix;
    }

    sumRegion(row1, col1, row2, col2) {
        let sum = 0;

        for (let i = row1; i <= row2; i++) {
            for (let j = col1; j <= col2; j++) {
                sum += this.num[i][j];
            }
        }

        console.log(sum);
    }
}

const numMatrix = new NumMatrix([[3, 0, 1, 4, 2], [5, 6, 3, 2, 1], [1, 2, 0, 1, 5], [4, 1, 0, 1, 7], [1, 0, 3, 0, 5]]);
numMatrix.sumRegion(2, 1, 4, 3);
numMatrix.sumRegion(1, 1, 2, 2);
numMatrix.sumRegion(1, 2, 2, 4);