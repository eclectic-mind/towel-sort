// You should implement your task here.

module.exports = function towelSort(matrix) {
    let result = [];
    if (towelSort.arguments.length === 0 || matrix.length === 0) {
        return [];
    }
    const simplyAdd = (res, element) => {
        res.push(element);
    };
    const addReversed = (res, element) => {
        res.push(element.reverse());
    };
    for (let i = 0; i < matrix.length; i += 1) {
        if (i % 2 === 0) {
            simplyAdd(result, matrix[i]);
        } else {
            addReversed(result, matrix[i]);
        }
    }
    console.log(result);
    return result.flat();
};
