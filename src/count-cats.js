module.exports = function countCats(backyard) {
    let res = [];
    let count = 0;

    backyard.forEach(function (item, i) {
        res[i] = item.filter(test => test === '^^');
        count += res[i].length;
    });

    return count;
};
