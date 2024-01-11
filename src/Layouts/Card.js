import React from "react";
import "../index.css";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import slugify from "slugify";
import { setProductID } from "../store/actions/ProductActions";



export const Card = () => {

    const product = useSelector((store) => store.product.productList);
    console.log("HOMEPAGEPRODUCT", product);
    const sortedObjects = product.sort((a, b) => b.sell_count - a.sell_count);
    console.log("HOMEPAGESORTED>>>>", sortedObjects);
    const topseller = sortedObjects.slice(0, 12);
    console.log("TOPSELLER>>>", topseller);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleBestProduct = (product) => {
        dispatch(setProductID(product.id));
        const slug = slugify(product.name, {
            lower: true,
        });
        console.log("SLUGGGGGGG>>>>>>>>>>>>>>>>", slug);
        if (product.category_id === 1) {
            const type = "Kadın-Tişört";
            navigate(`/product/${type}/${product.id}/${slug}`);
            window.scrollTo(0, 0);

        } else if (product.category_id === 2) {
            const type = "Kadın-Ayakkabı";
            navigate(`/product/${type}/${product.id}/${slug}`);
            window.scrollTo(0, 0);

        } else if (product.category_id === 3) {
            const type = "Kadın-Ceket";
            navigate(`/product/${type}/${product.id}/${slug}`);
            window.scrollTo(0, 0);

        } else if (product.category_id === 4) {
            const type = "Kadın-Elbise";
            navigate(`/product/${type}/${product.id}/${slug}`);
            window.scrollTo(0, 0);

        }

    }

    return (
        <div className=" flex flex-col flex-wrap justify-between items-center sm:px-40">


            <div className="sm:flex sm:flex-row flex-wrap justify-between sm:pt-6 sm:px-6 sm:gap-8 gap-6 flex flex-col">

                {topseller.map((product) => (
                    <button onClick={() => handleBestProduct(product)}>
                        <div className="flex flex-col gap-3 items-center  hover:scale-105 transition-transform w-[15rem] h-[27rem] rounded border border-gray-200 bg-white shadow-md ">
                            <div className="w-full">

                                <img src={product.images[0].url} className="w-full h-[18rem] object-cover" />
                            </div>
                            <div className="px-2 items-center flex flex-col justify-around h-[9rem]">
                                <div className="flex flex-col justify-end">

                                    <p className="text-base font-bold text-header-blue">{product.name}</p>
                                    <p className="text-sm font-bold text-link-color items-center content-center">{product.description}</p>
                                </div>

                                <div className="flex flex-col justify-end items-end">

                                    <p className="text-price-green text-base font-bold">${product.price}</p>
                                </div>

                            </div>

                        </div>
                    </button>

                ))}
            </div>


        </div>
    )
}
