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
            <div className="flex justify-center px-48  ">
                <div className="w-full rounded-2xl flex flex-row justify-stretch items-center gap-12 z-1000 relative h-159 flex-wrap ">
                    <div className="flex flex-col justify-between w-1/2 h-80 flex-wrap">
                        <p className="text-header-blue text-base font-bold">ABOUT COMPANY</p>
                        <p className="text-header-blue text-6xl font-bold">ABOUT US</p>
                        <p className="text-gray-500 text-xl font-normal">We know how large objects will act,<br />
                            but things on a small scale.</p>
                        <button className="rounded bg-sky-500 text-white text-2xl font-bold w-60 h-16">Get Quote Now</button>
                    </div>
                    <div className="w-1/2 flex justify-end z-2000 absolute ml-[40rem] h-full">
                        <img src={noneImg} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col gap-6 py-6 px-48">
                <p className="text-[#E74040] text-sm font-normal">Problems trying</p>
                <div className="flex flex-row justify-between">
                    <p className="text-header-blue text-2xl font-bold">Met minim Mollie non desert<br /> Alamo est sit cliquey dolor do<br /> met sent.</p>
                    <p className="text-[#737373] text-sm font-bold">Problems trying to resolve the conflict between the two major realms of<br /> Classical physics: Newtonian mechanics</p>
                </div>
            </div>


            <div className="flex flex-row justify-between px-48 py-20">
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

            <div className="px-48 py-28">
                <img src={video} className="w-full" />

            </div>
            <Team />
            <div className="flex flex-col justify-center gap-4 py-8 text-center bg-[#FAFAFA]">
                <h3 className="text-header-blue text-[2.5rem] font-bold">Big Companies Are Here</h3>
                <p className="text-link-color text-sm font-normal">Problems trying to resolve the conflict between<br />
                    the two major realms of Classical physics: Newtonian mechanics  </p>
            </div>
            <Clients />

            <div className="w-full h-159 bg-[#2A7CC7] flex flex-row justify-between">
                <div className="px-48 py-48">
                    <div className="flex flex-col gap-6 flex-wrap">
                        <p className="text-white text-base font-bold">WORK WITH US</p>
                        <p className="text-white text-[2.5rem] font-bold">Now Let’s grow Yours</p>
                        <p className="text-white text-xl font-normal">The gradual accumulation of information about atomic and<br /> small-scale behavior during the first quarter of the 20th </p>
                        <button className="rounded border border-white text-white text-2xl font-bold w-60 h-16">Button</button>
                    </div>
                </div>

                <div>
                    <img src={unsplash} className="h-full object-cover" />
                </div>


            </div>
            <Footer />

        </div>
    )
}