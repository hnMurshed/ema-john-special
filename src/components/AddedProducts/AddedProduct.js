import React from 'react';
import './AddedProducts.css';
import { TrashIcon } from '@heroicons/react/solid';
import { removeItemFromStore } from '../../utilities/fakedb';

const AddedProduct = ({ addedProduct, removeFromCard }) => {
    const { img, name, price, shipping, id } = addedProduct;

    const trashIconEventHandler = () => {
        removeItemFromStore(id);
        removeFromCard(addedProduct);
    }
    return (
        <div className='flex items-center justify-between border border-[#95A0A7] p-[8px] rounded-[6px]'>
            <div className='flex items-center gap-3'>
                <img className='w-[91px] h-[91px] rounded-[6px]' src={img} alt={name} />
                <div className="">
                    <h3 className='text-[21px]'>{name}</h3>
                    <p className='text-[15px]'>
                        Price: <span className='text-[#FF9900]'>${price}</span>
                    </p>
                    <p className='text-[15px]'>
                        Shipping Charge: <span className='text-[#FF9900]'>${shipping}</span>
                    </p>
                </div>
            </div>
            <span onClick={trashIconEventHandler} className='trash-icon bg-[#eb57574d] p-2 rounded-[50%]'>
                <TrashIcon className='w-6 h-6 text-[#EB5757]'></TrashIcon>
            </span>
        </div>
    );
};

export default AddedProduct;