import { useDispatch, useSelector } from "react-redux";
import {
    addUserAddress,
    getUserAddress,
    updateUserAddress,
} from "../store/actions/OrderAction";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Header } from "../Layouts/Header";
import { Footer } from "../Layouts/Footer";
import axios from "axios";

const cities = ["Istanbul", "Ankara", "Izmir", "Bursa", "Antalya", "Adana", "Gaziantep"];
const districts = {
    Istanbul: ["Kadikoy", "Besiktas", "Eminönü", "Maslak"],
    Ankara: ["Cankaya", "Kecioren", "Yenimahalle"],
    Izmir: ["Konak", "Bornova", "Buca"],
    Bursa: ["Osmangazi", "Nilufer", "Yildirim"],
    Antalya: ["Muratpasa", "Konyaalti", "Kepez"],
    Adana: ["Cukurova", "Sarıcam", "Yüregir"],
    Gaziantep: ["Sehitkamil", "Sahinbey", "Oguzeli"],
};

const OrderPage = () => {
    const {
        register,
        handleSubmit,
        setValue,
        watch,
        formState: { errors },
    } = useForm({
        defaultValues: {
            name: "",
        },
    });
    const selectedCity = watch("city");
    const selectedDistrict = watch("district");

    const handleCityChange = (e) => {
        setValue("city", e.target.value);
        setValue("district", "");
    };
    const cart = useSelector((store) => store.shoppingcard.cart);
    const [showAddAddressForm, setShowAddAddressForm] = useState(false);
    const userAddress = useSelector((store) => store.addressReducer.address);
    const [addresses, setAddresses] = useState([]);
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productCounts, setProductCounts] = useState({});
    const dispatch = useDispatch();
    const [cargo, setCargo] = useState(0);
    const [priceWithCargo, setPriceWithCargo] = useState(0);

    const calculateTotal = () => {
        let productCount = 0;
        let price = 0;

        cart.forEach((product) => {
            const count = productCounts[product.id] || 1;
            productCount += count;
            price += product.price * count;
        });

        setTotalProduct(productCount);
        setTotalPrice(price.toFixed(2));

    };
    useEffect(() => {
        calculateTotal();

    }, [cart, productCounts]);

    useEffect(() => {
        if (totalPrice >= 150) {
            setCargo(0);
            setPriceWithCargo(parseFloat(totalPrice));
        } else {
            const cargoCost = 29.99;
            setCargo(cargoCost);
            let cargoprice = parseFloat(totalPrice) + cargoCost;
            setPriceWithCargo(cargoprice.toFixed(3));
        }

    }, [totalPrice]);

    const token = localStorage.getItem("token");
    const handleAddAddressSubmit = (addressData) => {
        dispatch(addUserAddress(addressData, token));
        console.log("ADDRESSS>>>>", addressData);
        setAddresses([...addresses, addressData]);
        setShowAddAddressForm(false);
    };


    const basketHandler = () => {
        // dispatch(addProduct(card));
        // navigate("/order");
        console.log("Sipariş verildi")
    }
    const handleAddAddress = () => {
        setShowAddAddressForm(!showAddAddressForm);
    };

    // const handleAddAddressSubmit = (data) => {
    //     const addressData = {
    //         title: data.addressTitle,
    //         name: data.name,
    //         surname: data.surname,
    //         phone: data.phone,
    //         city: data.city,
    //         district: data.district,
    //         neighborhood: data.neighborhood,
    //         address: data.addressDetails,
    //     };

    //     axios
    //         .post("https://workintech-fe-ecommerce.onrender.com/user/address", addressData).then((res) => {
    //             console.log("Giden data: ", res.data);
    //             getAddress();
    //         });

    //     // dispatch(addUserAddress(addressData));
    //     setShowAddAddressForm(false);
    //     dispatch(getUserAddress());
    // };
    // const getAddress = () => {
    //     axios.get("https://workintech-fe-ecommerce.onrender.com/user/address").then((res) => {
    //         console.log("Gelen data: ", res.data);
    //         setAddresses(res.data);
    //     });
    // };


    return (
        <div>
            <Header />
            <div className="flex flex-row w-[60rem] ml-28 bottom-48 z-10 absolute mb-[14rem]">
                <button className="border rounded border-gray-400 py-12 px-[9.35rem] text-lg font-bold">Adres Bilgileri</button>
                <button className="border rounded border-gray-400 py-12 px-[9.35rem] text-lg font-bold">Ödeme Bilgileri</button>
            </div>
            <div className="flex justify-between px-28 py-48">
                <div className="flex flex-row flex-wrap gap-4 p-8 border border-gray-400 rounded">
                    <div className="flex flex-col">

                        <div>
                            <button
                                className="w-[25rem] h-[8rem] border-2 font-montserrat font-semibold tracking-[0.0125rem] text-lg"
                                onClick={handleAddAddress}
                            >
                                <FontAwesomeIcon icon={faPlus} />
                                <p>Yeni Adres Ekle</p>
                            </button>
                        </div>

                        {showAddAddressForm && (
                            <form
                                onSubmit={handleSubmit(handleAddAddressSubmit)}
                                className="max-w-md mx-auto bg-white p-12 rounded shadow-md z-10 absolute mb-[14rem] ml-[14rem] border border-gray-400 top-[26.3%] "
                            >
                                <div className="mb-4">
                                    <label
                                        htmlFor="addressTitle"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Address Title:
                                    </label>
                                    <input
                                        type="text"
                                        id="addressTitle"
                                        name="addressTitle"
                                        {...register("addressTitle", {
                                            required: "Address title is required",
                                        })}
                                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"

                                    />
                                    {errors.addressTitle && (
                                        <p className="text-red-500 text-xs italic">
                                            {errors.addressTitle.message}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="name"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Name & Surname:
                                    </label>
                                    <input
                                        type="text"
                                        id="name"
                                        name="name"
                                        {...register("name", { required: "Name is required" })}
                                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.name && (
                                        <p className="text-red-500 text-xs italic">
                                            {errors.name.message}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="phone"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Phone:
                                    </label>
                                    <input
                                        placeholder="Phone"
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        {...register("phone", { required: "Phone is required" })}
                                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.phone && (
                                        <p className="text-red-500 text-xs italic">
                                            {errors.phone.message}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="city"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        City:
                                    </label>
                                    <select
                                        id="city"
                                        name="city"
                                        onChange={handleCityChange}
                                        {...register("city", { required: "City is required" })}
                                        value={selectedCity}
                                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="" disabled>
                                            Select City
                                        </option>
                                        {cities.map((city) => (
                                            <option key={city} value={city}>
                                                {city}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.city && (
                                        <p className="text-red-500 text-xs italic">
                                            {errors.city.message}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="district"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        District:
                                    </label>
                                    <select
                                        id="district"
                                        name="district"
                                        value={selectedDistrict}
                                        {...register("district", {
                                            required: "District is required",
                                        })}
                                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    >
                                        <option value="" disabled>
                                            Select District
                                        </option>
                                        {districts[selectedCity]?.map((district) => (
                                            <option key={district} value={district}>
                                                {district}
                                            </option>
                                        ))}
                                    </select>
                                    {errors.district && (
                                        <p className="text-red-500 text-xs italic">
                                            {errors.district.message}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="neighborhood"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Neighborhood:
                                    </label>
                                    <input
                                        type="text"
                                        id="neighborhood"
                                        name="neighborhood"
                                        {...register("neighborhood", {
                                            required: "Neighborhood is required",
                                        })}
                                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    />
                                    {errors.neighborhood && (
                                        <p className="text-red-500 text-xs italic">
                                            {errors.neighborhood.message}
                                        </p>
                                    )}
                                </div>

                                <div className="mb-4">
                                    <label
                                        htmlFor="addressDetails"
                                        className="block text-gray-700 text-sm font-bold mb-2"
                                    >
                                        Address Details:
                                    </label>
                                    <textarea
                                        id="addressDetails"
                                        name="addressDetails"
                                        rows="4"
                                        {...register("addressDetails", {
                                            required: "Address is required",
                                        })}
                                        className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                    ></textarea>
                                    {errors.address && (
                                        <p className="text-red-500 text-xs italic">
                                            {errors.addressDetails.message}
                                        </p>
                                    )}
                                </div>

                                <button
                                    type="submit"
                                    className="bg-orange-500 text-white py-2 px-4 rounded focus:outline-none w-full"
                                >
                                    Submit
                                </button>
                            </form>
                        )}
                    </div>
                    <div className="flex flex-col gap-6 flex-wrap">
                        {Array.isArray(addresses) && addresses.map((address, index) => (
                            <div key={index} className="w-[23rem] h-[8rem] border-2 font-montserrat font-normal tracking-[0.0125rem] text-sm text-gray-600">
                                <div className="flex flex-row gap-2 py-2">
                                    <input type="radio" name="selectedAddress" value={index} />
                                    <p className="text-gray-600 font-bold">{address.addressTitle}</p>
                                </div>
                                <div>
                                    <p>Müşteri Adı: {address.name}</p>
                                </div>
                                <div className="flex flex-row gap-4">
                                    <p>Şehir: {address.city}</p>
                                    <p>İlçe:{address.district}</p>
                                    <p>Mahalle:{address.neighborhood}</p>
                                </div>
                                <p>Telefon:{address.phone}</p>
                                <p>Adres Detayı: {address.addressDetails}</p>
                            </div>
                        ))}
                    </div>
                </div>
                <div>
                    <div className="flex justify-start items-center flex-col gap-4">

                        <div className="flex flex-col gap-6 mt-[3.9rem] h-auto">
                            <div className="flex flex-col gap-3 border rounded border-gray-400 px-3 py-6 shadow-md">
                                <p className="text-lg"><strong>Sipariş Özeti</strong></p>
                                <div className="flex flex-row justify-between">
                                    <p>Ürünün Toplamı:</p>
                                    <p className="font-bold">{totalPrice}$</p>
                                </div>
                                <div className="flex flex-row justify-between">
                                    <p>Kargo Toplam:</p>
                                    <p className="font-bold">{cargo} $</p>
                                </div>
                                <div className="flex flex-row justify-between gap-8">
                                    <p>150 $ Üzeri Kargo Bedava</p>
                                    <p className="text-orange-500 font-bold">-29.99 $</p>
                                </div>
                                <hr className="w-full border-gray-400 border-t-2" />
                                <div className="flex flex-row justify-between">
                                    <p>TOPLAM</p>
                                    <p className="font-bold">{priceWithCargo} $</p>
                                </div>


                            </div>
                            <button className="bg-orange-500 text-base font-bold text-white p-4 rounded" onClick={basketHandler}>
                                Sepeti Onayla <FontAwesomeIcon icon={faArrowRight} />
                            </button>

                        </div>

                        <div className="flex text-center items-center ">
                            <button className="flex bg-custom-white items-center gap-4 border-2 rounded-md px-20 py-4 font-montserrat tracking-[0.0125rem] font-semibold text-lg ">
                                <p className="font-montserrat text-orange-500 text-3xl ">+</p>
                                <p className="font-montserrat text-sm font-semibold">
                                    İNDİRİM KODU GİR
                                </p>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default OrderPage;