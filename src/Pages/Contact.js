import React from "react";
import { Header } from "../Layouts/Header";
import { Footer } from "../Layouts/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";

export const ContactPage = () => {
    return (
        <div>
            <Header />
            <div className="px-48 py-36 flex flex-col justify-between items-center gap-12">

                <h1 className="text-[#252B42] text-[2.5rem] font-bold text-center">Get answers to all your<br />
                    questions.</h1>

                <p className="text-[#737373] text-xl font-normal text-center">Problems trying to resolve the conflict between the two<br /> major realms of Classical physics: </p>
                <button className="rounded bg-sky-500 text-white text-sm font-bold w-72 h-14">CONTACT OUR COMPANY</button>
                <div className="flex flex-row gap-4">
                    <button>
                        <FontAwesomeIcon icon={faTwitter} className="text-[#BDBDBD] w-6 h-auto" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faFacebook} className="text-[#BDBDBD] w-6 h-auto" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faInstagram} className="text-[#BDBDBD] w-6 h-auto" />
                    </button>
                    <button>
                        <FontAwesomeIcon icon={faLinkedin} className="text-[#BDBDBD] w-6 h-auto" />
                    </button>

                </div>

            </div>

            <Footer />

        </div>
    )
}