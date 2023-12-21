import React, { useState } from "react";
import "../index.css";
import phone from "../Icons/phone.svg";
import message from "../Icons/message.svg";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingCart as faShoppingBasket, faHeart as faHeartSolid, faUser, faBars } from "@fortawesome/free-solid-svg-icons";



export const Header = () => {

    const [isOpen, setIsOpen] = useState(false);
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };


    return (
        <div >
            <div className="sm:bg-header-blue sm:h-auto sm:py-4 sm:flex sm:flex-row hidden">

                <div className="sm:w-screen sm:flex sm:flex-row sm:flex-wrap sm:px-6 sm:content-center sm:items-center sm:justify-between">
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

                        <button>
                            <FontAwesomeIcon icon={faInstagram} className="text-white" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faYoutube} className="text-white" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faFacebook} className="text-white" />
                        </button>
                        <button>
                            <FontAwesomeIcon icon={faTwitter} className="text-white " />
                        </button>

                    </div>

                </div>
            </div>

            <div className=" sm:h-16 sm:flex sm:flex-row sm:flex-wrap sm:px-6 sm:content-center sm:items-center sm:py-2.5 px-0">

                <div className="sm:w-screen sm:flex sm:flex-row sm:flex-wrap sm:justify-between w-full">

                    <div className="sm:flex sm:flex-row flex flex-col items">
                        <div className=" flex flex-col gap-0 h-auto">
                            <div className="sm:mr-32 flex flex-row px-9 py-6 items-center gap-4 justify-between w-full">
                                <p className="text-site-name text-2xl font-bold">Bandage</p>

                                <div className="flex flex-row gap-4 items-center">
                                    <FontAwesomeIcon icon={faSearch} className="text-black sm:hidden" />
                                    <FontAwesomeIcon icon={faShoppingBasket} className="text-black sm:hidden" />

                                    <nav className="sm:hidden ">
                                        <div className="flex flex-col items-center justify-between">
                                            <div className="text-white font-bold"></div>
                                            <button
                                                onClick={toggleMenu}
                                                className="sm:hidden text-white focus:outline-none focus:border-none transition ease-in-out delay-100"
                                            >
                                                <FontAwesomeIcon icon={faBars} className="text-black" />
                                            </button>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                            <div className={`sm:hidden ${isOpen ? 'flex flex-col' : 'hidden'} lg:mt-0 items-center gap-8 py-24 transition ease-in-out delay-100`}>
                                <a href="/" className="block text-link-color text-3xl font-normal">Home</a>
                                <a href="/shop" className="block text-link-color text-3xl font-normal">Shop</a>
                                <a href="/about" className="block text-link-color text-3xl font-normal">About</a>
                                <a href="#" className="block text-link-color text-3xl font-normal">Blog</a>
                                <a href="/contact" className="block text-link-color text-3xl font-normal">Contact</a>
                                <a href="#" className="block text-link-color text-3xl font-normal">Pages</a>
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4 sm:text-sm sm:content-center">
                            <NavLink to="/" className="text-sm text-link-color font-bold">Home</NavLink>
                            <NavLink to="/shop" className="text-sm text-link-color font-bold">Shop</NavLink>
                            <NavLink to="/about" className="text-sm text-link-color font-bold">About</NavLink>
                            <NavLink to="#" className="text-sm text-link-color font-bold">Blog</NavLink>
                            <NavLink to="/contact" className="text-sm text-link-color font-bold">Contact</NavLink>
                            <NavLink to="#" className="text-sm text-link-color font-bold">Pages</NavLink>
                        </div>
                    </div>

                    <div className="hidden sm:flex flex-row gap-8">
                        <div className="hidden sm:flex flex-row justify-between content-center items-center gap-2">

                            <button className="flex flex-row items-center gap-2">
                                <FontAwesomeIcon icon={faUser} className="text-icon-blue w-3 h-3" />
                                <p className="text-login text-sm font-bold">Login / </p>
                            </button>

                            <NavLink to="/signup">
                                <button>
                                    <p className="text-login text-sm font-bold">Register</p>
                                </button>
                            </NavLink>
                        </div>

                        <div className="flex flex-row justify-between gap-8 items-center">
                            <div>
                                <button>
                                    <FontAwesomeIcon icon={faSearch} className="text-icon-blue" />

                                </button>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <button className="flex flex-row items-center gap-2">

                                    <FontAwesomeIcon icon={faShoppingBasket} className="text-icon-blue" />
                                    <p className="text-login">1</p>
                                </button>
                            </div>

                            <div className="flex flex-row justify-between items-center">
                                <button className="flex flex-row items-center gap-2">

                                    <FontAwesomeIcon icon={faHeartSolid} className="text-icon-blue" />
                                    <p className="text-login">1</p>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}