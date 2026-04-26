import ProductCard from '@/Components/ProductCard';
import React from 'react';

const getProducts = async () => {
    const res = await fetch('http://localhost:5003/products', { next: { revalidate: 10 } });
    return res.json();
}
const ProductsPage = async () => {
    const products = await getProducts();
    return (
        <div>
            <h2>Products: {products.length} </h2>
            <div className='grid grid-cols-4 justify-items-center gap-4'>
                {
                    products.map(product => <ProductCard key={product.id} product={product} ></ProductCard>)
                }
            </div>
        </div>
    );
};

export default ProductsPage;