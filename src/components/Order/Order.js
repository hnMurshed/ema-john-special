import React from 'react';
import useProducts from '../../hook/useProducts';

const Order = () => {
    const [products, setProducts] = useProducts()
    return (
        <div>
            <h2 className='text-4xl text-center mt-5'>This is order page</h2>
            <p>Products Length: {products.length}</p>
        </div>
    );
};

export default Order;