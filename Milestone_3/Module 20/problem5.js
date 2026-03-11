function analyzeText(str) {
    if (typeof str != 'string' || str.length == 0 || str.trim() == "") {
        return 'Invalid';
    }
    let s = str.split(" ");
    let l_word = s[0];
    for (let word of s) {
        if (word.length > l_word.length) {
            l_word = word;
        }
    }
    const tot_len = str.split(" ").join("");

    const output = {
        longwords: l_word,
        token: tot_len.length
    }
    return output;
}