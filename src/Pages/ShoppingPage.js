import React from "react";
import "../index.css";
import { Header } from "../Layouts/Header";
import { Clients } from "../Layouts/Clients";
import { Footer } from "../Layouts/Footer";
import { Products } from "../Layouts/Products";

export const ShoppingPage = () => {
    return (
        <div>
            <Header />
            <Products />
            <Clients />
            <Footer />
        </div>
    )
}