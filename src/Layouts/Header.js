import React, { useEffect, useState } from "react";
import "../index.css";
import phone from "../Icons/phone.svg";
import message from "../Icons/message.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faSearch, faShoppingCart as faShoppingBasket, faHeart as faHeartSolid, faUser, faBars, faArrowRightFromBracket, faArrowDown, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { Bounce, toast } from "react-toastify";
import Gravatar from "react-gravatar";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { loginSuccess } from "../store/actions/UserActions";
import { fetchCategories } from "../store/actions/GlobalActions";
import { fetchProducts, setCategoryProducts, setFilterProducts, setSortProducts, setTotalProductCount } from "../store/actions/ProductActions";
import { ShopBasket } from "./ShopBasket";
import { fetchFromLocal } from "../store/actions/ShoppingCardAction";




export const Header = () => {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const [shopOpen, setShopOpen] = useState(false);
    const [basketOpen, setBasketOpen] = useState(false);
    const [productCount, setProductCount] = useState(0);
    const [category, setCategory] = useState();
    const dispatch = useDispatch()
    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };
    const shopmenu = () => {
        setShopOpen(!shopOpen);
    }

    const loggedIn = localStorage.getItem("isloggedIn");
    // console.log("loggedin >", loggedIn);



    const logOut = () => {
        localStorage.removeItem("isloggedIn");
        localStorage.removeItem("token");
        navigate("/");
        toast.warn("Logged Out!", {
            style: {
                background: "red",
                color: "white",
            },
            position: "bottom-center",
            transition: Bounce,
        })

    };
    const filtre = useSelector((store) => store.product.filter);
    const sort = useSelector((store) => store.product.sort);

    useEffect(() => {

        const token = localStorage.getItem("token");

        if (token) {

            axios.get("https://workintech-fe-ecommerce.onrender.com/verify", {
                headers: {
                    Authorization: token,
                }
            }).then((res) => {
                // console.log("authorization data >", res.data);
                dispatch(loginSuccess(res.data));
            }).catch((err) => {
                console.log(err);
            })
        }
        dispatch(fetchCategories())
            .then((response) => {
                // console.log("Categories fetched successfully", response.data);
            })
            .catch((error) => {
                console.error('Error fetching categories:', error);
            });

        dispatch(fetchProducts())
            .then((response) => {
                // console.log("Categories fetched successfully", response.data);
            })
            .catch((error) => {
                console.error('Error fetching products:', error);
            });


        dispatch(fetchFromLocal());




    }, [])


    const CategoryChange = (e, cat) => {
        e.preventDefault()
        const categoryId = cat.id;
        // console.log("ÜRÜÜÜÜÜÜNNNNNNNNNNNNNNN>>>>>>>>>>>", cat);
        setCategory(categoryId);
        dispatch(setCategoryProducts(categoryId));
        dispatch(fetchProducts(filtre, categoryId, sort));
        let gender = cat.gender === "k" ? "Kadın" : "Erkek";
        navigate(`/shopping/${gender}/${cat.title}/`);
    }
    const handleMouseEnter = () => {
        setShopOpen(true);
    }
    const handleMouseLeave = () => {
        setShopOpen(false);
    }


    const name = useSelector((store) => store.user.userName);
    const email = useSelector((store) => store.user.userMail);

    const categories = useSelector((store) => store.global.categories);
    // console.log("categories>>", categories);
    const female = categories.filter(gender => gender.code.charAt(0) === "k");
    // console.log("kadın", female[0].title);
    const male = categories.filter(gender => gender.code.charAt(0) === "e");
    // console.log("female>>", female);
    // console.log("male>>", male);

    const handleShopCard = () => {
        setBasketOpen(!basketOpen);
    }
    const card = useSelector((store) => store.shoppingcard.cart);
    useEffect(() => {
        setProductCount(card.length);
    }, [card])



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

                                <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex flex-row gap-2 relative items-center">
                                    <NavLink to="/shop" className="text-link-color text-3xl font-normal hover:text-black hover:scale-125 transition-transform delay-75" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Shop</NavLink>

                                    <div className="flex flex-col dropdown items-center transition-transform delay-150 gap-0">
                                        <div className="flex flex-col items-center justify-between">
                                            <button
                                                onClick={shopmenu}
                                                className=" text-white focus:outline-none focus:border-none transition ease-in-out delay-100"
                                            >
                                                <FontAwesomeIcon icon={faCaretDown} className="text-black text-3xl" />
                                            </button>
                                        </div>
                                        {shopOpen && (
                                            <div className="flex flex-row gap-8 absolute top-[65%] border rounded border-black bg-gray-50 p-5
                                    transition-opacity ease-in delay-150 shadow-md" >
                                                <div className="flex flex-col items-center justify-center gap-2 hover:animate-fade-in">
                                                    <p className="text-sm font-bold"><strong>Kadın</strong></p>
                                                    {female.map((cat) => (

                                                        <button onClick={(e) => CategoryChange(e, cat)} className="hover:scale-105 hover:font-bold transition-transform">
                                                            {cat.title}
                                                        </button>
                                                    ))}
                                                </div>
                                                <div className="flex flex-col items-center  gap-2">
                                                    <p className="text-sm font-bold"><strong>Erkek</strong></p>
                                                    {male.map((cat) => (

                                                        <button onClick={(e) => CategoryChange(e, cat)} className="hover:scale-105 hover:font-bold">
                                                            {cat.title}
                                                        </button>
                                                    ))}
                                                </div>
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <a href="/about" className="block text-link-color text-3xl font-normal">About</a>
                                <a href="#" className="block text-link-color text-3xl font-normal">Blog</a>
                                <a href="/contact" className="block text-link-color text-3xl font-normal">Contact</a>
                                <a href="#" className="block text-link-color text-3xl font-normal">Pages</a>
                                {!loggedIn &&
                                    <div className="sm:hidden flex flex-col justify-between content-center items-center gap-4">

                                        <NavLink to="/login">
                                            <button className="flex flex-row items-center gap-2">
                                                <p className="text-link-color text-3xl font-bold">Login </p>
                                            </button>
                                        </NavLink>

                                        <NavLink to="/signup">
                                            <button>
                                                <p className="text-link-color font-bold text-3xl">Register</p>
                                            </button>
                                        </NavLink>
                                    </div>
                                }
                                {loggedIn &&
                                    <div className="sm:hidden flex flex-col justify-between content-center items-center gap-6">
                                        <Gravatar email={email} className="w-8 h-8 rounded-full" />
                                        <p className="text-header-blue text-3xl font-bold items-center justify-center">{name}</p>
                                        <button onClick={logOut} className="text-login text-3xl font-bold items-center gap-3 flex flex-row">
                                            <p>Log Out</p>
                                            <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-login" />
                                        </button>
                                    </div>

                                }
                            </div>
                        </div>
                        <div className="hidden sm:flex sm:flex-row sm:flex-wrap sm:justify-between sm:gap-4 sm:text-sm sm:content-center relative">
                            <NavLink to="/" className="text-sm text-link-color font-bold hover:text-black hover:scale-125 transition-transform delay-75">Home</NavLink>
                            <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className="flex flex-row gap-2">
                                <NavLink to="/shop" className="text-sm text-link-color font-bold hover:text-black hover:scale-125 transition-transform delay-75" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>Shop</NavLink>

                                <div className="flex flex-col dropdown items-center transition-transform delay-150 gap-0" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
                                    <div className="flex flex-col items-center justify-between">
                                        <button
                                            onClick={shopmenu}
                                            className=" text-white focus:outline-none focus:border-none transition ease-in-out delay-100"
                                        >
                                            <FontAwesomeIcon icon={faCaretDown} className="text-black" />
                                        </button>
                                    </div>
                                    {shopOpen && (
                                        <div className="flex flex-row gap-8 absolute top-[65%] z-20 border rounded border-black bg-gray-50 p-5
                                    transition-opacity ease-in delay-150 shadow-md" >
                                            <div className="flex flex-col items-center justify-center gap-2 hover:animate-fade-in">
                                                <p className="text-sm font-bold"><strong>Kadın</strong></p>
                                                {female.map((cat) => (

                                                    <button onClick={(e) => CategoryChange(e, cat)} className="hover:scale-105 hover:font-bold transition-transform">
                                                        {cat.title}
                                                    </button>
                                                ))}
                                            </div>
                                            <div className="flex flex-col items-center  gap-2">
                                                <p className="text-sm font-bold"><strong>Erkek</strong></p>
                                                {male.map((cat) => (

                                                    <button onClick={(e) => CategoryChange(e, cat)} className="hover:scale-105 hover:font-bold">
                                                        {cat.title}
                                                    </button>
                                                ))}
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                            <NavLink to="/about" className="text-sm text-link-color font-bold hover:text-black hover:scale-125 transition-transform delay-75">About</NavLink>
                            <NavLink to="#" className="text-sm text-link-color font-bold hover:text-black hover:scale-125 transition-transform delay-75">Blog</NavLink>
                            <NavLink to="/contact" className="text-sm text-link-color font-bold hover:text-black hover:scale-125 transition-transform delay-75">Contact</NavLink>
                            <NavLink to="#" className="text-sm text-link-color font-bold hover:text-black hover:scale-125 transition-transform delay-75">Pages</NavLink>

                        </div>
                    </div>

                    <div className="hidden sm:flex flex-row gap-8">


                        {!loggedIn &&
                            <div className="hidden sm:flex flex-row justify-between content-center items-center gap-2">

                                <NavLink to="/login">
                                    <button className="flex flex-row items-center gap-2">
                                        <FontAwesomeIcon icon={faUser} className="text-icon-blue w-3 h-3" />
                                        <p className="text-login text-sm font-bold">Login / </p>
                                    </button>
                                </NavLink>

                                <NavLink to="/signup">
                                    <button>
                                        <p className="text-login text-sm font-bold">Register</p>
                                    </button>
                                </NavLink>
                            </div>
                        }
                        {loggedIn &&
                            <div className="hidden sm:flex flex-row justify-between content-center items-center gap-6">
                                <Gravatar email={email} className="w-8 h-8 rounded-full hover:scale-125 cursor-pointer transition-transform delay-100" />
                                <p className="text-header-blue text-base font-bold items-center justify-center">{name}</p>
                                <button onClick={logOut} className="text-login text-base font-bold items-center gap-3 flex flex-row">
                                    <p>Log Out</p>
                                    <FontAwesomeIcon icon={faArrowRightFromBracket} className="text-login" />
                                </button>
                            </div>

                        }



                        <div className="flex flex-row justify-between gap-8 items-center">
                            <div>
                                <button>
                                    <FontAwesomeIcon icon={faSearch} className="text-icon-blue" />

                                </button>
                            </div>

                            <div className="flex flex-col justify-between items-center" onClick={handleShopCard}>
                                <div className="flex flex-row justify-between items-center gap-2">
                                    <button className="flex flex-row items-center gap-2">
                                        <FontAwesomeIcon icon={faShoppingBasket} className="text-icon-blue" />
                                    </button>
                                    <p className="text-login">{productCount}</p>
                                </div>
                            </div>
                            <div className="absolute top-[15%] z-20 right-4">
                                {basketOpen && (
                                    <ShopBasket />
                                )}</div>

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
        </div >
    )
}