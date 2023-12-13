import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import image2 from "../photos/hero-2.jpg";


const ImageSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="w-11/12 pt-16 pl-28 gap-20">
            <Slider {...settings}>
                <div className="w-full rounded-2xl bg-gradient-to-r from-light-blue to-light-green flex flex-row justify-stretch items-center gap-12 z-1000 relative h-159 flex-wrap ">
                    <div className="w-1/2 flex items-start ml-160 z-2000 absolute" >
                        <img src="https://cdn.discordapp.com/attachments/1179758368726982712/1183781503084281907/none.png?ex=6589956f&is=6577206f&hm=7b95f5a80277148177bad160f47e425c9a5859bd7a77199f00d805df5b816546&" className='h-159 z-2000 absolute ml-20' />
                    </div>
                    <div className="flex flex-col justify-center w-1/2 h-full flex-wrap z-1000 absolute pl-24 gap-12">
                        <p className="text-regal-blue text-base font-bold">SUMMER 2020</p>
                        <p className="text-header-blue text-6xl font-bold">NEW COLLECTION</p>
                        <p className="text-gray-500 text-xl font-normal">We know how large objects will act,<br />
                            but things on a small scale.</p>
                        <button className="rounded bg-sky-500 text-white text-2xl font-bold w-60 h-16">SHOP NOW</button>
                    </div>
                </div>




                <div className="w-full rounded-2xl flex flex-row justify-stretch items-center gap-12 z-1000 relative flex-wrap">

                    <div className="flex z-2000 relative">

                        <img src={image2} className='h-159 rounded-2xl' />

                        <div className="flex flex-col justify-center w-1/2 h-full flex-wrap z-2000 absolute pl-24 gap-12">
                            <p className="text-regal-blue text-base font-bold">SUMMER 2020</p>
                            <p className="text-header-blue text-6xl font-bold">NEW COLLECTION</p>
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
