import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgProduct from "../photos/single-product-1-cover-2.jpg";





const ProductSlider = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="h-[30rem] w-[35rem]">

            <Slider {...settings}>

                <div>
                    <img src={imgProduct} />
                </div>
                <div>
                    <img src={imgProduct} />
                </div>



            </Slider>
        </div>
    );
};

export default ProductSlider;