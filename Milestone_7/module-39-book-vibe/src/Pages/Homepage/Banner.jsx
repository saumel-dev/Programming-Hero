import React from 'react';
import bannerImg from '../.././assets/pngwing 1.png'
const Banner = () => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-[70vh] rounded-2xl my-8 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse w-full justify-between">
                    <img
                        src={bannerImg}
                        className="max-w-sm rounded-lg shadow-2xl"
                    />
                    <div>
                        <h1 className="text-5xl font-bold">Books to freshen up your bookshelf</h1>
                        <br />
                        <button className="btn btn-success mt-4">View The List</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;