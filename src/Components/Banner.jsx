import React from 'react';
import heroimage from '../../public/assets/hero.png';
import { BsGooglePlay, BsApple  } from "react-icons/bs";

const Banner = () => {
    const playstore = 'https://play.google.com/store/apps?hl=en';
    const appstore = 'https://www.apple.com/app-store/';

    return (
        <>
        <div className="mx-auto max-w-12/12 m-3 p-5 ">
            <div className="text-center">
                <h2 className="font-extrabold text-4xl md:text-7xl m-5">We Build <br /> <span className='text-[#9661ee]'>Productive</span> Apps</h2>
            </div>
            <div className="text-center m-5">
                <p>At HERO.IO we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br />
                    Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
            <div className="m-2 p-2 flex gap-10 justify-center">
                <a href={playstore} className="btn btn-default border-[#000000]"> <BsGooglePlay /> Google Play</a>
                <a href={appstore} className="btn btn-default border-[#000000]"><BsApple /> App Store</a>
            </div>
            </div>
        </div>
        <div className='hero-section flex flex-col justify-center'> 
            <div className='mx-auto'>
                <img src={heroimage} alt="" />
            </div>
            <div className='bg-[#7941e9] text-center'>
                <h3 className='font-bold text-xl md:text-3xl text-[#ffffff] mt-5'>Trusted by Millions,
                     Built for You</h3>
                <div className='flex flex-col  md:flex-row md:gap-20 justify-center m-10 text-[#ffffff]'>
                    <div className=''>
                        <p className='text-xs text-gray-300'>Total Downloads</p>
                        <p className='text-6xl font-bold m-5'>29.6M</p>
                        <p className='text-xs text-gray-300'>21% More Than Last Month</p>
                    </div>
                    <div>
                        <p className='text-xs text-gray-300'>Total Reviews</p>
                        <p className='text-6xl font-bold m-5'>906K</p>
                        <p className='text-xs text-gray-300'>46% More Than Last Month</p>
                    </div>
                    <div>
                        <p className='text-xs text-gray-300'>Active Apps</p>
                        <p className='text-6xl font-bold m-5'>132+</p>
                        <p className='text-xs text-gray-300'>31 More Will Launch</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
};

export default Banner;