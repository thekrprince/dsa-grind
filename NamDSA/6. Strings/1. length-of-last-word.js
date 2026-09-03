// LC 58. Length of Last Word

function lengthOfLastWord(s) {
    let lastWordLength = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] !== " ") {
            lastWordLength++;
        } else if (s[i] === " " && lastWordLength === 0) {
            continue;
        } else {
            break;
        }
    }
    console.log(lastWordLength);
}

lengthOfLastWord("Hello World");
lengthOfLastWord("   fly me   to   the moon  ");
lengthOfLastWord("luffy is still joyboy");