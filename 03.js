function cocaCola(n) {
    return Array.from({ length: n }, (_, i) => {
        const num = i + 1;
        if (num % 15 === 0) return "cocaCola";
        if (num % 3 === 0) return "Coca";
        if (num % 5 === 0) return "Cola";
        return num;
    });
}

console.log(cocaCola(15));
