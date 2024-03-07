import React, { useEffect, useState } from "react";
import CreditCardInput from "react-credit-card-input";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { getUserCard, updateCard, updateUserCard } from "../store/actions/PaymentActions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPen } from "@fortawesome/free-solid-svg-icons";
import photo from "../photos/cardphotos/png-transparent-integrated-circuit-smart-card-card-chip-electronics-text-rectangle-thumbnail2.png"
import "../Payment.css";

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
    console.log("KARTLAR>>>>>>", cart);
    const [updateCard, setUpdateCard] = useState(false);
    const [cardWillupdate, setCardWillUpdate] = useState([]);

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
            card_no: cardNumber.replace(/ /g, ""),
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
        dispatch(getUserCard(token));
        setAddCard(false);

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
        setUpdateCard(!updateCard)
        const selectedCard = cards.find(card => card.id === id);

        console.log("GÜNCELLEME>>>>>>", selectedCard);

        setCardWillUpdate([selectedCard]);

        return selectedCard;
    }
    useEffect(() => {
        console.log("GÜNCELLENECEK KART DATASI", cardWillupdate);

    }, [cardWillupdate]);

    // useEffect(() => {
    //     window.location.reload();
    // }, [cards]);

    const handleTest = () => {
        axios.get("http://localhost:8585/ecommerce/address")
            .then((res) => {
                console.log(res.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const handleUpdateSubmit = (e) => {
        e.preventDefault();
        // console.log("GÜNCEL KART DATASI>>>>", data)
        const updatedCardData = {
            id: cardWillupdate[0].id,
            card_no: cardNumber ? cardNumber : cardWillupdate.card_no,
            expire_month: expiry.split(" / ")[0],
            expire_year: expiry.split(" / ")[1],
            name_on_card: nameOnCard,
        };
        console.log("UPDATEDCARDDATAAA>>>>>>", updatedCardData)
        dispatch(updateUserCard(updatedCardData, token))
        dispatch(getUserCard(token))
        setUpdateCard(!updateCard)

    }




    return (
        <div>
            <div className="flex justify-between px-28 py-48">
                <div className="flex flex-row flex-wrap p-8 border border-gray-400 rounded w-[53.2rem]">
                    <div className="h-[4rem]">
                        <button onClick={handleAddCard} className="w-[47.5rem] h-[4rem] border-2 font-montserrat tracking-[0.0125rem] text-lg bg-orange-400 text-white font-bold rounded">Kart Ekle</button>
                    </div>
                    <div className="flex flex-row flex-wrap gap-6">
                        {cards.map(card => (
                            <div key={card.id} className="w-[23rem] h-[12rem] border-2 rounded-md border-gray-500 p-3 font-montserrat font-normal tracking-[0.0125rem] text-sm text-black flex flex-col justify-between bg-slate-200 shadow-xl ">
                                <div className="flex flex-row justify-between">

                                    <div className="flex flex-row gap-2 items-center">

                                        <input type="radio" name="selectedcard" />
                                        <p><strong>{card.name_on_card}</strong></p>
                                    </div>
                                    <button className="flex flex-row gap-1 items-center border border-gray-300 p-2 bg-orange-500 text-white rounded" onClick={() => handleUpdate(card.id)}>
                                        <p>Düzenle</p>
                                        <FontAwesomeIcon icon={faPen} />
                                    </button>
                                </div>

                                <div className="flex flex-row justify-between">
                                    <img src={photo} className="w-[4rem] h-[2.5rem] object-cover rounded" />
                                    <div className="flex flex-col gap-2 items-end justify-end">

                                        <p>{card.card_no}</p>
                                        <p>{card.expire_month} / {card.expire_year} </p>

                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {addCard && (
                    <form onSubmit={handleSubmit} className="z-10 absolute border rounded border-gray-400 p-8 right-[38.2rem] bg-white flex 
                    flex-col w-[47.8rem] bottom-[6rem]">
                        <CreditCardInput
                            cardNumberInputProps={{ className: "cardNumber", value: cardNumber, onChange: e => setCardNumber(e.target.value) }}
                            cardExpiryInputProps={{ value: expiry, onChange: e => setExpiry(e.target.value) }}
                            cardCVCInputProps={{ value: cvc, onChange: e => setCVC(e.target.value) }}
                        />
                        <div className="form-group">
                            <label htmlFor="nameOnCard"></label>
                            <input
                                type="text"
                                id="nameOnCard"
                                placeholder="Kart Sahibinin Adı"
                                value={nameOnCard}
                                onChange={(e) => setNameOnCard(e.target.value)}
                                className="border border-gray-400 rounded p-2"
                            />
                        </div>
                        <div className="flex justify-center">

                            <button type="submit" className="mt-3 border rounded bg-orange-400 text-white font-normal w-[8rem] h-[3rem] items-center content-center">Kart Ekle</button>
                        </div>
                    </form>
                )}
                {updateCard && (
                    <form onSubmit={(e) => handleUpdateSubmit(e)} className="z-10 absolute border rounded border-gray-400 p-8 right-[38.2rem] bg-white flex 
                    flex-col w-[47.8rem] bottom-[6rem]">
                        <CreditCardInput
                            cardNumberInputProps={{ className: "cardNumber", defaultValue: cardWillupdate[0].card_no, onChange: e => setCardNumber(e.target.value) }}
                            cardExpiryInputProps={{ value: expiry, onChange: e => setExpiry(e.target.value) }}
                            cardCVCInputProps={{ value: cvc, onChange: e => setCVC(e.target.value) }}
                        />
                        <div className="form-group">
                            <label htmlFor="nameOnCard"></label>
                            <input
                                type="text"
                                id="nameOnCard"
                                placeholder="Kart Sahibinin Adı"
                                // value={nameOnCard}
                                defaultValue={cardWillupdate[0].name_on_card}
                                onChange={(e) => setNameOnCard(e.target.value)}
                                className="border border-gray-400 rounded p-2"
                            />
                        </div>
                        <div className="flex justify-center">

                            <button type="submit" className="mt-3 border rounded bg-orange-400 text-white font-normal w-[8rem] h-[3rem] items-center content-center">Düzenle</button>
                        </div>
                    </form>
                )}
                <div>
                    <div className="flex justify-start items-center flex-col gap-4">

                        <div className="flex flex-col gap-6 h-auto">
                            <div className="flex flex-row gap-3 p-7 border border-gray-400 rounded">
                                <input type="checkbox" />
                                <p><strong>Ön Bilgilendirme Koşulları'nı</strong> ve <br /> <strong>Mesafeli Satış Sözleşmesi'ni</strong><br /> okudum, onaylıyorum.</p>

                            </div>
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
                            <button className="flex bg-custom-white items-center gap-4 border-2 rounded-md px-20 py-4 font-montserrat tracking-[0.0125rem] font-semibold text-lg " onClick={handleTest}>
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


