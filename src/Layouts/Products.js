import React from "react";
import "../index.css";
import product1 from "../photos/products/product-cover-1.png";
import product2 from "../photos/products/product-cover-2.png";
import product3 from "../photos/products/product-cover-3.png";
import product4 from "../photos/products/product-cover-4.png";
import product5 from "../photos/products/product-cover-5.png";
import product6 from "../photos/products/product-cover-6.png";
import product7 from "../photos/products/product-cover-7.png";
import product8 from "../photos/products/product-cover-8.png";
import product9 from "../photos/products/product-cover-9.png";
import product10 from "../photos/products/product-cover-10.png";
import product11 from "../photos/products/product-cover-11.png";
import product12 from "../photos/products/product-cover-12.png";
import ellipse from "../photos/Ellipse 14.svg";
import ellipse2 from "../photos/Ellipse 15.svg";
import ellipse3 from "../photos/Ellipse 16.svg";
import ellipse4 from "../photos/Ellipse 17.svg";

const products = [product1, product2, product3, product4, product5, product6, product7, product8, product9, product10, product11, product12]

export const Products = () => {
    return (
        <div className=" flex flex-col flex-wrap justify-between items-center px-40 py-20">


            <div className="flex flex-row flex-wrap justify-between pt-6 px-6 gap-4">
                {products.map((product) => (
                    <div className="flex flex-col justify-between items-center gap-4 mb-16">
                        <img src={product} alt="product" />
                        <p className="text-base font-bold text-header-blue">Graphic Design</p>
                        <p className="text-sm font-bold text-link-color">English Department</p>
                        <div className="flex flex-row gap-2">
                            <p className="text-price-grey text-base font-bold">$16.48</p>
                            <p className="text-price-green text-base font-bold">$6.48</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <img src={ellipse} alt="ellipse" />
                            <img src={ellipse2} alt="ellipse" />
                            <img src={ellipse3} alt="ellipse" />
                            <img src={ellipse4} alt="ellipse" />
                        </div>

                    </div>
                ))}

            </div>
        </div>
    )
}
