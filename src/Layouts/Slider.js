import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image2 from "../photos/hero-2.jpg";

import { NavLink } from 'react-router-dom';
import { Hero } from './Hero';

const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,

    };


    return (
        <div className="sm:w-full sm:pt-16 sm:pl-12 sm:pr-8 sm:z-10 sm:relative px-4">

            <Slider {...settings}>

                <div className='sm:w-full sm:pr-20 sm:z-30 sm:h-full sm:relative' >
                    <Hero />
                </div>


                <div className="sm:w-full sm:rounded-2xl sm:flex sm:flex-row sm:justify-stretch sm:items-center sm:gap-12 sm:relative sm:flex-wrap ">


                    <div className=" sm:flex sm:relative sm:z-20 flex z-10 ">
                        <img src={image2} className='sm:h-159 rounded-2xl sm:z-10 w-full h-[60rem] bg-left' />

                        <div className="sm:flex sm:flex-col sm:justify-center sm:gap-8 sm:content-center sm:w-1/2 sm:h-full sm:flex-wrap sm:items-start gap-10 flex flex-col items-center sm:text-start text-center justify-center h-1/2 content-center w-full absolute sm:z-20">
                            <p className="text-regal-blue text-base font-bold">SUMMER 2020</p>
                            <p className="text-header-blue sm:text-6xl text-[2.5rem] font-bold">NEW COLLECTION</p>
                            <p className="text-gray-500 text-xl font-normal">We know how large objects will act,<br />
                                but things on a small scale.</p>
                            <button className="rounded bg-sky-500 text-white text-2xl font-bold w-60 h-16">SHOP NOW</button>

                        </div>
                    </div>

                </div>


            </Slider>


        </div>

    );
};

export default ImageSlider;

