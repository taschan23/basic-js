module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
    let result = {};
    result['turns'] = Math.pow(2, disksNumber) - 1;
    result['seconds'] = Math.floor(1 / (turnsSpeed / 3600) * result['turns']);

    return result;
};
