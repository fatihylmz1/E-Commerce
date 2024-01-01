import React, { useEffect } from "react";
import "../index.css";
import { useSelector } from "react-redux";

export const ProductCard = () => {



    const categorie = useSelector((store) => store.global.categories);
    const sortedObjects = categorie.sort((a, b) => b.rating - a.rating);
    console.log("sorted>>>>", sortedObjects);
    const topfive = sortedObjects.slice(0, 5);
    console.log(topfive);

    return (
        <div className="sm:px-40 pb-12 flex flex-wrap sm:flex-row gap-4 flex-col">

            {topfive.map((product) => (
                <div className="z-1000 relative flex items-center justify-center hover:scale-110 transition-transform delay-100">
                    <img src={product.img} className="w-56 h-56 brightness-75 object-cover" alt="img1" />

                    <div className="z-2000 absolute flex flex-col justify-between gap-4 items-center">
                        <p className="text-white text-base font-bold">{product.title}</p>
                        <p className="text-white text-sm font-normal">5 Items</p>
                    </div>

                </div>

            ))}
        </div>
    )
}