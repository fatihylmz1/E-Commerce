import React from "react";
import "../index.css";
import ellipse from "../Icons/Ellipse 26.svg";

export const HomePageContent = () => {
    return (
        <div>
            <div className="flex justify-center pt-16">
                <div className="w-11/12 rounded-2xl bg-gradient-to-r from-light-blue to-light-green h-160 flex flex-row justify-between px-24">

                    <div className="flex flex-col justify-evenly w-1/2 h-auto flex-wrap">
                        <p className="text-regal-blue text-base font-bold">SUMMER 2020</p>
                        <p className="text-header-blue text-6xl font-bold">NEW COLLECTION</p>
                        <p className="text-gray-500 text-xl font-normal">We know how large objects will act,
                            but things on a small scale.</p>
                        <button className="rounded bg-sky-500 text-white text-2xl font-bold w-60 h-16">SHOP NOW</button>

                    </div>

                    <div className="w-1/2 relative flex flex-col">
                        <img src={ellipse} className="z-1000 absolute" />
                        <img src="https://s3-alpha-sig.figma.com/img/48f0/23ec/b4f1775eee500a32d63a0f3de558bfff?Expires=1702857600&Signature=fEF30g4FlHpRfLnA3h8WM8emC2Cj~-yygEq3acGvMmlLNJCkgz20wBEXtjfvDOSGm~WlNqmKYGuMila7sCeKGUvDia7Z9URJ9i7oWOW~g1YduwKoz7y3oLdjHnHH93jNzFKK9smg3w8sT-TtZu0EdBscx1~aMqljvbb69vljDy9Re4Zz400HGeAXLCBHw9Vwq~SgaSKd5i9GzbNYzm-XeXSDg61AGSS9KPOt7tgaXnhn~rXOnHL2EZ2XbwFZkrw5zvRkcXimvCJmS2cFDhUXCRfAX7GJ4xArTmtHTxA4cBn9lLet1CQ8QqE0H-Aon01hWjxPe6jw7BCTanJabPzVXQ__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4" className="z-2000" />

                    </div>

                </div>
            </div>
        </div>
    )
}