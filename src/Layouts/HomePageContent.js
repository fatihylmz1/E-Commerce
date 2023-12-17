import React from "react";
import "../index.css";
import { Clients } from "./Clients";
import { Card } from "./Card";
import { Content } from "./Content";
import { ShopCards } from "./ShopCards";
import { Featured } from "./Featured";
import { Blog } from "./Blog";
import Slider from "./Slider";
import { NavLink } from "react-router-dom";


export const HomePageContent = () => {

    return (
        <div>
            <Slider />
            <Clients />
            <ShopCards />
            <div className="flex flex-col justify-center gap-4 py-20 text-center">
                <h4 className="text-link-color text-xl font-normal">Featured Products</h4>
                <h3 className="text-header-blue text-2xl font-bold">BESTSELLER PRODUCTS</h3>
                <p className="text-link-color text-sm font-normal">Problems trying to resolve the conflict between </p>
            </div>
            <Card />
            <div className="flex flex-row justify-center pt-24 pb-20 items-center">
                <NavLink to="/shop">
                    <button className="rounded border border-login text-login text-sm font-bold w-64 h-14">LOAD MORE PRODUCTS </button>
                </NavLink>
            </div>
            <Content />
            <Featured />
            <Blog />
        </div>
    )
}