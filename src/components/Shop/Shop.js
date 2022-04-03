import React, { useEffect, useState } from 'react';
import useCard from '../../hook/useCard';
import useProducts from '../../hook/useProducts';
import { addToDb, getStoredCard } from '../../utilities/fakedb';
import Card from '../Card/Card';
import Product from '../Product/Product';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useProducts();
    const [cards, setCard] = useCard(products);


    // const [cards, setCards] = useState([]);

    // useEffect( () => {
    //     const storedCard = getStoredCard();
    //     const addedProducts = [];
    //     for (const id in storedCard) {
    //         const addedProduct = products.find(product => product.id === id);

    //         if (addedProduct) {
    //             addedProduct.quantity = storedCard[id];
    //             addedProducts.push(addedProduct);
    //         }
    //     }
    //     setCards(addedProducts);
    // }, [products])

    const handleAddToCard = selectedProduct => {
        const exists = cards.find(product => product.id === selectedProduct.id);

        let newCard = [];
        if (exists) {
            const rest = cards.filter(product => product.id !== exists.id);
            exists.quantity = exists.quantity + 1;
            newCard = [...rest, exists];
        }
        else {
            selectedProduct.quantity = 1;
            newCard = [...cards, selectedProduct];
        }
        setCard(newCard);
        addToDb(selectedProduct.id);
    }

    const clearCard = () => {
        setCard([]);
    }
    
    return (
        <div className="flex gap-5 container mx-auto products-container">
            <div className="products basis-3/5 sm:basis-3/4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCard={handleAddToCard}
                    ></Product>)
                }
            </div>
            <div className="order-summary basis-2/5 sm:basis-1/4 px-5">
                <div className="sticky top-0 pt-[120px]">
                    <h2 className='text-2xl font-bold text-center'>Order Sumary</h2>
                    <Card
                        clearCard={clearCard}
                        cards={cards}
                    ></Card>
                </div>
            </div>
        </div>
    );
};

export default Shop;