import React from "react";
import "../index.css";
import { Clients } from "./Clients";
import { Card } from "./Card";
import { Content } from "./Content";
import { Hero } from "./Hero";
import { ShopCards } from "./ShopCards";
import { Featured } from "./Featured";
import { Blog } from "./Blog";
import Slider from "./Slider";
import ImageSlider from "./Slider";

export const HomePageContent = () => {

    return (
        <div>
            {/* <Hero /> */}
            <Slider />
            {/* <ImageSlider /> */}
            <Clients />
            <ShopCards />
            <Card />
            <Content />
            <Featured />
            <Blog />
        </div>
    )
}