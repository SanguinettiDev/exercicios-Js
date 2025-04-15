function fizzBuzz(n) {
    return Array.from({ length: n }, (_, i) => {
        const num = i + 1;
        if (num % 15 === 0) return "FizzBuzz";
        if (num % 3 === 0) return "Fizz";
        if (num % 5 === 0) return "Buzz";
        return num;
    });
}

console.log(fizzBuzz(15));
// Saída: [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz"]
