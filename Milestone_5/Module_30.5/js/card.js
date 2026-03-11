const handleAddProduct = () => {
    const productElement = document.getElementById('product');
    const quantityElement = document.getElementById('quantity');
    const product = productElement.value;
    const quantity = parseInt(quantityElement.value);
    // console.log('product add', product, quantity);
    displayProduct(product, quantity);
    addProductToCart(product, quantity);
    productElement.value = ""
    quantityElement.value = ""
}
const getCart = () => {
    let cart = {};
    const cartJSON = localStorage.getItem('cart');
    if(cartJSON)
    {
        cart = JSON.parse(cartJSON);
    }
    return cart;
} 
const addProductToCart = (product, quantitiy) => {
    const cart = getCart();
    if(cart[product])
    {
        cart[product] = cart[product] + quantitiy;
    }
    else
    {
        cart[product] = quantitiy;
    }
    
    const cartJSON = JSON.stringify(cart);
    localStorage.setItem('cart', cartJSON);
    console.log(cartJSON);
    
}
const displayProduct = (product, quantity) => {
    const li = document.createElement('li');
    li.innerText = `${product} : ${quantity}`;

    const productContainer = document.getElementById('products-container');
    productContainer.appendChild(li);
}
const displayStoredProducts = () => {
    const cart = getCart();
    for(const product in cart){
        const quantitiy = cart[product];
        // console.log(product, quantitiy);
    displayProduct(product, quantitiy); 
    }
}
displayStoredProducts();
// to save object/array in the local storage
// 1. convert object/array into JSON string by using JSON.stringify()