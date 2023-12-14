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
    };

    return (
        <div className="w-full pt-16 pl-16 pr-20 z-10 relative">

            <Slider {...settings}>

                <div className='w-full pl-16 pr-20 z-30 h-full relative' >
                    <Hero />
                </div>


                <div className="w-full rounded-2xl flex flex-row justify-stretch items-center gap-12 relative flex-wrap">


                    <div className="flex relative z-20">
                        <img src={image2} className='h-159 rounded-2xl z-10 w-full' />

                        <div className="flex flex-col justify-center w-1/2 h-full flex-wrap absolute z-10 pl-24 gap-12">
                            <p className="text-white text-base font-bold">SUMMER 2020</p>
                            <p className="text-white text-6xl font-bold">NEW COLLECTION</p>
                            <p className="text-white text-xl font-normal">We know how large objects will act,<br />
                                but things on a small scale.</p>

                            <div className='w-52 h-16'>
                                <NavLink to="/shop">
                                    <button className="rounded bg-[#2DC071] text-white text-2xl font-bold w-52 h-16">SHOP NOW</button>
                                </NavLink>

                            </div>

                        </div>
                    </div>

                </div>

            </Slider>
        </div>
    );
};

export default ImageSlider;

