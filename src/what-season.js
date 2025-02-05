module.exports = function getSeason(date) {

    if (typeof date === 'undefined') {
        return "Unable to determine the time of year!";
    }

    if (typeof date !== 'object') {
        throw new Error("THROWN");
    }

    let month = date.getMonth();

    if (date.setUTCDate()) {
        throw new Error("THROWN");
    }

    if (month >= 2 && month <= 4) {
        return "spring";
    } else if (month >= 5 && month <= 7) {
        return "summer";
    } else if (month >= 8 && month <= 10) {
        return "autumn";
    } else {
        return "winter";
    }
};
