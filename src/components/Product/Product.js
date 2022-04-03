import React from 'react';
import { ShoppingCartIcon } from '@heroicons/react/solid';
import './Product.css';

const Product = (props) => {
    const { handleAddToCard, product } = props
    const { img, name, price, ratings, seller } = product;

    return (
        <div className='product relative'>
            <div className="product-info">
                <img src={img} alt={name} />
                <div className="ml-[7px] mt-4">
                    <h3 className='text-[21px] text-[#0E161A]'>{name}</h3>
                    <p className='text-[20px] text-[#0E161A]'>Price: ${price}</p>
                </div>
                <div className="ml-[7px] absolute bottom-[53px]">
                    <p className='mb-[3px]'>Manufacturer {seller}</p>
                    <p>Rating: {ratings}</p>
                </div>
            </div>
            <button onClick={() => handleAddToCard(product)} className="add-to-card flex justify-center items-center gap-2 w-full absolute bottom-0 hover:bg-orange-300 font-bold">
                <span className=''>Add to Card</span>
                <ShoppingCartIcon className='w-5 h-5'></ShoppingCartIcon>
            </button>
        </div>
    );
};

export default Product;