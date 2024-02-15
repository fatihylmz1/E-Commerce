import React, { useEffect, useState } from "react";
import CreditCardInput from "react-credit-card-input";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getUserCard } from "../store/actions/PaymentActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPen } from "@fortawesome/free-solid-svg-icons";

export const Payment = () => {
    const dispatch = useDispatch();
    const [cardNumber, setCardNumber] = useState("");
    const [expiry, setExpiry] = useState("");
    const [cvc, setCVC] = useState("");
    const [nameOnCard, setNameOnCard] = useState("");
    const token = useSelector((store) => store.user.token);
    const [addCard, setAddCard] = useState(false);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productCounts, setProductCounts] = useState({});
    const [cargo, setCargo] = useState(0);
    const [priceWithCargo, setPriceWithCargo] = useState(0);
    const [totalProduct, setTotalProduct] = useState(0);
    const cart = useSelector((store) => store.shoppingcard.cart);

    const calculateTotal = () => {
        let productCount = 0;
        let price = 0;

        cart.forEach((product) => {
            const count = productCounts[product.id] || 1;
            productCount += count;
            price += product.price * count;
        });

        setTotalProduct(productCount);
        setTotalPrice(price.toFixed(2));

    };
    useEffect(() => {
        calculateTotal();

    }, [cart, productCounts]);

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

    const basketHandler = () => {
        console.log("Sipariş verildi")
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("EXPIRY", expiry);
        const expiryParts = expiry.split(" / ");
        const expireMonth = parseInt(expiryParts[0], 10);
        const expireYear = parseInt(expiryParts[1], 10);
        const paymentData = {
            card_no: cardNumber.replace(/ /g, ""), // Boşlukları kaldır
            expire_month: expireMonth,
            expire_year: expireYear,
            name_on_card: nameOnCard,
        };
        console.log("PAYMENT DATA", paymentData);

        axios.post(`https://workintech-fe-ecommerce.onrender.com/user/card`, paymentData, {
            headers: {
                Authorization: `${token}`
            }
        }
        );
        setCardNumber("");
        setExpiry("");
        setCVC("");
        setNameOnCard("");
    };

    const handleAddCard = () => {
        setAddCard(!addCard);
    }


    // const [cards, setCards] = useState([]);
    useEffect(() => {
        // axios.get(`https://workintech-fe-ecommerce.onrender.com/user/card`, {
        //     headers: {
        //         Authorization: `${token}`
        //     }
        // }
        // ).then((response) => {
        //     setCards(response.data);
        // }).catch((err) => {
        //     console.log(err);
        // })
        dispatch(getUserCard(token));


    }, [])

    const cards = useSelector((store) => store.payment)
    console.log("CARDSSS", cards);

    const handleUpdate = (id) => {
        console.log("güncelleme")
    }

    // useEffect(() => {
    //     window.location.reload();
    // }, [cards]);




    return (
        <div className="">
            <div className="flex justify-between px-28 py-48">
                <div className="flex flex-row flex-wrap gap-4 p-8 border border-gray-400 rounded w-[53.2rem]">
                    <div>
                        <button onClick={handleAddCard} className="w-[47.5rem] h-[8rem] border-2 font-montserrat font-semibold tracking-[0.0125rem] text-lg">Kart Ekle</button>
                    </div>
                    <div className="flex flex-row flex-wrap gap-6">
                        {cards.map(card => (
                            <div key={card.id} className="w-[23rem] h-auto border-2 font-montserrat font-normal tracking-[0.0125rem] text-sm text-gray-600">
                                <div>
                                    <input type="radio" name="selectedcard" />
                                    <p>Name on Card: {card.name_on_card}</p>
                                    <button className="flex flex-row gap-1 items-center" onClick={() => handleUpdate(card.id)}>
                                        <p>Düzenle</p>
                                        <FontAwesomeIcon icon={faPen} />
                                    </button>
                                </div>
                                <p>Card Number: {card.card_no}</p>
                                <p>Expire Month: {card.expire_month}</p>
                                <p>Expire Year: {card.expire_year}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {addCard && (
                    <form onSubmit={handleSubmit}>
                        <CreditCardInput
                            cardNumberInputProps={{ value: cardNumber, onChange: e => setCardNumber(e.target.value) }}
                            cardExpiryInputProps={{ value: expiry, onChange: e => setExpiry(e.target.value) }}
                            cardCVCInputProps={{ value: cvc, onChange: e => setCVC(e.target.value) }}
                        />
                        <div className="form-group">
                            <label htmlFor="nameOnCard">Kart Sahibinin Adı</label>
                            <input
                                type="text"
                                id="nameOnCard"
                                value={nameOnCard}
                                onChange={(e) => setNameOnCard(e.target.value)}
                            />
                        </div>
                        <button type="submit">Ödemeyi Tamamla</button>
                    </form>
                )}
                <div>
                    <div className="flex justify-start items-center flex-col gap-4">

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
                            <button className="bg-orange-500 text-base font-bold text-white p-4 rounded" onClick={basketHandler}>
                                Sepeti Onayla <FontAwesomeIcon icon={faArrowRight} />
                            </button>

                        </div>

                        <div className="flex text-center items-center ">
                            <button className="flex bg-custom-white items-center gap-4 border-2 rounded-md px-20 py-4 font-montserrat tracking-[0.0125rem] font-semibold text-lg ">
                                <p className="font-montserrat text-orange-500 text-3xl ">+</p>
                                <p className="font-montserrat text-sm font-semibold">
                                    İNDİRİM KODU GİR
                                </p>
                            </button>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
};


