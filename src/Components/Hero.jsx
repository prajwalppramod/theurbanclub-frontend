import React from 'react';

const Hero = () => {
    return (
        <div className='h-screen mt-10 pl-10'>
            <div className='flex mb-10 flex-col'>
                <div className='text-9xl font-bold text-white'>the</div>
                <div className='text-9xl font-bold text-white'>urban</div>
                <div className='text-9xl font-bold text-white'>club</div>
            </div>
            <button class="inline-flex items-center bg-white font-normal text-[#A020F0] border-0 mx-3 py-3 px-10 focus:outline-none hover:text-gray-900 rounded-full text-2xl md:mt-0">shop now
            </button>
        </div>
    )
}

export default Hero;
