import React from 'react';

const Cards = ({product}) => {
const {image, title, size, ratingAvg} = product

    return (
        <>
        <div className='card bg-base-100 shadow-2xl'>
            <figure className='h-48 overflow-hidden'>
                <img className='w-auto h-auto' src={image} alt={title} />
            </figure>
            <div className='card-body'>
                <h2 className='card-title'>{title}</h2>
                <div className="flex justify-between">
                    <span>Size: {size}MB</span>
                    <span>Rating: {ratingAvg}</span>
                </div>
                
             </div>
        </div>
        </>
    );
};

export default Cards;