import React from 'react';
import bannerImg1 from '../../Img/banner-img.jpg'

const Banner = () => {
    return (
        <header className="relative flex items-center justify-center mt-5 md:mt-9 h-screen mb-12 overflow-hidden">
            <div className="relative z-30 md:text-center text-[#384E62] p-8">
                <div className=" text-4xl md:text-6xl">
                    <p >Best care</p> 
                    <p >For Your Happy <span className="text-green-500 md:text-[#384E62]">Smile</span></p>
                </div>
                <p className='md:mt-5 md:text-center'>Achieve the Bright & Beautiful Smile of Your Dreams!</p>
                <button  className='bg-[#384E62] text-white font-semibold p-2 px-3 md:px-5 rounded-full hover:font-bold md:mt-4 hover:bg-green-500 duration-500 text-center'>Read More</button>
            </div>
            <img src={bannerImg1} className="absolute opacity-70 min-w-full min-h-full max-w-none" alt=""/>
            
        </header>
    );
};

export default Banner;