import React from "react";
import { Header } from "../Layouts/Header";
import { Card } from "../Layouts/Card";
import { Clients } from "../Layouts/Clients";
import { Footer } from "../Layouts/Footer";
import imgProduct from "../photos/unsplash_QANOF9iJlFs.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faGreaterThan, faHeart, faStar, faShoppingCart as faShoppingBasket } from "@fortawesome/free-solid-svg-icons";
import ProductSlider from "../Layouts/SliderProduct";
import ellipse from "../photos/Ellipse 14.svg";
import ellipse2 from "../photos/Ellipse 15.svg";
import ellipse3 from "../photos/Ellipse 16.svg";
import ellipse4 from "../photos/Ellipse 17.svg";
import { NavLink } from "react-router-dom";
import Slider2 from "../Layouts/Slider2";



export const ProductPage = () => {
    return (
        <div>
            <Header />
            <div className="flex sm:flex-row gap-3 sm:justify-start items-center sm:ml-[12rem] sm:py-6 justify-center py-12">
                <NavLink to="/" className="text-header-blue text-sm font-bold">Home</NavLink>
                <FontAwesomeIcon icon={faGreaterThan} className="text-price-grey" />
                <NavLink to="/shop" className="text-sm font-bold text-price-grey">Shop</NavLink>
            </div>
            <div className="flex sm:flex-row sm:px-48 gap-8 pb-20 flex-col px-12 sm:w-full">

                <ProductSlider />

                <div className="flex flex-col justify-between h-[30rem] pb-4 sm:w-full">
                    <h2 className="text-[#252B42] text-xl font-normal">Floating Phone</h2>
                    <div className="flex flex-row gap-4">
                        <div className="star-rating">
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                            <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                            <FontAwesomeIcon icon={faStar} />
                        </div>
                        <p className="text-[#737373] text-sm font-bold">10 Reviews</p>

                    </div>
                    <p className="text-[#252B42] text-2xl font-bold">$1,139.33</p>
                    <div className="flex flex-row">
                        <p className="text-[#737373] text-sm font-bold">Availability:</p>
                        <p className="text-login text-sm font-bold">In Stock</p>

                    </div>
                    <p className="text-[#858585] text-sm font-normal">
                        Met minim Mollie non desert Alamo est sit cliquey dolor<br />
                        do met sent. RELIT official consequent door ENIM RELIT Mollie.<br />
                        Excitation venial consequent sent nostrum met.
                    </p>
                    <hr />
                    <div className="flex flex-row gap-2">
                        <img src={ellipse} alt="ellipse" className="w-8" />
                        <img src={ellipse2} alt="ellipse" className="w-8" />
                        <img src={ellipse3} alt="ellipse" className="w-8" />
                        <img src={ellipse4} alt="ellipse" className="w-8" />
                    </div>
                    <div className="flex flex-row gap-2">
                        <button className="flex flex-row items-center justify-center gap-2 rounded border border-login text-white bg-login text-sm font-bold w-40 h-10">
                            <p>Select Options</p>
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faHeart} className="border rounded-full w-5 h-5 bg-white px-3 py-3" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faShoppingBasket} className="border rounded-full w-5 h-5 bg-white px-3 py-3" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faEye} className="border rounded-full w-5 h-5 bg-white px-3 py-3" />
                        </button>
                    </div>

                </div>
            </div>

            <div className="flex flex-row justify-center items-center sm:px-48 gap-8 pb-8">
                <p>Description</p>
                <p>Additional Information</p>
                <p>Reviews</p>
            </div>
            <hr className="py-8 sm:w-[71rem] sm:ml-48" />
            <div className="flex sm:flex-row justify-between pt-6 pb-12 sm:px-48 sm:h-157 flex-col px-12 sm:gap-0 gap-8">

                <div>
                    <img src={imgProduct} className="sm:h-[25rem] h-64 w-full" />
                </div>

                <div className="flex flex-col gap-6">
                    <p className="text-[#252B42] text-2xl font-bold">the quick fox jumps over </p>
                    <p className="text-[#737373] text-sm font-normal">Met minim Mollie non desert Alamo est sit<br /> cliquey dolor do met sent. RELIT official<br /> consequent door ENIM RELIT Mollie.<br /> Excitation venial consequent sent nostrum<br /> met.</p>
                    <p className="text-[#737373] text-sm font-normal">Met minim Mollie non desert Alamo est sit<br /> cliquey dolor do met sent. RELIT official<br /> consequent door ENIM RELIT Mollie.<br /> Excitation venial consequent sent nostrum<br /> met.</p>
                    <p className="text-[#737373] text-sm font-normal">Met minim Mollie non desert Alamo est sit<br /> cliquey dolor do met sent. RELIT official<br /> consequent door ENIM RELIT Mollie.<br /> Excitation venial consequent sent nostrum<br /> met.</p>
                </div>

                <div className="flex flex-col gap-6">
                    <p className="text-[#252B42] text-2xl font-bold">the quick fox jumps over </p>
                    <p className="text-[#737373] text-sm font-bold"><FontAwesomeIcon icon={faGreaterThan} /> the quick fox jumps over the lazy dog</p>
                    <p className="text-[#737373] text-sm font-bold"><FontAwesomeIcon icon={faGreaterThan} /> the quick fox jumps over the lazy dog</p>
                    <p className="text-[#737373] text-sm font-bold"><FontAwesomeIcon icon={faGreaterThan} /> the quick fox jumps over the lazy dog</p>
                    <p className="text-[#737373] text-sm font-bold"><FontAwesomeIcon icon={faGreaterThan} /> the quick fox jumps over the lazy dog</p>
                    <p className="text-[#252B42] text-2xl font-bold">the quick fox jumps over </p>
                    <p className="text-[#737373] text-sm font-bold"><FontAwesomeIcon icon={faGreaterThan} /> the quick fox jumps over the lazy dog</p>
                    <p className="text-[#737373] text-sm font-bold"><FontAwesomeIcon icon={faGreaterThan} /> the quick fox jumps over the lazy dog</p>
                    <p className="text-[#737373] text-sm font-bold"><FontAwesomeIcon icon={faGreaterThan} /> the quick fox jumps over the lazy dog</p>


                </div>

            </div>

            <div className="bg-[#FAFAFA] pt-12">
                <div className="flex flex-col sm:px-48 sm:gap-6 px-12 gap-12 items-center sm:items-start">
                    <h2 className="text-[#252B42] text-2xl font-bold">BESTSELLER PRODUCTS</h2>
                    <hr />
                </div>
                <Card />
            </div>
            <Clients />
            <Footer />
        </div>
    )
}