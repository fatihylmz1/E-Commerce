import React from "react";
import "../index.css";
import phone from "../Icons/phone.svg";
import message from "../Icons/message.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingCart as faShoppingBasket, faHeart as faHeartSolid, faUser } from "@fortawesome/free-solid-svg-icons";



export const Header = () => {
    return (
        <div className="w-screen">
            <div className="w-screen bg-header-blue h-14 flex flex-row">

                <div className="w-screen flex flex-row flex-wrap px-6 content-center items-center justify-between">
                    <div className="flex flex-row flex-wrap">
                        <div className="flex flex-row gap-1.5 flex-wrap mr-8">
                            <img src={phone} className="w-5 h-5" />
                            <p className="text-white text-sm font-normal">(255) 555 01-18</p>
                        </div>

                        <div className="flex flex-row gap-1.5 flex-wrap">
                            <img src={message} className="w-5 h-5" />
                            <p className="text-white text-sm font-normal">michelle.rivera@example.com</p>
                        </div>
                    </div>

                    <div className="mr-12">
                        <p className="text-white text-sm font-bold">Follow Us  and get a chance to win 80% off</p>
                    </div>

                    <div className="flex flex-row gap-3 items-center">
                        <p className="text-white text-sm font-bold">Follow Us :</p>

                        <FontAwesomeIcon icon={faInstagram} className="text-white" />
                        <FontAwesomeIcon icon={faYoutube} className="text-white" />
                        <FontAwesomeIcon icon={faFacebook} className="text-white" />
                        <FontAwesomeIcon icon={faTwitter} className="text-white " />

                    </div>

                </div>
            </div>

            <div className="w-screen h-16 flex flex-row flex-wrap px-6 content-center items-center py-2.5">

                <div className="w-screen flex flex-row flex-wrap justify-between">

                    <div className="flex flex-row">
                        <div className="mr-32">
                            <p className="text-site-name text-2xl font-bold">Bandage</p>
                        </div>
                        <div className="flex flex-row flex-wrap justify-between gap-4 text-sm content-center">
                            <NavLink to="/" className="text-sm text-link-color font-bold">Home</NavLink>
                            <NavLink to="/shop" className="text-sm text-link-color font-bold">Shop</NavLink>
                            <NavLink to="#" className="text-sm text-link-color font-bold">About</NavLink>
                            <NavLink to="#" className="text-sm text-link-color font-bold">Blog</NavLink>
                            <NavLink to="#" className="text-sm text-link-color font-bold">Contact</NavLink>
                            <NavLink to="#" className="text-sm text-link-color font-bold">Pages</NavLink>
                        </div>
                    </div>

                    <div className="flex flex-row gap-8">
                        <div className="flex flex-row justify-between content-center items-center gap-2">

                            <FontAwesomeIcon icon={faUser} className="text-icon-blue w-3 h-3" />
                            <p className="text-login text-sm font-bold">Login / Register</p>
                        </div>

                        <div className="flex flex-row justify-between gap-8 items-center">
                            <div>

                                <FontAwesomeIcon icon={faSearch} className="text-icon-blue" />
                            </div>

                            <div className="flex flex-row justify-between items-center">

                                <FontAwesomeIcon icon={faShoppingBasket} className="text-icon-blue" />
                                <p>1</p>
                            </div>

                            <div className="flex flex-row justify-between items-center">

                                <FontAwesomeIcon icon={faHeartSolid} className="text-icon-blue" />
                                <p>1</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}