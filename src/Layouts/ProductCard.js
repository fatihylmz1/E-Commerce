import React, { useEffect } from "react";
import "../index.css";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProducts, setCategoryProducts } from "../store/actions/ProductActions";

export const ProductCard = () => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const filtre = useSelector((store) => store.product.filter);
    const sort = useSelector((store) => store.product.sort);

    const categorie = useSelector((store) => store.global.categories);
    // const gender2 = categorie.product.gender === "k" ? "Kadın" : "Erkek";
    const sortedObjects = categorie.sort((a, b) => b.rating - a.rating);
    console.log("sorted>>>>", sortedObjects);
    const topfive = sortedObjects.slice(0, 5);
    console.log(topfive);
    const CategoryChange = (e, product) => {
        e.preventDefault()
        const categoryId = product.id;
        // console.log("ÜRÜÜÜÜÜÜNNNNNNNNNNNNNNN>>>>>>>>>>>", cat);
        // setCategory(categoryId);
        dispatch(setCategoryProducts(categoryId));
        dispatch(fetchProducts(filtre, categoryId, sort));
        let gender = product.gender === "k" ? "Kadın" : "Erkek";
        navigate(`/shopping/${gender}/${product.title}/`);
    }

    return (
        <div className="sm:px-40 pb-12 flex flex-wrap sm:flex-row gap-4 flex-col">

            {topfive.map((product) => (
                <button onClick={(e) => CategoryChange(e, product)} className="cursor-pointer">
                    <div className="z-1000 relative flex items-center justify-center hover:scale-110 transition-transform delay-100">
                        <img src={product.img} className="w-56 h-56 brightness-75 object-cover" alt="img1" />

                        <div className="z-2000 absolute flex flex-col justify-between gap-4 items-center">
                            <p className="text-white text-base font-bold">{product.gender === "k" ? "Kadın " : "Erkek "}{product.title}</p>
                            <p className="text-white text-sm font-normal">Rating: {product.rating}</p>
                        </div>

                    </div>
                </button>

            ))}
        </div>
    )
}