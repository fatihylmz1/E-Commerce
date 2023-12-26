import React from "react";
import { Header } from "../Layouts/Header";
import { Footer } from "../Layouts/Footer";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";

export const LoginPage = () => {
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

    const dispatch = useDispatch()

    const onSubmit = (data) => {
        let formData = {
            email: data.email,
            password: data.password
        }
    }


    const passwordPattern =
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;


    return (
        <div>
            <Header />
            <div className=" flex flex-col justify-start pt-10 px-6">
                <div className="max-w-[35rem] w-full mx-auto bg-white p-8  ">
                    <h2 className="mb-6 text-3xl font-bold text-center text-gray-900">
                        Login
                    </h2>
                    <div className="bg-white p-8 border border-gray-300 mt-6 rounded-lg shadow-lg">
                        <form onSubmit={handleSubmit(onSubmit)}>
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
                            <button
                                type="submit"
                                className=" flex w-full px-5 py-3 pr-12 bg-blue-600 text-white rounded-lg font-semibold  items-center justify-center"
                            >
                                Login
                            </button>
                        </form>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}