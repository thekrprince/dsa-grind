// LC 278 - First Bad Version

var solution = function (isBadVersion) {
    return function (n) {
        let low = 1;
        let high = n;

        while (low < high) {
            const mid = Math.floor((low + high) / 2);
            const isBadV = isBadVersion(mid);

            if (isBadV) {
                high = mid;
            } else {
                low = mid + 1;
            }
        }
        return high;
    };
};

const FIRST_BAD_VERSION = 3;
function isBadVersion(version) {
    return version >= FIRST_BAD_VERSION;
}

const findFirstBadVersion = solution(isBadVersion);

const totalVersions = 5;
console.log(findFirstBadVersion(5));