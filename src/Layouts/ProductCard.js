import React from "react";
import "../index.css";
import img1 from "../photos/shop-card/img1.png"
import img2 from "../photos/shop-card/img2.png"
import img3 from "../photos/shop-card/img3.png"
import img4 from "../photos/shop-card/img4.png"
import img5 from "../photos/shop-card/img5.png"

export const ProductCard = () => {
    return (
        <div className="px-40 pb-12 flex flex-wrap flex-row gap-4">
            <img src={img1} className="w-56 h-56" />
            <img src={img2} className="w-56 h-56" />
            <img src={img3} className="w-56 h-56" />
            <img src={img4} className="w-56 h-56" />
            <img src={img5} className="w-56 h-56" />
        </div>
    )
}