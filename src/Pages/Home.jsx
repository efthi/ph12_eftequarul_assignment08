import React, { useState } from 'react';
import Container from '../Components/Container';
import useProducts from '../hooks/useProducts';
import Cards from '../Components/Cards';
import Banner from '../Components/Banner';
import Skel from '../Components/Skel';


const Home = () => {
    const { loading, error, products } = useProducts();
    
    const [showAll, setShowAll] = useState(false);
    //console.log(products);
    //console.log(showAll);
    const featuredProducts = showAll ? products : products.slice(0, 8);

    return (
        <>
        <Banner></Banner>
        <div>
            
            <h1 className='text-center text-3xl md:text-6xl text-black font-bold mt-10'>Trending Apps</h1>
            <h3 className='text-center text-xl md:text-2xl text-gray-500 mt-5 mb-10'>Explore All Trending Apps on the Market developed by us</h3>
           
        </div>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 max-w-11/12'>
            { loading ? (<Skel count='4'/>) :(
                featuredProducts.map(product => (
                <Cards key={product.id} product={product} />
                )))
            }
        </div>
        <div className='mx-auto mb-10 text-center'>
            <button onClick={() =>setShowAll(!showAll)} className='btn btn-soft btn-primary'>{showAll ? 'Show Less' : 'Show All'}</button>
        </div>
        </>
        
    );
};

export default Home;