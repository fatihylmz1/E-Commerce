import React from "react";
import "../index.css";
import { Clients } from "./Clients";
import { Card } from "./Card";
import { Content } from "./Content";
import { Hero } from "./Hero";
import { ShopCards } from "./ShopCards";
import { Featured } from "./Featured";
import { Blog } from "./Blog";

export const HomePageContent = () => {

    return (
        <div className="w-screen">
            <Hero />
            <Clients />
            <ShopCards />
            <Card />
            <Content />
            <Featured />
            <Blog />
        </div>
    )
}