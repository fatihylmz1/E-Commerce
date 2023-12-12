import React from "react";
import "../index.css";
import { Header } from "../Layouts/Header";
import { Clients } from "../Layouts/Clients";
import { Footer } from "../Layouts/Footer";
import { Products } from "../Layouts/Products";
import { faGreaterThan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ProductCard } from "../Layouts/ProductCard";


export const ShoppingPage = () => {
    return (
        <div>
            <Header />
            <div className="px-6 py-6">
                <div className="flex flex-row justify-between">
                    <p className="text-2xl text-header-blue font-bold">Shop</p>
                    <div className="flex flex-row gap-4 items-center">
                        <NavLink to="/" className="text-header-blue text-sm font-bold">Home</NavLink>
                        <FontAwesomeIcon icon={faGreaterThan} className="text-price-grey" />
                        <NavLink to="/shop" className="text-sm font-bold text-price-grey">Shop</NavLink>
                    </div>
                </div>
            </div>

            <ProductCard />
            <Products />
            <Clients />
            <Footer />
        </div>
    )
}