function groupWordsByLength(words) {
    return words.reduce((acc, word) => {
        const length = word.length;
        acc[length] = acc[length] || [];
        acc[length].push(word);
        return acc;
    }, {});
}

const words = ["maçã", "banana", "pêra", "kiwi", "uva"];
console.log(groupWordsByLength(words));
