module.exports = class DepthCalculator {
    calculateDepth(arr) {
        if (!Array.isArray(arr)) {
            return 0;
        } else {
            return arr.reduce((prev, val) => Math.max(this.calculateDepth(val), prev), 0) + 1;
        }
    }
};