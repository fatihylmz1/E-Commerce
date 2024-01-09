import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import imgProduct from "../photos/single-product-1-cover-2.jpg";





const ProductSlider = ({ product }) => {
    console.log("SLİDER PRODUCT>>>>>", product);
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    return (
        <div className="sm:h-[30rem] sm:w-[35rem] sm:relative">

            <Slider {...settings}>

                <div className='w-[32rem] h-[30rem]'>
                    <img className=' w-[32rem] h-[30rem] ' src={product?.data.images[0].url} />
                </div>
                <div>
                    <img className=' w-[32rem] h-[30rem] ' src={product?.data.images[0].url} />
                </div>



            </Slider>
        </div>
    );
};

export default ProductSlider;