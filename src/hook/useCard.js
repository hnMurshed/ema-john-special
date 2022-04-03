import { useEffect, useState } from "react";
import { getStoredCard } from "../utilities/fakedb";

const useCard = products => {
    const [card, setCard] = useState([]);

    useEffect(() => {
        const storedCard = getStoredCard();
        const addedProducts = [];
        for (const id in storedCard) {
            const addedProduct = products.find(product => product.id === id);

            if (addedProduct) {
                addedProduct.quantity = storedCard[id];
                addedProducts.push(addedProduct);
            }
        }
        setCard(addedProducts);
    }, [products])

    return [card, setCard];
}

export default useCard;