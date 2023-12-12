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

export const Card = () => {

    return (
        <div className=" flex flex-col flex-wrap justify-between items-center px-40">
            <div className="flex flex-col justify-center gap-4 py-20 text-center">
                <h4 className="text-link-color text-xl font-normal">Featured Products</h4>
                <h3 className="text-header-blue text-2xl font-bold">BESTSELLER PRODUCTS</h3>
                <p className="text-link-color text-sm font-normal">Problems trying to resolve the conflict between </p>
            </div>

            <div className="flex flex-row flex-wrap justify-between py-6 px-6 gap-8">
                <div className="flex flex-col justify-between items-center gap-4 ">
                    <img src={photo1} />
                    <p className="text-base font-bold text-header-blue">Graphic Design</p>
                    <p className="text-sm font-bold text-link-color">English Department</p>
                    <div className="flex flex-row gap-2">
                        <p className="text-price-grey text-base font-bold">$16.48</p>
                        <p className="text-price-green text-base font-bold">$6.48</p>
                    </div>

                </div>
                <div className="flex flex-col justify-between items-center gap-4 ">
                    <img src={photo2} />
                    <p className="text-base font-bold text-header-blue">Graphic Design</p>
                    <p className="text-sm font-bold text-link-color">English Department</p>
                    <div className="flex flex-row gap-2">
                        <p className="text-price-grey text-base font-bold">$16.48</p>
                        <p className="text-price-green text-base font-bold">$6.48</p>
                    </div>

                </div>
                <div className="flex flex-col justify-between items-center gap-4 ">
                    <img src={photo3} />
                    <p className="text-base font-bold text-header-blue">Graphic Design</p>
                    <p className="text-sm font-bold text-link-color">English Department</p>
                    <div className="flex flex-row gap-2">
                        <p className="text-price-grey text-base font-bold">$16.48</p>
                        <p className="text-price-green text-base font-bold">$6.48</p>
                    </div>

                </div>
                <div className="flex flex-col justify-between items-center gap-4 ">
                    <img src={photo4} />
                    <p className="text-base font-bold text-header-blue">Graphic Design</p>
                    <p className="text-sm font-bold text-link-color">English Department</p>
                    <div className="flex flex-row gap-2">
                        <p className="text-price-grey text-base font-bold">$16.48</p>
                        <p className="text-price-green text-base font-bold">$6.48</p>
                    </div>

                </div>
                <div className="flex flex-col justify-between items-center gap-4 ">
                    <img src={photo5} />
                    <p className="text-base font-bold text-header-blue">Graphic Design</p>
                    <p className="text-sm font-bold text-link-color">English Department</p>
                    <div className="flex flex-row gap-2">
                        <p className="text-price-grey text-base font-bold">$16.48</p>
                        <p className="text-price-green text-base font-bold">$6.48</p>
                    </div>

                </div>
                <div className="flex flex-col justify-between items-center gap-4 ">
                    <img src={photo1} />
                    <p className="text-base font-bold text-header-blue">Graphic Design</p>
                    <p className="text-sm font-bold text-link-color">English Department</p>
                    <div className="flex flex-row gap-2">
                        <p className="text-price-grey text-base font-bold">$16.48</p>
                        <p className="text-price-green text-base font-bold">$6.48</p>
                    </div>

                </div>
                <div className="flex flex-col justify-between items-center gap-4 ">
                    <img src={photo6} />
                    <p className="text-base font-bold text-header-blue">Graphic Design</p>
                    <p className="text-sm font-bold text-link-color">English Department</p>
                    <div className="flex flex-row gap-2">
                        <p className="text-price-grey text-base font-bold">$16.48</p>
                        <p className="text-price-green text-base font-bold">$6.48</p>
                    </div>

                </div>
                <div className="flex flex-col justify-between items-center gap-4 ">
                    <img src={photo7} />
                    <p className="text-base font-bold text-header-blue">Graphic Design</p>
                    <p className="text-sm font-bold text-link-color">English Department</p>
                    <div className="flex flex-row gap-2">
                        <p className="text-price-grey text-base font-bold">$16.48</p>
                        <p className="text-price-green text-base font-bold">$6.48</p>
                    </div>

                </div>
                <div className="flex flex-col justify-between items-center gap-4 ">
                    <img src={photo8} />
                    <p className="text-base font-bold text-header-blue">Graphic Design</p>
                    <p className="text-sm font-bold text-link-color">English Department</p>
                    <div className="flex flex-row gap-2">
                        <p className="text-price-grey text-base font-bold">$16.48</p>
                        <p className="text-price-green text-base font-bold">$6.48</p>
                    </div>

                </div>
                <div className="flex flex-col justify-between items-center gap-4 ">
                    <img src={photo3} />
                    <p className="text-base font-bold text-header-blue">Graphic Design</p>
                    <p className="text-sm font-bold text-link-color">English Department</p>
                    <div className="flex flex-row gap-2">
                        <p className="text-price-grey text-base font-bold">$16.48</p>
                        <p className="text-price-green text-base font-bold">$6.48</p>
                    </div>

                </div>
            </div>
            <div className="pt-24 pb-20">
                <button className="rounded border border-login text-login text-sm font-bold w-64 h-14">LOAD MORE PRODUCTS </button>
            </div>

        </div>
    )
}