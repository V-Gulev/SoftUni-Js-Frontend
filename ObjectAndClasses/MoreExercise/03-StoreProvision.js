function solve(currentStockInput, orderedStockInput) {
    
    const currentStock = getStockInfo(currentStockInput);
    const orderedStock = getStockInfo(orderedStockInput);
    
    addProductsToStore(currentStock, orderedStock);
    printStockInfo(currentStock);

    function getStockInfo(input) {
        let result = {};

        for (let i = 0; i < input.length; i+=2) {
            const product = input[i];
            const quantity = Number(input[i + 1]);

            result[product] = quantity;
        }

        return result;
    }

    function addProductsToStore(currentStock, orderedStock) {
        for (let product in orderedStock) {
            if (currentStock.hasOwnProperty(product)) {
                currentStock[product] += orderedStock[product];
            } else {
                currentStock[product] = orderedStock[product];
            }
        }
    }

    function printStockInfo(currentStock) {
        for (let product in currentStock) {
            console.log(`${product} -> ${currentStock[product]}`);
        }
    }
}

solve(['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],
['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']);