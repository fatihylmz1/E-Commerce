import React from "react";
import "../index.css";
import { Header } from "../Layouts/Header";
import { Clients } from "../Layouts/Clients";
import { Footer } from "../Layouts/Footer";
import { Products } from "../Layouts/Products";
import { faGreaterThan, faBorderAll, faListCheck } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { NavLink } from "react-router-dom";
import { ProductCard } from "../Layouts/ProductCard";



export const ProductListPage = () => {
    return (
        <div>
            <Header />
            <div className="px-40 py-12">
                <div className="flex flex-row justify-between">
                    <p className="text-2xl text-header-blue font-bold">Shop</p>
                    <div className="flex flex-row gap-3 items-center mr-4">
                        <NavLink to="/" className="text-header-blue text-sm font-bold">Home</NavLink>
                        <FontAwesomeIcon icon={faGreaterThan} className="text-price-grey" />
                        <NavLink to="/shop" className="text-sm font-bold text-price-grey">Shop</NavLink>
                    </div>
                </div>
            </div>

            <ProductCard />
            <div className="flex flex-row justify-between px-48 py-6 items-center">
                <div>
                    <p className="text-sm font-bold text-[#737373]">Showing all 12 results</p>
                </div>
                <div className="flex flex-row flex-wrap gap-4 items-center">
                    <p>Views</p>
                    <button>
                        <FontAwesomeIcon icon={faBorderAll} className="border rounded border-neutral-400 px-4 py-4 hover:bg-black hover:text-white" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faListCheck} className="border rounded border-neutral-400 px-4 py-4 hover:bg-black hover:text-white" />
                    </button>

                </div>
                <div className="flex flex-row flex-wrap items-center gap-4">

                    <select className="dropdown border rounded border-neutral-400 px-4 py-4 cursor-pointer">
                        <option>Popularity</option>
                        <option>Price</option>
                        <option>Alphabeth</option>
                    </select>

                    <div>
                        <button className="rounded bg-sky-500 text-white text-lg font-light w-32 h-14">Filter</button>
                    </div>
                </div>

            </div>
            <Products />
            <div className="flex flex-row items-center px-40 justify-center pb-12">
                <button className="rounded border border-neutral-400 text-login text-sm font-bold hover:bg-login hover:text-white w-16 h-14 transition-colors">First</button>
                <button className="rounded border border-neutral-400 text-login text-sm font-bold hover:bg-login hover:text-white w-8 h-14">1</button>
                <button className="rounded border border-neutral-400 text-login text-sm font-bold hover:bg-login hover:text-white w-8 h-14">2</button>
                <button className="rounded border border-neutral-400 text-login text-sm font-bold hover:bg-login hover:text-white w-8 h-14">3</button>
                <button className="rounded border border-neutral-400 text-login text-sm font-bold hover:bg-login hover:text-white w-16 h-14">Last</button>
            </div>
            <Clients />
            <Footer />
        </div>
    )
}