import React from "react";
import "../index.css";
import img1 from "../photos/shop-card/card-cover-5.jpg"
import img2 from "../photos/shop-card/card-cover-6.jpg"
import img3 from "../photos/shop-card/card-cover-7.jpg"
import img4 from "../photos/shop-card/card-cover-8.jpg"
import img5 from "../photos/shop-card/card-cover-9.jpg"

export const ProductCard = () => {
    return (
        <div className="px-40 pb-12 flex flex-wrap flex-row gap-4">
            <div className="z-1000 relative flex items-center justify-center">
                <img src={img1} className="w-56 h-56 opacity-95" />

                <div className="z-2000 absolute flex flex-col justify-between gap-4 items-center">
                    <p className="text-white text-base font-bold">CLOTHS</p>
                    <p className="text-white text-sm font-normal">5 Items</p>
                </div>

            </div>
            <div className="z-1000 relative flex items-center justify-center">
                <img src={img2} className="w-56 h-56 opacity-95" />

                <div className="z-2000 absolute flex flex-col justify-between gap-4 items-center">
                    <p className="text-white text-base font-bold">CLOTHS</p>
                    <p className="text-white text-sm font-normal">5 Items</p>
                </div>

            </div>
            <div className="z-1000 relative flex items-center justify-center">
                <img src={img3} className="w-56 h-56 opacity-95" />

                <div className="z-2000 absolute flex flex-col justify-between gap-4 items-center">
                    <p className="text-white text-base font-bold">CLOTHS</p>
                    <p className="text-white text-sm font-normal">5 Items</p>
                </div>

            </div>
            <div className="z-1000 relative flex items-center justify-center">
                <img src={img4} className="w-56 h-56 opacity-95" />

                <div className="z-2000 absolute flex flex-col justify-between gap-4 items-center">
                    <p className="text-white text-base font-bold">CLOTHS</p>
                    <p className="text-white text-sm font-normal">5 Items</p>
                </div>

            </div>
            <div className="z-1000 relative flex items-center justify-center">
                <img src={img5} className="w-56 h-56 opacity-95" />

                <div className="z-2000 absolute flex flex-col justify-between gap-4 items-center">
                    <p className="text-white text-base font-bold">CLOTHS</p>
                    <p className="text-white text-sm font-normal">5 Items</p>
                </div>

            </div>

        </div>
    )
}