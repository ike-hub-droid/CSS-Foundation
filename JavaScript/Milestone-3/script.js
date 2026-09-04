const products = [
    { name: "Laptop", price: 1200 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 300 },
    { name: "Webcam", price: 50 }
];

for (let i = 0; i < products.length; i++) {
    console.log(products[i].name);
}

const productNames = products.map(product => product.name);
console.log(productNames);

const affordableProducts = products.filter(product => product.price < 100);
console.log(affordableProducts);

products.forEach(function(product) {
    console.log(`${product.name} costs $${product.price}`);
});
