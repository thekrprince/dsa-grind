// LC 74 - Search a 2D Matrix

function searchMatrix(matrix, target) {
    let i = 0;
    let j = matrix[0].length - 1;

    while (i <= matrix.length - 1 && j >= 0) {
        if (matrix[i][j] === target) {
            return true;
        } else if (matrix[i][j] < target) {
            i++;
        } else {
            j--;
        }
    }

    return false;
}

let matrix = [[1, 3, 5, 7], [10, 11, 16, 20], [23, 30, 34, 60]];

console.log(searchMatrix(matrix, 3));
console.log(searchMatrix(matrix, 18));