import React from "react";
import "../index.css";


export const Hero = () => {
    return (
        <div className="flex justify-center  ">
            <div className="w-full rounded-2xl bg-gradient-to-r from-[#96E9FB] to-[#ABECD6] flex flex-row justify-stretch items-center pl-24 gap-12 z-1000 relative h-159 flex-wrap ">

                <div className="flex flex-col justify-between w-1/2 h-80 flex-wrap">
                    <p className="text-regal-blue text-base font-bold">SUMMER 2020</p>
                    <p className="text-header-blue text-6xl font-bold">NEW COLLECTION</p>
                    <p className="text-gray-500 text-xl font-normal">We know how large objects will act,<br />
                        but things on a small scale.</p>
                    <button className="rounded bg-sky-500 text-white text-2xl font-bold w-60 h-16">SHOP NOW</button>

                </div>

                <div className="w-1/2 flex justify-end z-2000 absolute ml-157 h-full">

                    <img src="https://cdn.discordapp.com/attachments/1179758368726982712/1183781503084281907/none.png?ex=6589956f&is=6577206f&hm=7b95f5a80277148177bad160f47e425c9a5859bd7a77199f00d805df5b816546&" />

                </div>

            </div>
        </div>

    )
}