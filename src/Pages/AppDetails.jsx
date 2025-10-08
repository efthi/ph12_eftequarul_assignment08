import React from 'react';
import { useParams } from 'react-router';
import useProducts from '../hooks/useProducts';
import RatingChart from '../Components/RatingChart';
import icondownloads from '../../public/assets/icon-downloads.png';
import iconratings from '../../public/assets/icon-ratings.png';
import iconreview from '../../public/assets/icon-review.png';

const AppDetails = () => {
    const {id}= useParams()
    const {products, loading, error } = useProducts();
    const product = products.find(p => String(p.id) === id)
    
    if(loading) return <p>Loading......</p>
    const {image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings = [] } = product
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
        <div className='mx-auto max-w-10/12 mt-10 mb-10'>
            <div className="grid grid-cols-1 items-center md:grid-cols-12 gap-2 ">
                <div className=" col-span-3">
                    <div className='p-10 w-full h-full rounded'>
                        <img src={image} alt="" />
                    </div>
                </div>
                <div className="col-span-9">
                    <h2 className='font-bold text-6xl'>{title}</h2>
                    <h4  className=' font-semibold text-xl p-2'>
                        <span className='font-light'>Developed by </span>
                        <span className='text-[#7d44e9]'>{companyName}</span></h4>
                    <span className='divider'></span>
                    <div className='flex flex-row gap-30'>
                        <div>
                            <img src={icondownloads} alt="" /> 
                            <p>Downloads</p>
                            <span className='font-extrabold text-4xl p-1'>{formatDownloads(downloads)}</span>
                        </div>
                        <div className="">
                            <img src={iconratings} alt="" /> 
                            <p >Average</p>
                            <span className='font-extrabold text-4xl p-1'>{ratingAvg}</span>
                        </div>
                        <div className='w-full'>
                            <img src={iconreview} alt="" /> 
                            <p>Total Reviews</p>
                            <span className='font-extrabold text-4xl p-1'>{formatDownloads(reviews)}</span>
                        </div>
                    
                    </div>
                    <div className='m-5 w-full'>
                        <button className="btn btn-success">{`Install ${size}MB`}</button>
                    </div>
                </div>
            </div>
             <div className="mx-auto w-11/12">
                <p>Ratings:</p>
                <RatingChart ratings = {ratings}></RatingChart>
             </div>    
            <div className="mx-auto w-11/12">
                <p>{description}</p>  
            </div>
                   
        </div>
        </>
    );
};

export default AppDetails;