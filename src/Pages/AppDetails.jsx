import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router';
import Spinner from '../Components/Spinner';
import useProducts from '../hooks/useProducts';
import RatingChart from '../Components/RatingChart';
import icondownloads from '../../public/assets/icon-downloads.png';
import iconratings from '../../public/assets/icon-ratings.png';
import iconreview from '../../public/assets/icon-review.png';
import {formatDownloads } from '../utilis/custom';
import { ToastContainer, toast } from 'react-toastify';

//App এস ডিটেইল দেখানোর পেইজ
const AppDetails = () => {
    const [btnStat, setBtnstat] = useState(false);

    const {id}= useParams()
    const {products, loading, error } = useProducts();
        

    const product = products.find(p => String(p.id) === id)
    
    useEffect(() =>{
            if(!product?.id) return;
            let oldAppList = [];
            try{
            oldAppList = JSON.parse(localStorage.getItem('applist') || '[]');
            } catch(err){
                oldAppList = [];
            }
        
        const installed = oldAppList.some(p => p.id === product.id);
        if(installed) setBtnstat(true);
        }, [product?.id]);

    if(loading) return <Spinner></Spinner>
    
    //destructuring    
    const {image, title, companyName, description, size, reviews, ratingAvg, downloads, ratings = [] } = product
    
    const installApp = () => {      
      const oldAppList = JSON.parse(localStorage.getItem('applist') || '[]');
    
      const isInstalled = oldAppList.some(p => String(p.id) === String(product.id));
      if(isInstalled){
          setBtnstat(true);
          toast.error('Already Installed!');
          return;
      }
      const updateAppList =[...oldAppList, product];
      localStorage.setItem('applist', JSON.stringify(updateAppList));
      setBtnstat(true);
      toast.success('Installed!');
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
                    <div className='flex flex-col md:flex-row md:gap-30'>
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
                        <button onClick={installApp} disabled={btnStat} className="btn btn-success">
                             {` ${btnStat ? 'Installed' : `Install ${size}MB` } `} 
                        </button>
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
        <ToastContainer
            position="top-center"
            autoClose={3000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick={false}
            theme="colored"
            
        />
        </>
    );
};

export default AppDetails;