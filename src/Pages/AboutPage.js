import React from "react";
import { Header } from "../Layouts/Header";
import { Clients } from "../Layouts/Clients";
import { Footer } from "../Layouts/Footer";
import noneImg from "../photos/none.png";
import video from "../photos/Video card.png";
import { Team } from "../Layouts/Team";
import unsplash from "../photos/unsplash_vjMgqUkS8q8.png";


export const AboutPage = () => {

    return (
        <div>
            <Header />
            <div className="flex sm:flex-row justify-center sm:px-48 flex-col">
                <div className="w-full rounded-2xl flex sm:flex-row sm:justify-stretch items-center gap-12 sm:z-1000 sm:relative sm:h-159 flex-wrap flex-col justify-between">
                    <div className="flex flex-col justify-between sm:w-1/2 sm:h-80 flex-wrap sm:items-start items-center sm:gap-0 gap-6 sm:py-0 py-24">
                        <p className="text-header-blue text-base font-bold">ABOUT COMPANY</p>
                        <p className="text-header-blue sm:text-6xl text-[2.5rem] font-bold">ABOUT US</p>
                        <p className="text-gray-500 text-xl font-normal sm:text-start text-center">We know how large objects will act,<br />
                            but things on a small scale.</p>
                        <button className="rounded bg-sky-500 text-white text-2xl font-bold w-60 h-16">Get Quote Now</button>
                    </div>
                    <div className="sm:w-1/2 flex justify-end sm:z-2000 sm:absolute sm:ml-[40rem] h-full w-full sm:px-0 px-6">
                        <img src={noneImg} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col sm:gap-6 sm:py-6 sm:px-48 items-center sm:items-start gap-10 py-12">
                <p className="text-[#E74040] text-sm font-normal sm:text-start text-center">Problems trying</p>

                <div className="flex sm:flex-row justify-between w-full flex-col sm:items-start items-center sm:gap-0 gap-24">
                    <p className="text-header-blue text-2xl font-bold ">Met minim Mollie non desert<br /> Alamo est sit cliquey dolor do<br /> met sent.</p>
                    <p className="text-[#737373] text-sm font-bold sm:text-start text-center">Problems trying to resolve the conflict between the two major realms of<br /> Classical physics: Newtonian mechanics</p>
                </div>
            </div>


            <div className="flex sm:flex-row justify-between sm:px-48 py-20 flex-col sm:gap-0 gap-8">
                <div className="flex flex-col items-center">
                    <p className="text-[#252B42] text-[3.625rem] font-bold">15K</p>
                    <p className="text-[#737373] text-base font-bold">Happy Customers</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-[#252B42] text-[3.625rem] font-bold">150K</p>
                    <p className="text-[#737373] text-base font-bold">Monthly Visitors</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-[#252B42] text-[3.625rem] font-bold">15</p>
                    <p className="text-[#737373] text-base font-bold">Countries Worldwide</p>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-[#252B42] text-[3.625rem] font-bold">100+</p>
                    <p className="text-[#737373] text-base font-bold">Top Partners</p>
                </div>
            </div>

            <div className="sm:px-48 py-28 px-12">
                <img src={video} className="w-full" />

            </div>
            <Team />
            <div className="flex flex-col justify-center gap-4 py-8 text-center bg-[#FAFAFA] sm:px-0 px-12">
                <h3 className="text-header-blue text-[2.5rem] font-bold">Big Companies Are Here</h3>
                <p className="text-link-color text-sm font-normal">Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics: Newtonian mechanics  </p>
            </div>
            <Clients />

            <div className="w-full h-159 bg-[#2A7CC7] flex flex-row justify-between">
                <div className="sm:px-48 sm:py-48 px-16 py-28">
                    <div className="flex flex-col gap-6 flex-wrap sm:items-start items-center">
                        <p className="text-white text-base font-bold sm:text-start text-center">WORK WITH US</p>
                        <p className="text-white text-[2.5rem] font-bold sm:text-start text-center">Now Let’s grow Yours</p>
                        <p className="text-white text-xl font-normal sm:text-start text-center">The gradual accumulation of information about atomic and<br /> small-scale behavior during the first quarter of the 20th </p>
                        <button className="rounded border border-white text-white text-2xl font-bold w-60 h-16">Button</button>
                    </div>
                </div>

                <div className="hidden sm:flex">
                    <img src={unsplash} className="h-full object-cover" />
                </div>


            </div>
            <Footer />

        </div>
    )
}