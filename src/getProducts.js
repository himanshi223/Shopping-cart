const getProducts = async ()=>{
    const result = await fetch("https://fakestoreapi.com/products");
    const products = await result.json();
    return products;
}

export default getProducts;