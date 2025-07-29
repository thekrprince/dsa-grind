// LC 49 - Group Anagrams

function groupAnagrams(strs) {
    const grouped = {};

    for(let str of strs) {
        const sorted = str.split("").sort().join("");

        if(grouped[sorted]) {
            grouped[sorted].push(str);
        } else {
            grouped[sorted] = [str];
        }
        
    }

    return Object.values(grouped);
}

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]));