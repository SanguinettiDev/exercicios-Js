function somaDeQuadrados(nums) {
    return nums
        .map(num => num * num)
        .reduce((acc, square) => acc + square, 0);
}

const nums = [1, 2, 3, 4];
console.log(somaDeQuadrados(nums)); 
