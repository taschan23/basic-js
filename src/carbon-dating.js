const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

module.exports = function dateSample(sampleActivity) {
    if (typeof sampleActivity === 'string') {
        if (sampleActivity > 0 && sampleActivity <= MODERN_ACTIVITY) {
            let k = 0.693 / HALF_LIFE_PERIOD;
            return Math.ceil(Math.log(MODERN_ACTIVITY / sampleActivity) / k);
        }
    }

    return false;
};
