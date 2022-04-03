import React from 'react';
import { clearShoppingCard } from '../../utilities/fakedb';
import {TrashIcon, ArrowRightIcon} from '@heroicons/react/solid';

const Card = ({cards, clearCard}) => {
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
        clearCard();
    }
    return (
        <div className="flex flex-col gap-3 mt-[50px]">
            <span className='text-[#2A414F]'>Selected Items: {quantity}</span>
            <span className='text-[#2A414F]'>totalPrice Price: ${totalPrice}</span>
            <span className='text-[#2A414F]'>totalPrice Shipping Charge: ${shipping}</span>
            <span className='text-[#2A414F]'>Tax: ${tax.toFixed(2)}</span>
            <span className='mb-5 text-[21px] text-[#0E161A]'>Grand Total Price: ${grandTotal.toFixed(2)}</span>
            <button onClick={removeFromStore} className='flex justify-center items-center gap-2 w-full bg-[#FF3030] py-3 rounded-lg hover:bg-[#a80000] hover:text-white duration-300' >
                <span>Clear Card</span>
                <TrashIcon className='w-5 h-5'></TrashIcon>
            </button>
            <button className='flex justify-center items-center gap-2 w-full bg-[#FF9900] py-3 rounded-lg hover:bg-orange-600 hover:text-white duration-300'>
                <span>Review Order</span>
                <ArrowRightIcon className='w-5 h-5'></ArrowRightIcon>
            </button>
        </div>
    );
};

export default Card;