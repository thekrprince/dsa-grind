// LC 3541. Find Most Frequent Vowel and Consonant

var maxFreqSum = function (s) {
    const vow = {};
    const cons = {};
    let maxVow = 0;
    let maxCons = 0;

    for (let ch of s) {
        if (ch === 'a' || ch === 'e' || ch === 'i' || ch === 'o' || ch === 'u') {
            vow[ch] = (vow[ch] || 0) + 1;
            maxVow = Math.max(maxVow, vow[ch]);
        } else {
            cons[ch] = (cons[ch] || 0) + 1;
            maxCons = Math.max(maxCons, cons[ch]);
        }
    }

    console.log(maxCons + maxVow);
};

maxFreqSum("successes");
maxFreqSum("aeiaeia");