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


async function testFetchProductData(id) {
    try {
        const result = await fetchProductData(id);
        console.log(result);
    } catch (error) {
        console.log(`Erro: ${error.message}`);
    }
}


testFetchProductData(101); 
testFetchProductData(-1);  
