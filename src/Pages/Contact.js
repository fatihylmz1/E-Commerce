import React from "react";
import { Header } from "../Layouts/Header";
import { Footer } from "../Layouts/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faInstagram, faLetterboxd, faLinkedin, faTwitter } from "@fortawesome/free-brands-svg-icons";
import none2Img from "../photos/none2.png";
import { faArrowAltCircleRight, faArrowTurnDown, faEnvelope, faLocation, faLocationDot, faPhone } from "@fortawesome/free-solid-svg-icons";

export const ContactPage = () => {
    return (
        <div>
            <Header />
            <div className="flex sm:flex-row justify-center sm:px-48 flex-col">
                <div className="w-full rounded-2xl flex sm:flex-row sm:justify-stretch items-center gap-12 sm:z-1000 sm:relative sm:h-159 flex-wrap flex-col justify-between">
                    <div className="flex flex-col justify-between sm:w-1/2 sm:h-[30rem] flex-wrap sm:items-start items-center sm:gap-0 gap-6 sm:py-0 py-24">
                        <p className="text-header-blue text-base font-bold">Contact Us</p>
                        <p className="text-header-blue sm:text-6xl text-[2.5rem] font-bold">Get in touch today!</p>
                        <p className="text-gray-500 text-xl font-normal sm:text-start text-center">We know how large objects will act,<br />
                            but things on a small scale.</p>
                        <p className="text-[#252B42] text-2xl font-bold">Phone;+451 215 215</p>
                        <p className="text-[#252B42] text-2xl font-bold">Fax;+451 215 215</p>
                        <div className="flex flex-row gap-4">
                            <button>
                                <FontAwesomeIcon icon={faTwitter} className="text-[#252B42] w-6 h-auto" />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faFacebook} className="text-[#252B42] w-6 h-auto" />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faInstagram} className="text-[#252B42] w-6 h-auto" />
                            </button>
                            <button>
                                <FontAwesomeIcon icon={faLinkedin} className="text-[#252B42] w-6 h-auto" />
                            </button>

                        </div>
                    </div>
                    <div className="sm:w-1/2 flex justify-end sm:z-2000 sm:absolute sm:ml-[40rem] h-full w-full sm:px-0 px-6">
                        <img src={none2Img} />
                    </div>
                </div>
            </div>

            <div className="flex flex-col items-center justify-between px-48 py-28">

                <div className="flex flex-col items-center justify-between text-center">
                    <p className="text-[#252B42] text-sm font-bold">VISIT OUR OFFICE</p>
                    <p className="text-[#252B42] text-[2.5rem] font-bold text-center">We help small businesses<br />
                        with big ideas</p>
                </div>

                <div className="flex sm:flex-row py-16 flex-col sm:gap-0 gap-6">
                    <div className="flex flex-col justify-between items-center px-12 py-10 gap-4">
                        <FontAwesomeIcon icon={faPhone} className="w-[4.5rem] h-[4.5rem] text-login" />
                        <p className="text-[#252B42] text-sm font-bold">georgia.young@example.com</p>
                        <p className="text-[#252B42] text-sm font-bold">georgia.young@ple.com</p>
                        <p className="text-[#252B42] text-base font-bold">Get Support</p>
                        <button className="flex flex-row items-center justify-center gap-2 rounded-3xl border border-login text-login text-sm font-bold w-32 h-14">
                            <p>Submit Request</p>
                        </button>
                    </div>
                    <div className="flex flex-col justify-between items-center px-12 py-10 gap-4 bg-header-blue">
                        <FontAwesomeIcon icon={faLocationDot} className="w-[4.5rem] h-[4.5rem] text-login" />
                        <p className="text-white text-sm font-bold">georgia.young@example.com</p>
                        <p className="text-white text-sm font-bold">georgia.young@ple.com</p>
                        <p className="text-white text-base font-bold">Get Support</p>
                        <button className="flex flex-row items-center justify-center gap-2 rounded-3xl border border-login text-login text-sm font-bold w-32 h-14">
                            <p>Submit Request</p>
                        </button>
                    </div>
                    <div className="flex flex-col justify-between items-center px-12 py-10 gap-4">
                        <FontAwesomeIcon icon={faEnvelope} className="w-[4.5rem] h-[4.5rem] text-login" />
                        <p className="text-[#252B42] text-sm font-bold">georgia.young@example.com</p>
                        <p className="text-[#252B42] text-sm font-bold">georgia.young@ple.com</p>
                        <p className="text-[#252B42] text-base font-bold">Get Support</p>
                        <button className="flex flex-row items-center justify-center gap-2 rounded-3xl border border-login text-login text-sm font-bold w-32 h-14">
                            <p>Submit Request</p>
                        </button>
                    </div>
                </div>

                <div className="flex flex-col items-center justify-between text-center gap-6">
                    <FontAwesomeIcon icon={faArrowTurnDown} className="w-[4.5rem] h-12 text-login" />
                    <p className="text-[#252B42] text-sm font-bold">WE Can't WAIT TO MEET YOU</p>
                    <p className="text-[#252B42] text-6xl font-bold text-center">Let's Talk</p>
                    <button className="rounded bg-sky-500 text-white text-sm font-bold w-52 h-16">Try it free now</button>
                </div>

            </div>

            <Footer />

        </div>
    )
}