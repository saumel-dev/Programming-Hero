'use client'
import Link from 'next/link';
import React from 'react';
import { useForm } from 'react-hook-form';

const LoginPage = () => {

    const handleLoginFunc = (data) => {
        console.log(data);

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
                <form action="" className='spacey-y-3' onSubmit={handleSubmit(handleLoginFunc)}>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Email</legend>
                        <input {...register("email", { required: "email field is requred" })} type="email" className="input" placeholder="Enter your email" />
                    </fieldset>
                    <fieldset className="fieldset">
                        <legend className="fieldset-legend">Your Password</legend>
                        <input required minLength={4} {...register("email", { required: "password field is required" })} type="password" className="input" placeholder="Enter your password"
                        />
                        {errors.password && <p className='text-red-300'>{errors.password.message}</p>}
                        
                    </fieldset>
                    <button className='btn w-full bg-gray-400 mt-2 text-white'>Login</button>
                </form>
                <p className='mt-2'>Don't have an account? <Link className='text-blue-300' href="/register">Register</Link></p>
            </div>
        </div>
    );
};

export default LoginPage;