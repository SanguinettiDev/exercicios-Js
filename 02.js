function groupWordsByLength(words) {
    return words.reduce((acc, word) => {
        const length = word.length;
        acc[length] = acc[length] || [];
        acc[length].push(word);
        return acc;
    }, {});
}

const words = ["apple", "banana", "pear", "kiwi", "grape"];
console.log(groupWordsByLength(words));
