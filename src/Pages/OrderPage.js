import { useDispatch, useSelector } from "react-redux";
import {
    addUserAddress,
    getUserAddress,
    updateUserAddress,
} from "../store/actions/OrderAction";
import { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faPen, faPlus } from "@fortawesome/free-solid-svg-icons";
import { useForm } from "react-hook-form";
import { Header } from "../Layouts/Header";
import { Footer } from "../Layouts/Footer";
import { Payment } from "../Layouts/Payment";

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
    const [addresses, setAddresses] = useState();
    const [totalProduct, setTotalProduct] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);
    const [productCounts, setProductCounts] = useState({});
    const [cargo, setCargo] = useState(0);
    const [priceWithCargo, setPriceWithCargo] = useState(0);
    const dispatch = useDispatch();
    const [addressPayment, setAddressPayment] = useState(true);
    const [updateAddress, setUpdateAddress] = useState(false);
    const [addressWillUpdate, setAddressWillUpdate] = useState([]);

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

    const token = useSelector((store) => store.user.token);



    const handleAddAddressSubmit = (data) => {
        console.log("DATA<<<<", data);
        const addressData = {
            address: data.addressDetails,
            city: data.city,
            district: data.district,
            name: data.name,
            surname: data.surname,
            neighborhood: data.neighborhood,
            phone: data.phone,
            title: data.addressTitle,
        };
        dispatch(addUserAddress(addressData, token));
        console.log("ADDRESSS>>>>", addressData);
        setShowAddAddressForm(false);
        dispatch(getUserAddress(token));
    };



    const addressdata = useSelector((store) => store.addressReducer)
    console.log("DENEME>>>>>>>>>>>", addressdata);

    useEffect(() => {
        const token2 = localStorage.getItem("token");
        dispatch(getUserAddress(token2));
    }, [])


    const basketHandler = () => {
        console.log("Sipariş verildi")
    }
    const handleAddAddress = () => {
        setShowAddAddressForm(!showAddAddressForm);
    };



    const handleAddress = () => {
        setAddressPayment(true)
    }

    const handlePayment = () => {
        setAddressPayment(false);
    }


    const handleUpdate = (id) => {
        setUpdateAddress(!updateAddress);

        const selectedAddress = addressdata.find(address => address.id === id);

        console.log("GÜNCELLEME>>>>>>", selectedAddress);

        // Seçilen adresi state'e ayarla
        setAddressWillUpdate([selectedAddress]);

        return selectedAddress;
    }

    useEffect(() => {
        console.log("GÜNCELLENECEK ADRES DATASI", addressWillUpdate);

    }, [addressWillUpdate]);

    // const [updatedData, setUpdatedData] = useState({
    //     address: "",
    //     city: "",
    //     district: "",
    //     id: null,
    //     name: "",
    //     surname: "",
    //     neighborhood: "",
    //     phone: "",
    //     title: "",
    // })

    const handleUpdateAddressSubmit = (data) => {
        // event.preventDefault();
        const token3 = localStorage.getItem("token");
        const adressDataUpdated = {
            address: data.addressDetails,
            city: data.city,
            district: data.district,
            id: addressWillUpdate[0].id,
            name: data.name,
            surname: data.surname,
            neighborhood: data.neighborhood,
            phone: data.phone,
            title: data.addressTitle,
        }
        console.log("UPDATED ADDRESS>>>>", data);
        dispatch(updateUserAddress(adressDataUpdated, token3));
        setUpdateAddress(!updateAddress);
        dispatch(getUserAddress(token));

    }







    return (
        <div>
            <Header />
            <div className="flex flex-row w-[60rem] ml-28 bottom-48 z-10 absolute mb-[14rem]">
                <button className="border rounded border-gray-400 py-12 px-[9.35rem] text-lg font-bold hover:bg-header-blue hover:scale-15 hover:delay-150 hover:text-white" onClick={handleAddress}>Adres Bilgileri</button>
                <button className="border rounded border-gray-400 py-12 px-[9.35rem] text-lg font-bold hover:bg-orange-500 hover:scale-15 hover:delay-150 hover:text-white" onClick={handlePayment}>Ödeme Bilgileri</button>
            </div>
            {addressPayment && (
                <div className="flex justify-between px-28 py-48">
                    <div className="flex flex-row flex-wrap p-8 border border-gray-400 rounded w-[53.2rem]">
                        <div className="flex flex-col">

                            <div className="mb-[1rem]">
                                <button
                                    className="w-[47.5rem] h-[5rem] border-2 bg-header-blue text-white font-montserrat font-semibold tracking-[0.0125rem] text-lg"
                                    onClick={handleAddAddress}
                                >
                                    <FontAwesomeIcon icon={faPlus} className="hover:scale-105 delay-75" />
                                    <p className="hover:scale-105 delay-75">Yeni Adres Ekle</p>
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
                                            Name:
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
                                            htmlFor="surname"
                                            className="block text-gray-700 text-sm font-bold mb-2"
                                        >
                                            Surname:
                                        </label>
                                        <input
                                            type="text"
                                            id="surname"
                                            name="surname"
                                            {...register("surname", { required: "Surname is required" })}
                                            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        />
                                        {errors.surname && (
                                            <p className="text-red-500 text-xs italic">
                                                {errors.surname.message}
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
                                        <input
                                            type="text"
                                            id="addressDetails"
                                            name="addressDetails"
                                            rows="4"
                                            {...register("addressDetails", {
                                                required: "Address is required",
                                            })}
                                            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                                        ></input>
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
                        <div className="flex flex-row gap-6 flex-wrap">
                            {Array.isArray(addressdata) && addressdata.map((address, index) => (
                                <div key={index} className="w-[23rem] h-[15rem] border-2 font-montserrat font-normal tracking-[0.0125rem] text-sm text-gray-600 gap-2 flex flex-col p-3 rounded shadow-lg bg-gray-200">
                                    <div className="flex flex-row gap-2 py-2">
                                        <input type="radio" name="selectedAddress" value={index} />
                                        <div className="flex flex-row justify-between w-full items-center">
                                            <p className="text-gray-600 font-bold">{address.title}</p>
                                            <button className="flex flex-row gap-1 items-center border bg-header-blue text-white p-2 rounded" onClick={() => handleUpdate(address.id)}>
                                                <p>Düzenle</p>
                                                <FontAwesomeIcon icon={faPen} />
                                            </button>
                                        </div>
                                    </div>
                                    <div className="flex flex-row gap-4 items-center">
                                        <p><strong>Adı:</strong> {address.name}</p>
                                        <p><strong>Soyadı:</strong> {address.surname}</p>
                                    </div>
                                    <div className="flex flex-row gap-4">
                                        <p><strong>Şehir:</strong> {address.city}</p>
                                        <p><strong>İlçe:</strong>{address.district}</p>
                                        <p><strong>Mahalle:</strong>{address.neighborhood}</p>
                                    </div>
                                    <p><strong>Telefon:</strong>{address.phone}</p>
                                    <p><strong>Adres Detayı:</strong> {address.address}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <div className="flex justify-start items-center flex-col gap-4">
                            <div className="flex flex-row gap-3 p-5 border border-gray-400 rounded">
                                <input type="checkbox" />
                                <p><strong>Ön Bilgilendirme Koşulları'nı</strong> ve <br /> <strong>Mesafeli Satış Sözleşmesi'ni</strong><br /> okudum, onaylıyorum.</p>

                            </div>

                            <div className="flex flex-col gap-6  h-auto">
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
                                        <p><strong>TOPLAM</strong></p>
                                        <p className="font-bold">{priceWithCargo} $</p>
                                    </div>


                                </div>
                                <button className="bg-header-blue text-base font-bold text-white p-4 rounded" onClick={basketHandler}>
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
            )}
            {updateAddress && (
                <form
                    onSubmit={handleSubmit(handleUpdateAddressSubmit)}
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
                            defaultValue={addressWillUpdate[0].title}
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
                            Name:
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            defaultValue={addressWillUpdate[0].name}
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
                            htmlFor="surname"
                            className="block text-gray-700 text-sm font-bold mb-2"
                        >
                            Surname:
                        </label>
                        <input
                            type="text"
                            id="surname"
                            name="surname"
                            defaultValue={addressWillUpdate[0].surname}
                            {...register("surname", { required: "Surname is required" })}
                            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        />
                        {errors.surname && (
                            <p className="text-red-500 text-xs italic">
                                {errors.surname.message}
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
                            defaultValue={addressWillUpdate[0].phone}
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
                            defaultValue={addressWillUpdate[0].city}
                            onChange={handleCityChange}
                            {...register("city", { required: "City is required" })}

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
                            defaultValue={addressWillUpdate[0].district}
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
                            defaultValue={addressWillUpdate[0].neighborhood}
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
                        <input
                            type="text"
                            id="addressDetails"
                            name="addressDetails"
                            defaultValue={addressWillUpdate[0].address}
                            {...register("addressDetails", {
                                required: "Address is required",
                            })}
                            className="w-full px-3 py-2 border rounded shadow appearance-none focus:outline-none focus:shadow-outline"
                        ></input>
                        {errors.address && (
                            <p className="text-red-500 text-xs italic">
                                {errors.addressDetails.message}
                            </p>
                        )}
                    </div>

                    <button
                        type="submit"
                        id="buttonUpdate"
                        className="bg-orange-500 text-white py-2 px-4 rounded focus:outline-none w-full"
                    >
                        Submit
                    </button>
                </form>
            )}
            {!addressPayment && (

                <Payment />
            )}
            <Footer />
        </div>
    );
};

export default OrderPage;