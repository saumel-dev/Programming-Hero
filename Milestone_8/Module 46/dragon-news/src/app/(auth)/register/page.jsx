'use client'
import { createAuthClient } from 'better-auth/client';
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';
const authClient = createAuthClient();

const RegisterPage = () => {
    const handleRegisterFunc = async (data) => {
        const { email, name, photo, password } = data;
        console.log(data);
        const { data: res, error } = await authClient.signUp.email(
            {
                name: name,
                email: email,
                password: password,
                image: photo,
                callbackURL: "/"
            }
        )
        if (error) {
            alert(error.message)
        }
        if (res) {
            alert("signup successfully")
        }

    }
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    return (
        <div className='container mx-auto flex justify-center items-center min-h-[80vh]  bg-slate-100'>
            <div className="p-4 rounded-xl bg-white">
                <h2 className='font-bold text-3xl text-center'>Login Your Account</h2>
                <form action="" className='spacey-y-3' onSubmit={handleSubmit(handleRegisterFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Name</legend>
                        <input {...register("name", { required: "name field is requred" })} type="text" className="input" placeholder="Enter your Name" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Photo URL</legend>
                        <input {...register("photo", { required: "name field is requred" })} type="text" className="input" placeholder="Enter your Photo URL" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Email</legend>
                        <input {...register("email", { required: "email field is requred" })} type="email" className="input" placeholder="Enter your email" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Password</legend>
                        <input required minLength={4} {...register("password", { required: "password field is required" })} type="password" className="input" placeholder="Enter your password"
                        />
                        {errors.name && <p className='text-red-300'>{errors.name.message}</p>}

                    </fieldset>
                    <button className='btn w-full bg-gray-400 mt-2 text-white'>Register</button>
                </form>
            </div>
        </div>
    );
};

export default RegisterPage;