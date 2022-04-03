import React from 'react';
import useCard from '../../hook/useCard';
import useProducts from '../../hook/useProducts';
import AddedProduct from '../AddedProducts/AddedProduct';
import Card from '../Card/Card';

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
        <div className='products-container flex gap-5 md:gap-[100px] container mx-auto py-[60px]'>
            <div className="card-products basis-3/5 sm:basis-3/4 flex flex-col gap-4">
                {
                    cards.map(card => <AddedProduct
                        key={card.id} 
                        addedProduct={card}
                        removeFromCard={removeFromCard}
                    ></AddedProduct>)
                }
            </div>
            <div className="order-summary basis-2/5 sm:basis-1/4 p-5 rounded-[6px]">
                <h2 className='text-2xl font-bold text-center'>Order Sumary</h2>
                <Card
                    cards={cards}
                    clearCard={clearCard}
                ></Card>
            </div>
        </div>
    );
};

export default Order;