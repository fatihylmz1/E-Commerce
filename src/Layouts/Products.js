import React, { useEffect, useState } from "react";
import "../index.css";
import ellipse from "../photos/Ellipse 14.svg";
import ellipse2 from "../photos/Ellipse 15.svg";
import ellipse3 from "../photos/Ellipse 16.svg";
import ellipse4 from "../photos/Ellipse 17.svg";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../store/actions/ProductActions";


export const Products = () => {

    // const filtre = product.products.filter((obje) => obje.includes("siyah"));
    // console.log("filtresiyah>>>", filtre);

    const [object, setObject] = useState([])
    const filtre = useSelector((store) => store.product.filter);
    console.log("PRODUCTFILTRE>>>>>>>>>", filtre);

    const product = useSelector((store) => store.product.productList);
    console.log("ürünler>>>>>", product);


    useEffect(() => {
        console.log("state güncellendi", product)
        setObject(product);
        console.log("object", object);
        if (filtre) {

            const urlSearchParams = new URLSearchParams();
            urlSearchParams.set('filtre', filtre);
            console.log("URLSearchParams:", urlSearchParams.toString());
            const newURL = `${window.location.pathname}?${urlSearchParams.toString()}`;
            window.history.replaceState({}, '', newURL);
        }

    }, [product, filtre])

    return (
        <div className=" flex flex-col flex-wrap justify-between items-center sm:px-40 py-20">


            <div className="flex sm:flex-row flex-wrap justify-between pt-6 px-6 gap-4 flex-col">
                {object?.map((product) => (
                    <NavLink to="/product" key={product.id}>
                        <div className="flex flex-col justify-between items-center gap-4 mb-16 hover:scale-125 transition-transform w-[15rem] h-[31rem]">
                            <img src={product.images[0].url} alt="product" className="w-[15rem] h-[19rem] object-cover" />
                            <p className="text-base font-bold text-header-blue">{product.name}</p>
                            <p className="text-sm font-bold text-link-color">{product.description}</p>
                            <div className="flex flex-row">
                                <p className="text-base font-bold">{product.price}</p>
                                <p className="text-base font-bold">$</p>
                            </div>
                            <div className="flex flex-row gap-2">
                                <img src={ellipse} alt="ellipse" />
                                <img src={ellipse2} alt="ellipse" />
                                <img src={ellipse3} alt="ellipse" />
                                <img src={ellipse4} alt="ellipse" />
                            </div>

                        </div>
                    </NavLink>
                ))}

            </div>
        </div>
    )
}
