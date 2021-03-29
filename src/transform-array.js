module.exports = function transform(arr) {
    let res = [];
    const actions = [
        '--discard-next',
        '--discard-prev',
        '--double-next',
        '--double-prev'
    ];

    if (!Array.isArray(arr)) {
        throw new Error("THROWN");
    }

    let notWrite = 0;

    arr.map(function (item, i, array) {
        if (actions.includes(item)) {
            let next = array[i + 1];
            let prev = array[i - 1];

            if (item === '--discard-prev') {
                if (!actions.includes(prev)) {
                    res.pop(res.length);
                    res.push(item);
                }
            } else if (item === '--discard-next') {
                res.push(item);
                if (!actions.includes(next)) {
                    notWrite = 1;
                }
            } else if (item === '--double-next') {
                if (!actions.includes(next)) {
                    res.push(item);
                    if (next !== undefined) {
                        res.push(array[i + 1]);
                    }
                }
            } else if (item === '--double-prev') {
                if (!actions.includes(prev)) {
                    if (res[res.length - 1] !== undefined) {
                        res.push(res[res.length - 1]);
                        res.push(item);
                    }
                }
            }

        } else {
            if (notWrite === 0) {
                res.push(item);
            } else {
                notWrite = 0;
            }

        }

    });

    res = res.filter((item) => !actions.includes(item));

    return res;
};
