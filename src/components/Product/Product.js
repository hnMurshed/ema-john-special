import React from 'react';
import './Product.css';

const Product = (props) => {
    const {handleAddToCard, product} = props
    const { img, name, price, ratings, seller } = product;

    return (
        <div className='product relative'>
            <div className="product-info">
                <img src={img} alt={name} />
                <div className="text mt-4">
                    <h3 className='font-bold mb-2'>{name}</h3>
                    <h4><strong>Price:</strong> ${price}</h4>
                    <p><strong>Manufacturer:</strong> {seller}</p>
                    <p><strong>Rating:</strong> {ratings}</p>
                </div>
            </div>
            <button onClick={() => handleAddToCard(product)} className="add-to-card w-full absolute bottom-0 hover:bg-orange-300">
                <span>Add to Card</span>
            </button>
        </div>
    );
};

export default Product;