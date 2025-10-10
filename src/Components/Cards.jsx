import React from 'react';
import { Link } from 'react-router';
import { FcDown,  } from "react-icons/fc";
import {formatDownloads} from '../utilis/custom'

/*Card কম্পোনেন্ট, সব প্রোডাক্টা দেখানোর জন্য, বার বার ব্যবহৃত হবে */ 

const Cards = ({product}) => {
const {id, image, title, downloads, ratingAvg} = product

    return (
        <>
        <Link to={`/appsdetails/${id}`} >
        <div className='card bg-base-100 shadow-2xl'>
          
            <figure className='h-48 overflow-hidden'>
                <img className='w-auto h-auto' src={image} alt={title} />
            </figure>
            <div className='card-body'>
                <h3 className='card-title text-[1rem]'>{title} </h3>
                <div className="flex justify-between">
                    <span className='bg-[#e8f5ea] text-[#0dbb2a] font-semibold'> ⬇️ {formatDownloads(downloads)}</span>
                    <span className='bg-[#f1f5e8] text-[#ff8811] font-semibold'> ⭐ {ratingAvg}</span>
                </div>
                
             </div>
        </div>
        </Link>
        
        </>
    );
};

export default Cards;