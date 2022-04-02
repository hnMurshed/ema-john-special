import React, { useEffect, useState } from 'react';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [addedProducts, addProduct] = useState([]);

    useEffect(() => {
        fetch('products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    const handleAddToCard = product => {
        addProduct([...addedProducts, product]);
    }
    
    return (
        <div className="gap-5 container mx-auto products-container">
            <div className="products basis-3/4 grid grid-cols-3 gap-4">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }
            </div>
            <div className="order-sumamry basis-1/4 px-5">
                <div className="sticky top-0 pt-[120px]">
                    <h2 className='text-2xl font-bold text-center'>Order Sumary</h2>
                    <Card
                        addedProducts={addedProducts}
                    ></Card>
                </div>
            </div>
        </div>
    );
};

export default Shop;