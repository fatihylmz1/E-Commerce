import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Header } from "../Layouts/Header";
import { Footer } from "../Layouts/Footer";

export const OrderInformation = () => {

    const [order, setOrder] = useState();
    const token = useSelector((store) => store.user.token);


    useEffect(() => {
        axios
            .get("https://workintech-fe-ecommerce.onrender.com/order", {
                headers: {
                    Authorization: `${token}`
                }
            })
            .then((res) => {
                console.log("ORDERSSS>>>>>", res.data);
                setOrder(res.data);
            })
            .catch((err) => console.log("POST DATA", err));
    }, []);


    return (
        <div>
            <Header />
            <div className="flex flex-col px-52 py-24 gap-10">
                <p className="text-2xl"><strong>Congratulations! Your Order Has Been Received.</strong></p>
                <div className="flex flex-row gap-6 flex-wrap">
                    {Array.isArray(order) && order?.map((order, index) => (
                        <div key={index} className="w-[23rem] h-[15rem] border-2 font-montserrat font-normal tracking-[0.0125rem] text-sm text-gray-600 gap-2 flex flex-col p-3 rounded shadow-lg bg-white">
                            <div className="flex flex-row py-2">
                                <div className="flex flex-row justify-between w-full items-center px-4">
                                    <p className="text-gray-600 font-bold">Order ID: {order.id}</p>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 items-start p-4">
                                <p><strong>Order Date:</strong> {order.order_date}</p>
                                <p><strong>Name: </strong> {order.card_name}</p>
                                <p><strong>Price: </strong> {order.price} $</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
            <Footer />
        </div>
    )
}