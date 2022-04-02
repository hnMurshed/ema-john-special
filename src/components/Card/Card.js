import React from 'react';

const Card = ({addedProducts}) => {

    let totalPrice = 0;
    let shipping = 0;
    let tax = 0;
    let grandTotal = 0;
    for (const pro of addedProducts) {
        totalPrice = totalPrice + pro.price;
        shipping = shipping + pro.shipping;
        tax = totalPrice * 0.1;
        grandTotal = totalPrice + shipping + tax;
    }
    return (
        <div className="flex flex-col mt-[50px]">
            <span>Selected Items: {addedProducts.length}</span>
            <span>totalPrice Price: ${totalPrice}</span>
            <span>totalPrice Shipping Charge: ${shipping}</span>
            <span>Tax: ${tax.toFixed(2)}</span>
            <span>Grand totalPrice: ${grandTotal}</span>
            <button className='w-full bg-[#FF3030]'>Clear Card</button>
            <button className='w-full bg-[#FF9900]'>Review Order</button>
        </div>
    );
};

export default Card;