import React, { useState, useEffect } from 'react';
import useProducts from '../hooks/useProducts';
import Cards from '../Components/Cards';
import Skel from '../Components/Skel';
import app404 from '../../public/assets/App-Error.png';

const Apps = () => {
   
    const {products, loading, error} = useProducts();
    const allProducts = products;
    const [search, setSearch] =useState("");
    const term = search.trim().toLowerCase();
    const searchedProducts = term 
    ? allProducts.filter(product =>
        product.title.toLowerCase().includes(term)) : allProducts;
        
         console.log(searchedProducts);
     const [dataReady, setDataReady] = useState(false);
        useEffect(() => {
        if (!loading) {
            setDataReady(true);
        }
        }, [loading]);

    return (
        <>
        <div>
            <h1 className='text-center text-6xl text-black font-bold mt-10'>Our All Applications</h1>
            <h3 className='text-center text-2xl text-gray-500 mt-5 mb-10'>Explore All Apps on the Market developed by us. We code for Millions</h3>
        </div>
        <div className='mx-auto flex flex-col-reverse md:flex-row justify-between max-w-11/12 mb-5'>
            <p><span className="badge badge-primary">({searchedProducts.length}) </span> Apps Found</p>
            <label className="input">
                <input value={search} onChange={e => setSearch(e.target.value)} type="search" placeholder="Search Apps" />
            </label>
        </div>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 max-w-11/12'>
            
            <p className={`text-center col-span-4 font-semibold text-3xl m-5  ${!dataReady || searchedProducts.length ? "hidden" : ""}`}>No App Found named "{search}"!
                <img src={app404} alt=""  className="mx-auto mt-4"  />
            </p>
            {loading ? (<Skel count='4' />) :
                (
                searchedProducts.map(product => (
                <Cards key={product.id} product={product} />
            )))
            }
        </div>
        </>
        
    );
};

export default Apps;