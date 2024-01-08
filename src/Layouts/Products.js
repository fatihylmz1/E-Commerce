import React, { useEffect, useState } from "react";
import "../index.css";
import ellipse from "../photos/Ellipse 14.svg";
import ellipse2 from "../photos/Ellipse 15.svg";
import ellipse3 from "../photos/Ellipse 16.svg";
import ellipse4 from "../photos/Ellipse 17.svg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts, setProductID } from "../store/actions/ProductActions";
import InfiniteScroll from "react-infinite-scroll-component";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import slugify from "slugify";


export const Products = () => {
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 24;
    const dispatch = useDispatch();

    const [object, setObject] = useState([])
    const filtre = useSelector((store) => store.product.filter);
    console.log("PRODUCTFILTRE>>>>>>>>>", filtre);
    const category = useSelector((store) => store.product.category);
    const sort = useSelector((store) => store.product.sort);

    const product = useSelector((store) => store.product.productList);
    console.log("ürünler>>>>>", product);
    const navigate = useNavigate()



    useEffect(() => {
        console.log("state güncellendi", product)
        setObject(product);
        console.log("object", object);
        const urlSearchParams = new URLSearchParams();

        if (filtre) {
            urlSearchParams.set('filtre', filtre);
        }

        if (sort) {
            urlSearchParams.set('sort', sort);
        }

        if (category) {
            urlSearchParams.set('category', category);
        }

        console.log("URLSearchParams:", urlSearchParams.toString());

        const newURL = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.replaceState({}, '', newURL);

    }, [product, filtre, category, sort])

    const fetchNewProducts = async () => {

        try {
            const response = await fetch(`https://workintech-fe-ecommerce.onrender.com/products?offset=${offset}&limit=${limit}`);
            const data = await response.json();
            console.log("data>>>>", data)
            if (!Array.isArray(data.products)) {
                console.error('Hatalı veri formatı: Data bir dizi değil.');
                return;
            }
            setObject(prevProducts => [...prevProducts, ...data.products]);
            setOffset(offset + limit);
            setHasMore(data.products.length === limit);
        } catch (error) {
            console.error('Hata oluştu:', error);
        }

    };

    const productDetail = (productId) => {
        dispatch(setProductID(productId));

    }
    const handleClick = (product) => {
        dispatch(setProductID(product.id));
        navigate(`/product/${product.id}`);

    }


    return (
        <div className=" flex flex-col flex-wrap justify-between items-center sm:px-40 py-20">

            <InfiniteScroll
                dataLength={object.length}
                next={fetchNewProducts}
                hasMore={hasMore}
                loader={<h4 className="items-center flex flex-row gap-2">
                    <p>Yükleniyor...</p>
                    <FontAwesomeIcon icon={faSpinner} />
                </h4>}
            >
                <div className="flex sm:flex-row flex-wrap justify-between pt-6 px-6 gap-4 flex-col">
                    {object?.map((product) => (
                        // <NavLink to={`/product/${product.id}`} key={product.id} onClick={() => productDetail(product.id)}>
                        <button onClick={() => handleClick(product)}>
                            <div className="flex flex-col justify-between items-center gap-4 mb-16 hover:scale-110 transition-transform w-[15rem] h-[31rem]">
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
                        </button>
                        // </NavLink>
                    ))}

                </div>
            </InfiniteScroll>

        </div>
    )
}





