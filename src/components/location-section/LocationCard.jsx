import React from 'react';

const LocationCard = ({ location }) => {
    return (
        <div className=" p-6 h-full z-10 rounded-md relative text-center  w-full after:content-['*'] after:h-[70%] after:-z-10 after:w-full after:absolute after:bottom-0 after:left-0 after:text-red-500 after:border after:border-[#EBEEF7] after:rounded-md">
            <img className=' mx-auto inline-block w-full' src={location.image} alt="location image" />

            <h4 className='text-xl mt-5 font-medium'>{location.name}</h4>
            <p className='text-md mt-2 text-[#767E94]'>4,391 Ads</p>
        </div>
    );
};

export default LocationCard;