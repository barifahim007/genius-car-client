import React from 'react';

const ServiceCard = ({ service }) => {
    const { img, price, title, } = service;
    return (
        <div className="card card-compact w-96 bg-base-100 shadow-xl">
            <figure><img src={img} alt={title} /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-2xl text-orange-600 '>Price: ${price}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-warning bg-orange-400">Service Now</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;