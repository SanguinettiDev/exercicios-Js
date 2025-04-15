async function fetchProductData(id) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (id < 1) {
                reject(new Error("ID do produto inválido"));
            } else {
                resolve({ id: id, nome: "Notebook", preco: 3500 });
            }
        }, 2000);
    });
}

// Testing with try/catch
async function testFetchProductData(id) {
    try {
        const result = await fetchProductData(id);
        console.log(result);
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}

// Example usage
testFetchProductData(101); // Output after 2s: { id: 101, nome: "Notebook", preco: 3500 }
testFetchProductData(-1);  // Output after 2s: Erro: ID do produto inválido