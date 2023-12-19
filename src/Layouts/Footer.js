import React from "react";
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";


export const Footer = () => {
    return (
        <div className=" h-auto flex flex-col sm:px-52 px-10">

            <div className="flex sm:flex-row flex-wrap sm:items-center justify-between py-11 flex-col items-start sm:gap-0 gap-3">
                <div><p className="text-header-blue text-2xl font-bold">Bandage</p></div>
                <div className=" flex flex-row gap-3">
                    <button>
                        <FontAwesomeIcon icon={faFacebook} className="text-icon-blue" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faInstagram} className="text-icon-blue" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faTwitter} className="text-icon-blue" />
                    </button>
                </div>
            </div>

            <div className="py-12 flex sm:flex-row flex-wrap justify-between flex-col sm:gap-0 gap-4">

                <div className="flex flex-col flex-wrap justify-between gap-4">
                    <p className="text-header-blue text-base font-bold">Company Info</p>
                    <NavLink to="#" className="text-sm text-link-color font-bold">About Us</NavLink>
                    <NavLink to="#" className="text-sm text-link-color font-bold">Carrier</NavLink>
                    <NavLink to="#" className="text-sm text-link-color font-bold">We are hiring</NavLink>
                    <NavLink to="#" className="text-sm text-link-color font-bold">Blog</NavLink>

                </div>
                <div className="flex flex-col flex-wrap justify-between gap-4">
                    <p className="text-header-blue text-base font-bold">Legal</p>
                    <NavLink to="#" className="text-sm text-link-color font-bold">About Us</NavLink>
                    <NavLink to="#" className="text-sm text-link-color font-bold">Carrier</NavLink>
                    <NavLink to="#" className="text-sm text-link-color font-bold">We are hiring</NavLink>
                    <NavLink to="#" className="text-sm text-link-color font-bold">Blog</NavLink>

                </div>
                <div className="flex flex-col flex-wrap justify-between gap-4">
                    <p className="text-header-blue text-base font-bold">Features</p>
                    <NavLink to="#" className="text-sm text-link-color font-bold">Business Marketing</NavLink>
                    <NavLink to="#" className="text-sm text-link-color font-bold">User Analytic</NavLink>
                    <NavLink to="#" className="text-sm text-link-color font-bold">Live Chat</NavLink>
                    <NavLink to="#" className="text-sm text-link-color font-bold">Unlimited Support</NavLink>

                </div>
                <div className="flex flex-col flex-wrap justify-between gap-4">
                    <p className="text-header-blue text-base font-bold">Resources</p>
                    <NavLink to="#" className="text-sm text-link-color font-bold">IOS & Android</NavLink>
                    <NavLink to="#" className="text-sm text-link-color font-bold">Watch a Demo</NavLink>
                    <NavLink to="#" className="text-sm text-link-color font-bold">Customers</NavLink>
                    <NavLink to="#" className="text-sm text-link-color font-bold">API</NavLink>
                </div>

                <div className="flex flex-col flex-wrap gap-4">

                    <p className="text-header-blue text-base font-bold">Get In Touch</p>

                    <div className="flex flex-row">
                        <form>
                            <label>
                                <input type="text" placeholder="Your E-mail" className="border-2 h-14 rounded text-link-color text-sm font-normal" />
                            </label>
                        </form>
                        <button className="rounded bg-sky-500 text-white text-lg font-light w-32 h-14">Subscribe</button>
                    </div>
                    <p className="text-xs text-link-color font-light">Lorem impsum dolor amit</p>
                </div>

            </div>
            <div className="py-6">
                <p className="text-sm text-link-color font-bold">Made With Love By Figmaland All Right Reserved </p>

            </div>

        </div>
    )
}