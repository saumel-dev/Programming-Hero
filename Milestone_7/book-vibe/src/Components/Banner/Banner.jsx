import React from 'react';
import heroImg from '../../assets/hero.jpg'
const Banner = () => {
    return (
        <div className='container mx-auto mt-10'>
            <div className="hero bg-base-200 h-150 rounded-xl flex flex-col md:flex-row justify-evenly">
                <div className='flex flex-col items-center md:items-start'>
                    <h1 className="text-5xl font-bold">Books to freshen up <br /> your bookshelf</h1>
                    <button className="btn text-white bg-green-400 rounded-md mt-5">View The List</button>
                </div>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={heroImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                </div>
            </div>
        </div>
    );
};

export default Banner;