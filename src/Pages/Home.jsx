import React from 'react';
import Container from '../Components/Container';
import useProducts from '../hooks/useProducts';
import Cards from '../Components/Cards';


const Home = () => {
    const { loading, error, products } = useProducts()
    
    console.log(products);
    const featuredProducts = products.slice(0, 12)

    return (
        <>
        <div>
            
            <h1 className='text-center text-6xl text-black font-bold mt-10'>Trending Apps</h1>
            <h3 className='text-center text-2xl text-gray-500 mt-5 mb-10'>Explore All Trending Apps on the Market developed by us</h3>
           
        </div>
        <div className='mx-auto grid grid-cols-1 md:grid-cols-4 gap-4 mb-10 max-w-11/12'>
            {featuredProducts.map(product => (
                <Cards key={product.id} product={product} />
            ))}
        </div>
        </>
        
    );
};

export default Home;