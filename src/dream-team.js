module.exports = function createDreamTeam(members) {
    if (Array.isArray(members)) {
        let res = [];
        members.forEach(function (member) {
            if (typeof member !== 'string') {
                return false;
            }

            res.push(member.trim().charAt(0).toUpperCase());
        });

        return res.sort().join('');
    } else {
        return false;
    }
}
;
