import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

export const ShopBasket = () => {

    const [addedCard, setAddedCard] = useState([]);
    const [count, setCount] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const card = useSelector((store) => store.shoppingcard.cart);
    console.log("ADDED CARD>>>>>", card);

    useEffect(() => {
        let price = 0;
        setTotalProduct(card.length);
        for (let i = 0; i < card.length; i++) {
            price += card[i].price
            console.log("PRICE", card[i].price);
        }
        setTotalPrice(price.toFixed(2));
    }, [card])





    return (
        <div className="w-[20rem] h-auto rounded border border-black bg-white shadow-md p-4">
            <h2 className="text-black font-bold mb-3">Sepetim ({totalProduct})</h2>
            {card?.map((product) => (

                <div key={product.id} className="flex flex-row gap-3 pb-4 w-[calc(100% / 3)] border border-gray-400 p-4 mb-4 flex-shrink-0">
                    <img src={product.images[0].url} className="w-[4rem] h-full object-cover" />
                    <div className="flex flex-col gap-2 w-full">
                        <p className="text-black font-bold">{product.name}</p>
                        <p className="text-gray-400 font-light">Adet:{count}</p>
                        <p className="text-orange-500 font-bold">{product.price} $</p>
                    </div>
                </div>

            ))}
            <hr className="w-[18rem] border-black border-t-2 mb-3" />
            <p className="text-black font-bold mb-3">Total Price: {totalPrice}$</p>
            <div className="flex flex-row justify-between">
                <button className="border rounded p-2 bg-login text-white font-bold">
                    Sepete Git
                </button>
                <button className="border rounded p-2 bg-orange-500 text-white font-bold">
                    Siparişi Tamamla
                </button>
            </div>

        </div>
    )


}