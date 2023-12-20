import React from "react";
import "../index.css";
import photo1 from "../photos/cardphotos/product-cover-1.png"
import photo2 from "../photos/cardphotos/product-cover-2.png"
import photo3 from "../photos/cardphotos/product-cover-3.png"
import photo4 from "../photos/cardphotos/product-cover-4.png"
import photo5 from "../photos/cardphotos/product-cover-5.png"
import photo6 from "../photos/cardphotos/product-cover-6.png"
import photo7 from "../photos/cardphotos/product-cover-7.png"
import photo8 from "../photos/cardphotos/product-cover-8.png"
import { NavLink } from "react-router-dom";

const photos = [photo1, photo2, photo3, photo4, photo5, photo1, photo6, photo7, photo8, photo3];

export const Card = () => {

    return (
        <div className=" flex flex-col flex-wrap justify-between items-center sm:px-40">


            <div className="sm:flex sm:flex-row flex-wrap justify-between sm:pt-6 sm:px-6 sm:gap-8 flex flex-col px-6">

                {photos.map((photo) => (
                    <NavLink to="/product">
                        <div className="flex flex-col justify-between items-center gap-4 mb-6">
                            <img src={photo} />
                            <p className="text-base font-bold text-header-blue">Graphic Design</p>
                            <p className="text-sm font-bold text-link-color">English Department</p>
                            <div className="flex flex-row gap-2">
                                <p className="text-price-grey text-base font-bold">$16.48</p>
                                <p className="text-price-green text-base font-bold">$6.48</p>
                            </div>

                        </div>
                    </NavLink>

                ))}
            </div>


        </div>
    )
}
