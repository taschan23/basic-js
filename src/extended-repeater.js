module.exports = function repeater(str, options) {
    let res = [];
    let add = [];

    if (typeof options.separator === 'undefined') {
        options.separator = '+';
    }
    if (typeof options.repeatTimes === 'undefined') {
        options.repeatTimes = 1;
    }
    if (typeof options.additionRepeatTimes === 'undefined') {
        options.additionRepeatTimes = 1;
    }
    if (typeof options.addition === 'undefined') {
        options.addition = '';
    }
    if (options.addition === null) {
        options.addition = 'null';
    }
    if (typeof options.additionSeparator === 'undefined') {
        options.additionSeparator = "|";
    }

    for (let i = 0; i < options.additionRepeatTimes; i++) {
        add.push(options.addition);
    }
    for (let j = 0; j < options.repeatTimes; j++) {
        res.push(str + add.join(options.additionSeparator));
    }

    return res.join(options.separator);
};
  