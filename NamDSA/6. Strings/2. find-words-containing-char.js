// LC 2942. Find Words Containing Character

function findWordsContaining(words, x) {
    let res = [];

    for (let i = 0; i < words.length; i++) {
        for (let j = 0; j < words[i].length; j++) {
            if (words[i][j] === x) {
                res.push(i);
                break;
            }
        }
    }

    console.log(res);
}

findWordsContaining(["leet", "code"], "e");
findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "a");
findWordsContaining(["abc", "bcd", "aaaa", "cbc"], "z");