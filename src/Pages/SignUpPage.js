import React, { useEffect, useState } from "react";
import "../index.css"
import { Header } from "../Layouts/Header";
import { Footer } from "../Layouts/Footer";
import axios from "axios";
import { useForm } from "react-hook-form";


export const SignUpPage = () => {

    const [roles, setRoles] = useState([]);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm();
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        role_id: "",
    });

    useEffect(() => {
        axios.get("https://workintech-fe-ecommerce.onrender.com/roles")
            .then((res) => {
                // console.log(res.data)
                setRoles(res.data);
                // console.log("roles> ", roles);
            }).catch((err) => {
                // console.log(err)
            })
    }, []);

    const onSubmit = (data) => {
        // Form submit işlemleri
        setFormData(data);
        console.log(formData);

    };

    // useEffect(() => {
    //     console.log(roles.name);
    // }, [roles]);



    return (
        <div>
            <Header />
            <h1 className="text-center text-3xl font-bold text-header-blue px-48 py-8">SIGN UP</h1>

            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col justify-center px-48 py-12 gap-8">
                <label>Name:</label>
                <input className="border border-gray-900 rounded py-4" placeholder="Name"{...register("name", {
                    required: "Name is required",
                    minLength: {
                        value: 3,
                        message: "Name must be at least 3 characters",
                    },
                })} />
                {errors.name && <p className="text-red-700">{errors.name.message}</p>}

                <label>Email:</label>
                <input className="border border-gray-900 rounded py-4" placeholder="E-Mail"  {...register("email", {
                    required: "Email is required",
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid email address",
                    },

                })} />
                {errors.email && <p className="text-red-700">{errors.email.message}</p>}

                <label>Password:</label>
                <input type="password" className="border border-gray-900 rounded py-4" placeholder="Password" {...register("password", {
                    required: "Password is required",
                    minLength: {
                        value: 8,
                        message: "Password must be at least 8 characters",
                    },
                })} />
                {errors.password && <p className="text-red-700">{errors.password.message}</p>}

                <label>Roles:</label>
                <select className="border border-gray-900 rounded py-4" {...register("roles")}>
                    {roles.map((role) => (
                        <option key={role.id} value={role.id}>
                            {role.name}
                        </option>
                    ))}
                </select>
                <div className="flex flex-row items-center justify-center ">
                    <button className="rounded bg-sky-500 text-white text-2xl font-bold w-60 h-16" type="submit">Sign Up</button>
                </div>
            </form>
            <Footer />
        </div>
    )
}