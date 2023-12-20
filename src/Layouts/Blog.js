import React from "react";
import "../index.css";
import featured1 from "../photos/featured-1.png";
import featured2 from "../photos/featured-2.png";
import heart from "../Icons/icn favorite.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faGreaterThan, faHeart, faShoppingCart as faShoppingBasket, faStar } from "@fortawesome/free-solid-svg-icons";
import download from "../photos/download.svg";
import ellipse from "../photos/Ellipse 14.svg";
import ellipse2 from "../photos/Ellipse 15.svg";
import ellipse3 from "../photos/Ellipse 16.svg";
import ellipse4 from "../photos/Ellipse 17.svg";
import oclock from "../photos/icon cool-icon-1.svg";
import wawe from "../photos/icon carbon-chart-area-smooth.svg";
import table from "../photos/icon ant-design-area-chart-outlined.svg";



export const Blog = () => {
    return (
        <div className="flex flex-col py-20">

            <div className="flex flex-col flex-wrap justify-between items-center pb-24 gap-4">
                <p className="text-login text-sm font-bold">Practice Advice</p>
                <p className="text-header-blue text-4xl font-bold">Featured Posts</p>
            </div>

            <div className=" flex sm:flex-row flex-wrap sm:justify-between sm:px-48 flex-col justify-center items-center">

                <div className="flex sm:flex-row gap-8 flex-col sm:w-[66rem] w-[21rem] flex-wrap">

                    <div className=" flex relative z-1000 sm:h-[25rem]">

                        <img src={featured1} className="w-full sm:h-[25rem] h-[18rem] sm:min-h-[18rem]" />
                    </div>
                    <div className="z-2000 absolute bg-left-top pl-6 pt-6">
                        <p className="rounded border bg-danger-color text-sm font-bold text-white px-2 py-2 w-14 h-auto text-center">Sale</p>
                    </div>
                    <div className="hidden sm:flex flex-row justify-between pl-6 pt-80 z-2000 absolute bg-bottom gap-4">
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


                    <div className="flex flex-col justify-between sm:px-4 pb-9 pt-4 sm:gap-0 gap-4">
                        <div className="flex flex-row sm:justify-evenly items-center gap-12 justify-between">
                            <p className="text-login text-sm font-bold">English Department</p>
                            <div className="flex flex-row justify-stretch rounded-3xl bg-header-blue w-14 h-7  py-1 content-center items-center">
                                <FontAwesomeIcon icon={faStar} className=" w-4 h-4 px-2 py-3 text-yellow-400" />
                                <p className="text-white text-xs font-normal">4.9</p>
                            </div>
                        </div>
                        <p className="text-header-blue text-base font-bold">Graphic Design</p>
                        <p className="text-link-color text-sm font-normal">We focus on ergonomics and<br />
                            meeting you where you work. It's<br />
                            only a keystroke away.</p>

                        <div className="flex flex-row gap-4">
                            <img src={download} />
                            <p className="text-link-color text-sm font-bold">15 Sales</p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <p className="text-price-grey text-base font-bold">$16.48</p>
                            <p className="text-price-green text-base font-bold">$6.48</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <img src={ellipse} />
                            <img src={ellipse2} />
                            <img src={ellipse3} />
                            <img src={ellipse4} />
                        </div>
                        <div className="flex flex-row gap-2">
                            <img src={oclock} />
                            <p className="text-xs text-link-color font-normal">22h...</p>
                            <img src={wawe} />
                            <p className="text-xs text-link-color font-normal">64 Lessons</p>
                            <img src={table} />
                            <p className="text-xs text-link-color font-normal">Progress</p>

                        </div>
                        <button className="flex flex-row items-center justify-center gap-2 rounded-3xl border border-login text-login text-sm font-bold w-32 h-14">
                            <p>Learn More</p>
                            <FontAwesomeIcon icon={faGreaterThan} />
                        </button>
                    </div>


                    <div className=" flex relative z-1000 ">

                        <img src={featured2} className="w-full sm:h-auto h-[18rem]" />
                        <div className="z-2000 absolute bg-left-top pl-6 pt-6">
                            <p className="rounded border bg-danger-color text-sm font-bold text-white px-2 py-2 w-14 h-auto text-center">Sale</p>
                        </div>
                        <div className="hidden sm:flex flex-row justify-between pl-6 pt-80 z-2000 absolute bg-bottom gap-4">
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



                    <div className="flex flex-col justify-between sm:px-4 pb-9 pt-4 sm:gap-0 gap-4">
                        <div className="flex flex-row sm:justify-evenly items-center gap-12 justify-between">
                            <p className="text-login text-sm font-bold">English Department</p>
                            <div className="flex flex-row justify-stretch rounded-3xl bg-header-blue w-14 h-7  py-1 content-center items-center">
                                <FontAwesomeIcon icon={faStar} className=" w-4 h-4 px-2 py-3 text-yellow-400" />
                                <p className="text-white text-xs font-normal">4.9</p>
                            </div>
                        </div>
                        <p className="text-header-blue text-base font-bold">Graphic Design</p>
                        <p className="text-link-color text-sm font-normal">We focus on ergonomics and<br />
                            meeting you where you work. It's<br />
                            only a keystroke away.</p>

                        <div className="flex flex-row gap-4">
                            <img src={download} />
                            <p className="text-link-color text-sm font-bold">15 Sales</p>
                        </div>

                        <div className="flex flex-row gap-2">
                            <p className="text-price-grey text-base font-bold">$16.48</p>
                            <p className="text-price-green text-base font-bold">$6.48</p>
                        </div>
                        <div className="flex flex-row gap-2">
                            <img src={ellipse} />
                            <img src={ellipse2} />
                            <img src={ellipse3} />
                            <img src={ellipse4} />
                        </div>
                        <div className="flex flex-row gap-2">
                            <img src={oclock} />
                            <p className="text-xs text-link-color font-normal">22h...</p>
                            <img src={wawe} />
                            <p className="text-xs text-link-color font-normal">64 Lessons</p>
                            <img src={table} />
                            <p className="text-xs text-link-color font-normal">Progress</p>

                        </div>
                        <button className="flex flex-row items-center justify-center gap-2 rounded-3xl border border-login text-login text-sm font-bold w-32 h-14">
                            <p>Learn More</p>
                            <FontAwesomeIcon icon={faGreaterThan} />
                        </button>
                    </div>

                </div>

            </div>
        </div>
    )
}