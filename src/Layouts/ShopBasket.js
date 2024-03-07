import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeFromCart } from "../store/actions/ShoppingCardAction";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopBasket = () => {

    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productCounts, setProductCounts] = useState({});
    const card = useSelector((store) => store.shoppingcard.cart);
    const dispatch = useDispatch();
    const navigate = useNavigate();




    const calculateTotal = () => {
        let productCount = 0;
        let price = 0;

        card.forEach((product) => {
            const count = productCounts[product.id] || 1;
            productCount += count;
            price += product.price * count;
        });

        setTotalProduct(productCount);
        setTotalPrice(price.toFixed(2));
    };

    const updateProductCount = (productId, increase) => {
        const updatedCounts = { ...productCounts };
        const currentCount = updatedCounts[productId] || 1;

        updatedCounts[productId] = increase ? currentCount + 1 : Math.max(currentCount - 1, 1);

        setProductCounts(updatedCounts);

        console.log(productCounts)
        calculateTotal();
    };

    useEffect(() => {
        calculateTotal();

    }, [card, productCounts]);

    const removeToCart = (product) => {

        dispatch(removeFromCart(product.id));
    }

    const navToShopCard = () => {
        navigate("/shopcart");
    }

    const handleSiparis = () => {
        axios.get("http://localhost:8585/ecommerce/card")
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }





    return (
        <div className="w-[20rem] h-auto rounded border border-black bg-white shadow-md p-4">
            <h2 className="text-black font-bold mb-3">Sepetim ({totalProduct})</h2>
            {card?.map((product, index) => (

                <div key={product.id} className="flex flex-row gap-3 pb-4 w-[calc(100% / 3)] border border-gray-400 p-4 mb-4 flex-shrink-0">
                    <img src={product.images[0].url} className="w-[4rem] h-full object-cover" />
                    <div className="flex flex-col gap-2 w-full">
                        <p className="text-black font-bold">{product.name}</p>
                        <p className="text-gray-400 font-light">Adet:{productCounts[product.id] || 1}</p>
                        <div className="flex flex-row justify-between">

                            <div>
                                <p className="text-orange-500 font-bold">{product.price} $</p>
                            </div>

                            <div className="flex flex-row">
                                <button className="border border-blue-700 bg-blue-500 text-black w-8 h-6 text-center rounded" onClick={() => updateProductCount(product.id, true)}>+</button>
                                <p className="border border-blue-700 bg-white w-8 h-6 text-center rounded">{productCounts[product.id] || 1}</p>
                                <button className="border border-blue-700 bg-blue-500 text-black w-8 h-6 text-center rounded" onClick={() => updateProductCount(product.id, false)}>-</button>
                                <button onClick={() => removeToCart(product)}><FontAwesomeIcon icon={faTrash} /></button>
                            </div>

                        </div>
                    </div>
                </div>

            ))}
            <hr className="w-[18rem] border-black border-t-2 mb-3" />
            <p className="text-black font-bold mb-3">Total Price: {totalPrice}$</p>
            <div className="flex flex-row justify-between">
                <button className="border rounded p-2 bg-login text-white font-bold" onClick={navToShopCard}>
                    Sepete Git
                </button>
                <button className="border rounded p-2 bg-orange-500 text-white font-bold" onClick={handleSiparis}>
                    Siparişi Tamamla
                </button>
            </div>

        </div>
    )


}