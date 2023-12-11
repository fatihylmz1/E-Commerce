import React from "react";
import "../index.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, } from '@fortawesome/free-brands-svg-icons';
import { NavLink } from "react-router-dom";


export const Footer = () => {
    return (
        <div className="w-screen h-auto flex flex-col px-52">

            <div className="flex flex-row flex-wrap items-center justify-between py-11">
                <div><p className="text-header-blue text-2xl font-bold">Bandage</p></div>
                <div className=" flex flex-row gap-3">
                    <FontAwesomeIcon icon={faFacebook} className="text-icon-blue" />
                    <FontAwesomeIcon icon={faInstagram} className="text-icon-blue" />
                    <FontAwesomeIcon icon={faTwitter} className="text-icon-blue" />
                </div>
            </div>

            <div className="py-12 flex flex-row flex-wrap justify-between">

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