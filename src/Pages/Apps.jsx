import React from 'react';
import useProducts from '../hooks/useProducts';
import Cards from '../Components/Cards';

const Apps = () => {
    const {loading, error, products} = useProducts();
   const allProducts = products;
    return (
        <>
        <div>
            <h1 className='text-center text-6xl text-black font-bold mt-10'>Our All Applications</h1>
            <h3 className='text-center text-2xl text-gray-500 mt-5 mb-10'>Explore All Apps on the Market developed by us. We code for Millions</h3>
        </div>
        <div className='mx-auto flex justify-between max-w-11/12 mb-5'>
            <p>({products.length}) Apps Found</p>
            <label className="input">
                <input type="text" placeholder="Search Apps" />
            </label>
        </div>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 max-w-11/12'>
            
            {allProducts.map(product => (
                <Cards key={product.id} product={product} />
            ))}
        </div>
        </>
        
    );
};

export default Apps;