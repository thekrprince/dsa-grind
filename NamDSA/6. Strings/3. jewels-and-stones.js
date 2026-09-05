// LC 771. Jewels and Stones

function numJewelsInStones(jewels, stones) {
    let jewelCount = 0;
    let set = new Set(jewels);

    for (let i = 0; i < stones.length; i++) {
        if (set.has(stones[i])) {
            jewelCount++;
        }
    }

    console.log(jewelCount);
}

numJewelsInStones("aA", "aAAbbbb");
numJewelsInStones("z", "ZZ");
numJewelsInStones("bC", "bcCABGZCCb");