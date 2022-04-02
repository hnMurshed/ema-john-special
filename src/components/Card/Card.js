import React from 'react';
import { clearShoppingCard } from '../../utilities/fakedb';

const Card = ({cards}) => {
    let quantity = 0;
    let totalPrice = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    for (const pro of cards) {
        quantity = quantity + pro.quantity;
        totalPrice = totalPrice + pro.price * pro.quantity;
        shipping = shipping + pro.shipping;
        tax = totalPrice * 0.1;
        grandTotal = totalPrice + shipping + tax;
    }

    const removeFromStore = () => {
        clearShoppingCard();
    }
    return (
        <div className="flex flex-col mt-[50px]">
            <span>Selected Items: {quantity}</span>
            <span>totalPrice Price: ${totalPrice}</span>
            <span>totalPrice Shipping Charge: ${shipping}</span>
            <span>Tax: ${tax.toFixed(2)}</span>
            <span className='mb-5'>Grand totalPrice: ${grandTotal.toFixed(2)}</span>
            <button onClick={removeFromStore} className='w-full bg-[#FF3030] py-3 my-2 rounded-lg hover:bg-[#a80000] hover:text-white duration-300' >Clear Card</button>
            <button className='w-full bg-[#FF9900] py-3 my-2 rounded-lg hover:bg-orange-600 hover:text-white duration-300'>Review Order</button>
        </div>
    );
};

export default Card;