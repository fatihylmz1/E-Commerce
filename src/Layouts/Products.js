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
import { faShoppingBasket, faSpinner } from "@fortawesome/free-solid-svg-icons";
import slugify from "slugify";
import { type } from "@testing-library/user-event/dist/type";
import { addToCart } from "../store/actions/ShoppingCardAction";
import { toast } from "react-toastify";


export const Products = () => {
    const [hasMore, setHasMore] = useState(true);
    const [offset, setOffset] = useState(0);
    const [currentPage, setCurrentPage] = useState(1);
    const limit = 24;
    const dispatch = useDispatch();

    const [object, setObject] = useState([])
    const filtre = useSelector((store) => store.product.filter);
    // console.log("PRODUCTFILTRE>>>>>>>>>", filtre);
    const category = useSelector((store) => store.product.category);
    const sort = useSelector((store) => store.product.sort);

    const product = useSelector((store) => store.product.productList);
    // console.log("ürünler>>>>>", product);
    const navigate = useNavigate()



    useEffect(() => {
        // console.log("state güncellendi", product)
        setObject(product);
        // console.log("object", object);
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

        // console.log("URLSearchParams:", urlSearchParams.toString());

        const newURL = `${window.location.pathname}?${urlSearchParams.toString()}`;
        window.history.replaceState({}, '', newURL);

    }, [product, filtre, category, sort])

    const fetchNewProducts = async () => {

        try {
            const response = await fetch(`https://workintech-fe-ecommerce.onrender.com/products?category=${category}&offset=${offset}&limit=${limit}`);
            const data = await response.json();
            // console.log("data>>>>", data)
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


    const handleClick = (product) => {
        dispatch(setProductID(product.id));
        const slug = slugify(product.name, {
            lower: true,
        });
        // console.log("SLUGGGGGGG>>>>>>>>>>>>>>>>", slug);
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

        // console.log("ASDASDASD>>>>>", product);

    }

    const isProductInCart = useSelector((store) => store.shoppingcard.cart);
    const addToCard = (product) => {
        for (let i = 0; i < isProductInCart.length; i++) {
            if (product.id === isProductInCart[i].id) {
                console.log("Product is already in the cart!");
                toast.warn("Product is already in the cart", {
                    position: "bottom-center",
                    autoClose: 3000,
                    style: {
                        color: "white",
                        background: "red",
                    }

                });
                return;
            }
        }
        const existingCart = JSON.parse(localStorage.getItem('cart')) || [];
        const updatedCart = [...existingCart, product];
        localStorage.setItem('cart', JSON.stringify(updatedCart));
        dispatch(addToCart(product));
        console.log("CARD PRODUCT>>>>", product);
        toast.success("Successfully added to shop cart", {
            position: "bottom-center",
            autoClose: 3000,
        });
    };


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
                        <div className="hover:scale-110 transition-transform mb-16">
                            <div>
                                <button onClick={() => handleClick(product)}>
                                    <div className="flex flex-col justify-between items-center gap-2  w-[15rem] h-[31rem] rounded border border-gray-200 bg-white shadow-md ">
                                        <img src={product.images[0].url} alt="product" className="w-[15rem] h-[19rem] object-cover" />
                                        <p className="text-base font-bold text-header-blue">{product.name}</p>
                                        <p className="text-sm font-bold text-link-color">{product.description}</p>
                                        <div className="flex flex-row">
                                            <p className="text-base font-bold">{product.price}</p>
                                            <p className="text-base font-bold">$</p>
                                        </div>

                                        <div className="flex flex-row gap-2 py-2">
                                            <img src={ellipse} alt="ellipse" />
                                            <img src={ellipse2} alt="ellipse" />
                                            <img src={ellipse3} alt="ellipse" />
                                            <img src={ellipse4} alt="ellipse" />
                                        </div>

                                    </div>
                                </button>
                            </div>

                            <div>
                                <button className="flex flex-row bg-blue-700 p-2 rounded items-center gap-2 w-[15rem] text-center justify-center" onClick={() => addToCard(product)}>
                                    <p className="text-white font-bold">Add to Card</p>
                                    <FontAwesomeIcon icon={faShoppingBasket} className="text-white" />
                                </button>
                            </div>
                        </div>

                    ))}

                </div>
            </InfiniteScroll>

        </div>
    )
}





