// You should implement your task here.

module.exports = function towelSort(matrix) {
    let res = [];

    if (Array.isArray(matrix)) {
        for (let i = 1; i < matrix.length; i = i + 2) {
            matrix[i].reverse();
        }
        for (let k = 0; k < matrix.length; k++) {
            res = res.concat(matrix[k]);
        }
    }
    return res;
};
