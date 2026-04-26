import React from 'react';

const ProductCard = ({ product }) => {
    const { id, name, price, description } = product;

    return (
        <div>
            <div className="card w-96 bg-sky-100 card-md shadow-sm">
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p></p>
                    <p>{description}</p>
                    <p>{price}</p>
                    <div className="justify-end card-actions">
                        <button className="btn btn-primary">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCard;