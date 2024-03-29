import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { Flip, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import { Header } from "../Layouts/Header";
import { Footer } from "../Layouts/Footer";

const SignUpForm = () => {
    const {
        register,
        handleSubmit,
        watch,
        setError,
        setValue,
        formState: { errors },
    } = useForm({
        defaultValues: {
            mode: "onChange",
            role_id: "3",
            password: "",
            confirmPassword: "",
        },
    });
    const [roles, setRoles] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const selectedRole = watch("role_id");

    useEffect(() => {
        setIsLoading(true);
        axios
            .get("https://workintech-fe-ecommerce.onrender.com/roles")
            .then((response) => {
                setRoles(response.data);
            })
            .catch((error) => console.error(error))
            .finally(() => setIsLoading(false));
    }, [setValue]);

    const onSubmit = (data) => {
        setIsLoading(true);
        let formData = {
            ...data,
            role_id: selectedRole,
        };
        if (data.role_id === "2") {
            formData = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: data.role_id,
                store: {
                    name: data.storeName,
                    phone: data.storePhone,
                    tax_no: data.storeTaxId,
                    bank_account: data.storeBankAccount,
                },
            };
        } else {
            formData = {
                name: data.name,
                email: data.email,
                password: data.password,
                role_id: data.role_id,
            };
        }
        axios
            .post("https://workintech-fe-ecommerce.onrender.com/signup", formData)
            .then((response) => {
                // console.log("FormData > ", response.config.data);
                toast.success("You've successfully signed up!", {
                    transition: Flip,
                    position: "bottom-center",
                    style: {
                        backgroundColor: "green",
                        color: "white"
                    }
                });
                toast.warn(
                    "You need to click the link in the email to activate your account!", {
                    transition: Flip,
                    position: "bottom-center",
                    style: {
                        backgroundColor: "red",
                        color: "black"
                    }
                }
                );
                navigate(-1);
            })
            .catch((error) => {
                console.error("Error", error);
                console.log(error);
                toast.error("Registration failed!");
                setError("apiError", {
                    type: "manual",
                    message: "Registration failed" + error.message,
                });
            })
            .finally(() => {
                setIsLoading(false);
            });
    };

    const turkeyPhoneNumberPattern = /^(\+90)?[0-9]{10}$/;
    const taxIdPattern = /^T\d{4}V\d{6}$/;
    const ibanPattern = /^(TR\d{2})\s?(\d{4})\s?(\d{4})\s?(\d{4})\s?(\d{4})\s?(\d{4})\s?(\d{2})$/;
    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    return (
        <div>
            <Header />
            <div className="min-h-screen flex flex-col justify-start pt-10 px-6">
                <div className="max-w-[35rem] w-full mx-auto bg-white p-8  ">
                    <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
                        Sign Up
                    </h2>
                    <div className="bg-white p-8 border border-gray-300 mt-6 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="name"
                                    className="text-sm font-medium text-gray-600 block"
                                >
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    {...register("name", {
                                        required: "Name is required",
                                        minLength: {
                                            value: 3,
                                            message: "Name must be at least 3 characters",
                                        },
                                    })}
                                    placeholder="Your Name"
                                    className="form-input w-full p-3 border border-solid bg-gray-300 border-gray-300 rounded-lg text-sm"
                                />
                                {errors.name && (
                                    <span className="text-red-500 text-xs">
                                        {errors.name.message}
                                    </span>
                                )}
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="email"
                                    className="block mb-2 text-sm font-medium text-gray-600"
                                >
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    {...register("email", {
                                        required: "Email is required",
                                        pattern: {
                                            value: emailPattern,
                                            message: "Invalid email format",
                                        },
                                    })}
                                    placeholder="Your Email"
                                    className="form-input w-full p-3 border border-solid bg-gray-300 border-gray-300 rounded-lg text-sm"
                                />
                                {errors.email && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.email.message}
                                    </p>
                                )}
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="password"
                                    className="block mb-2 text-sm font-medium text-gray-600   "
                                >
                                    Password
                                </label>
                                <input
                                    type="password"
                                    id="password"
                                    {...register("password", {
                                        required: "Password is required",
                                        pattern: {
                                            value: passwordPattern,
                                            message:
                                                "Password must be at least 8 characters, including a number, uppercase and lowercase letter, and a special character",
                                        },
                                    })}
                                    placeholder="Password"
                                    className="form-input w-full p-3 border border-solid bg-gray-300 border-gray-300 rounded-lg text-sm "
                                />
                                {errors.password && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.password.message}
                                    </p>
                                )}
                            </div>

                            <div className="mb-6">
                                <label
                                    htmlFor="confirmPassword"
                                    className="block mb-2 text-sm font-medium text-gray-600"
                                >
                                    Confirm Password
                                </label>
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    {...register("confirmPassword", {
                                        validate: (value) =>
                                            value === watch("password") || "The passwords do not match",
                                    })}
                                    placeholder="Confirm Password"
                                    className="form-input w-full p-3 border border-solid bg-gray-300 border-gray-300 rounded-lg text-sm"
                                />
                                {errors.confirmPassword && (
                                    <p className="mt-1 text-xs text-red-500">
                                        {errors.confirmPassword.message}
                                    </p>
                                )}
                            </div>
                            <div className="mb-6">
                                <label
                                    htmlFor="role_id"
                                    className="block mb-2 text-sm font-medium text-gray-600"
                                >
                                    Role
                                </label>
                                <select
                                    id="role_id"
                                    {...register("role_id", { required: "Role is required" })}
                                    className="form-select w-full p-3 border border-solid bg-gray-300 border-gray-300 rounded-lg text-sm"
                                    value={watch("role_id")}
                                >
                                    {roles.map((role) => (
                                        <option key={role.id} value={role.id}>
                                            {role.name}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {selectedRole === "2" && (
                                <>
                                    <div>
                                        <label
                                            htmlFor="storeName"
                                            className="text-sm font-semibold text-gray-700 block"
                                        >
                                            Store Name
                                        </label>
                                        <input
                                            type="text"
                                            id="storeName"
                                            {...register("storeName", {
                                                required: "Store name is required",
                                                minLength: {
                                                    value: 3,
                                                    message: "Store name must be at least 3 characters",
                                                },
                                            })}
                                            className="mt-2 w-full p-3 border border-solid bg-gray-300 border-gray-300 rounded-lg text-sm"
                                        />
                                        {errors.storeName && (
                                            <span className="text-red-500 text-xs">
                                                {errors.storeName.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="storePhone"
                                            className="text-sm font-semibold text-gray-700 block"
                                        >
                                            Store Phone
                                        </label>
                                        <input
                                            type="text"
                                            id="storePhone"
                                            {...register("storePhone", {
                                                required: "Store phone is required",
                                                pattern: {
                                                    value: turkeyPhoneNumberPattern,
                                                    message:
                                                        "Invalid Turkish phone number, +90 XXX XXX XX XX",
                                                },
                                            })}
                                            className="mt-2 w-full p-3 border border-solid bg-gray-300 border-gray-300 rounded-lg text-sm"
                                        />
                                        {errors.storePhone && (
                                            <span className="text-red-500 text-xs">
                                                {errors.storePhone.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="storeTaxId"
                                            className="text-sm font-semibold text-gray-700 block"
                                        >
                                            Store Tax ID
                                        </label>
                                        <input
                                            type="text"
                                            id="storeTaxId"
                                            {...register("storeTaxId", {
                                                required: "Store Tax ID is required",
                                                pattern: {
                                                    value: taxIdPattern,
                                                    message: "Invalid Tax ID format,  “TXXXXVXXXXXX” ",
                                                },
                                            })}
                                            className="mt-2 w-full p-3 border border-solid bg-gray-300 border-gray-300 rounded-lg text-sm"
                                        />
                                        {errors.storeTaxId && (
                                            <span className="text-red-500 text-xs">
                                                {errors.storeTaxId.message}
                                            </span>
                                        )}
                                    </div>
                                    <div>
                                        <label
                                            htmlFor="storeBankAccount"
                                            className="text-sm font-semibold text-gray-700 block"
                                        >
                                            Store Bank Account (IBAN)
                                        </label>
                                        <input
                                            type="text"
                                            id="storeBankAccount"
                                            {...register("storeBankAccount", {
                                                required: "Store Bank Account is required",
                                                pattern: {
                                                    value: ibanPattern,
                                                    message: "Invalid IBAN format",
                                                },
                                            })}
                                            className="mt-2  w-full p-3 border border-solid bg-gray-300 border-gray-300 rounded-lg text-sm"
                                        />
                                        {errors.storeBankAccount && (
                                            <span className="text-red-500 text-xs">
                                                {errors.storeBankAccount.message}
                                            </span>
                                        )}
                                    </div>
                                </>
                            )}
                            <button
                                type="submit"
                                disabled={isLoading}
                                className={` flex w-full px-5 py-3 pr-12 bg-blue-600 text-white rounded-lg font-semibold  items-center justify-center ${isLoading
                                    ? "opacity-60 cursor-not-allowed"
                                    : "hover:bg-blue-700"
                                    }`}
                            >
                                {isLoading && (
                                    <FontAwesomeIcon icon={faSpinner} />
                                )}
                                <p>{isLoading ? " Signing Up " : "Sign Up"}</p>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default SignUpForm;






