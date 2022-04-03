import { CreditCardIcon } from '@heroicons/react/solid';
import React from 'react';
import { Link } from 'react-router-dom';
import useCard from '../../hook/useCard';
import useProducts from '../../hook/useProducts';
import AddedProduct from '../AddedProducts/AddedProduct';
import Card from '../Card/Card';
import './Order.css';

const Order = () => {
    const [products, setProducts] = useProducts();
    const [cards, setCard] = useCard(products);

    const removeFromCard = product => {
        const rest = cards.filter(prod => prod !== product);
        setCard(rest);
    }

    const clearCard = () => {
        setCard([]);
    }
    return (
        <div className='products-container flex gap-5 md:gap-[150px] container mx-auto py-[60px]'>
            <div className="card-products basis-3/5 flex flex-col gap-4">
                {
                    cards.map(card => <AddedProduct
                        key={card.id}
                        addedProduct={card}
                        removeFromCard={removeFromCard}
                    ></AddedProduct>)
                }
            </div>
            <div className="basis-2/5 rounded-[6px]">
                <div className="order-summary box-shadow sticky top-[144px] p-5 rounded-[6px]">
                    <h2 className='text-2xl font-bold text-center'>Order Sumary</h2>
                    <Card
                        cards={cards}
                        clearCard={clearCard}
                    >
                        <Link to='/inventory'>
                            <button className='flex justify-center items-center gap-2 w-full bg-[#FF9900] py-3 rounded-lg hover:bg-orange-600 hover:text-white duration-300'>
                                <span>Proceed Checkout</span>
                                <CreditCardIcon className='w-5 h-5'></CreditCardIcon>
                            </button>
                        </Link>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default Order;