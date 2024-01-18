import { faArrowRight, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { removeFromCart } from "../store/actions/ShoppingCardAction";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

export const ShopPageContent = () => {

    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productCounts, setProductCounts] = useState({});
    const card = useSelector((store) => store.shoppingcard.cart);
    const dispatch = useDispatch();
    const [cargo, setCargo] = useState(0);
    const [priceWithCargo, setPriceWithCargo] = useState(0);





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
    useEffect(() => {
        if (totalPrice >= 150) {
            setCargo(0);
            setPriceWithCargo(parseFloat(totalPrice));
        } else {
            const cargoCost = 29.99;
            setCargo(cargoCost);
            let cargoprice = parseFloat(totalPrice) + cargoCost;
            setPriceWithCargo(cargoprice.toFixed(3));
        }

    }, [totalPrice]);


    const removeToCart = (product) => {

        dispatch(removeFromCart(product.id));
    }
    return (
        <div className="flex flex-row justify-between w-full h-auto px-48 py-20 gap-6">
            <div className="flex flex-col gap-6">
                <h2 className="text-black font-bold mb-3 text-xl">Sepetim ({totalProduct} Ürün)</h2>
                {card?.map((product) => (

                    <div key={product.id} className="flex flex-row gap-3 pb-4 w-full border border-gray-400 p-4 mb-4 rounded-md shadow-md">
                        <form className="flex flex-col justify-center items-center">
                            <input type="checkbox" />
                        </form>
                        <img src={product.images[0].url} className="w-[4rem] h-full object-cover" />
                        <div className="flex flex-row gap-12 w-full">
                            <div className="flex flex-col justify-center w-[20rem]">
                                <p className="text-black font-bold">{product.name}</p>
                                <p className="text-black font-light">{product.description}</p>
                            </div>
                            <div className="flex flex-row justify-center items-center gap-20">

                                <div>
                                    <p className="text-orange-500 font-bold">{product.price} $</p>
                                </div>

                                <div className="flex flex-row gap-8">
                                    <div className="flex flex-row">
                                        <button className="border bg-orange-500 text-black w-8 h-6 text-center rounded-l-md" onClick={() => updateProductCount(product.id, true)}>+</button>
                                        <p className="border bg-white w-8 h-6 text-center ">{productCounts[product.id] || 1}</p>
                                        <button className="border  bg-orange-500 text-black w-8 h-6 text-center rounded-r-md" onClick={() => updateProductCount(product.id, false)}>-</button>
                                    </div>

                                    <div>
                                        <button onClick={() => removeToCart(product)}><FontAwesomeIcon icon={faTrash} /></button>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                ))}
                <hr className="w-full border-black border-t-2 mb-3" />
            </div>
            <div className="flex flex-col gap-6 mt-[3.9rem] h-auto">
                <div className="flex flex-col gap-3 border rounded border-gray-400 px-3 py-6 shadow-md">
                    <p className="text-lg"><strong>Sipariş Özeti</strong></p>
                    <div className="flex flex-row justify-between">
                        <p>Ürünün Toplamı:</p>
                        <p className="font-bold">{totalPrice}$</p>
                    </div>
                    <div className="flex flex-row justify-between">
                        <p>Kargo Toplam:</p>
                        <p className="font-bold">{cargo} $</p>
                    </div>
                    <div className="flex flex-row justify-between gap-8">
                        <p>150 $ Üzeri Kargo Bedava</p>
                        <p className="text-orange-500 font-bold">-29.99 $</p>
                    </div>
                    <hr className="w-full border-gray-400 border-t-2" />
                    <div className="flex flex-row justify-between">
                        <p>TOPLAM</p>
                        <p className="font-bold">{priceWithCargo} $</p>
                    </div>


                </div>
                <button className="bg-orange-500 text-base font-bold text-white p-4 rounded">
                    Sepeti Onayla <FontAwesomeIcon icon={faArrowRight} />
                </button>

            </div>

        </div>
    )
}