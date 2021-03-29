const chainMaker = {
    res: [],
    getLength() {
        return this.res.length;
    },
    addLink(value) {
        if (value !== undefined) {
            this.res.push(value);
            return this;
        } else {
            this.res.push('( )');
            return this;
        }
    },
    removeLink(position) {
        if (position >= 0) {
            this.res.splice(position - 1, 1);
            return this;
        } else {
            this.res = [];
            throw new Error('THROWN');
        }
    },
    reverseChain() {
        this.res.reverse();
        return this;
    },
    finishChain() {
        let ret = this.res.map(item => `( ${item} )`);
        this.res = [];
        return ret.join('~~');
    },
};

module.exports = chainMaker;
