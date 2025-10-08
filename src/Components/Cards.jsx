import React from 'react';
import { Link } from 'react-router';

const Cards = ({product}) => {
const {id, image, title, downloads, ratingAvg} = product

function formatDownloads(num) {
  if (num >= 1_000_000_000) {
    return (num / 1_000_000_000).toFixed(1) + "B";
  } else if (num >= 1_000_000) {
    return (num / 1_000_000).toFixed(1) + "M";
  } else if (num >= 1_000) {
    return (num / 1_000).toFixed(1) + "K";
  } else {
    return num;
  }
}

    return (
        <>
        <Link to={`/appsdetails/${id}`} >
        <div className='card bg-base-100 shadow-2xl'>
          
            <figure className='h-48 overflow-hidden'>
                <img className='w-auto h-auto' src={image} alt={title} />
            </figure>
            <div className='card-body'>
                <h3 className='card-title text-[1rem]'>{title}</h3>
                <div className="flex justify-between">
                    <span> ⬇️ {formatDownloads(downloads)}</span>
                    <span> ⭐ {ratingAvg}</span>
                </div>
                
             </div>
        </div>
        </Link>
        
        </>
    );
};

export default Cards;