import { GoSearch } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import location from '../../assets/MapPin.svg';
import stack from '../../assets/Stack.svg';
import searchIcon from '../../assets/search.svg';

const BannerContent = () => {
    return (
        <>

            <div className="flex justify-center">
                <button className="bg-[#27C200] text-color-white px-4 py-1 rounded-sm mb-5">
                    OVER 95,00,000 LIVE ADS
                </button>
            </div>

            <h1 className="text-[64px] text-color-white text-center font-semibold leading-[120%]">
                The Largest Classified Ads <br />
                Listing in the World.
            </h1>
            <div className="w-full p-2 bg-[#ffffff1a] rounded-md flex-col md:flex-row flex-center justify-between mt-10 mb-[176px] ">

                <div className="banner-search-content border-r-[1px] border-[#ffffff66] ">
                    <img className='h-[24] w-[24]' src={searchIcon} alt="search icon" />
                    <p className="text-[#ffffff66]">Search by Ads tittle, keyword...</p>
                </div>

                <div className="banner-search-content border-r-[1px] border-[#ffffff66]">
                    <img className='h-[24] w-[24]' src={location} alt="search icon" />
                    <p className="text-[#ffffff66]">Locations</p>
                </div>

                <div className="banner-search-content justify-between ">
                    <div className="flex gap-3">
                        <img className='h-[24] w-[24]' src={stack} alt="search icon" />
                        <p className="text-[#ffffff66]">Select Category</p>
                    </div>
                    <IoIosArrowDown className="text-[#ffffff66] cursor-pointer" />
                </div>

                <button className='btn-primary flex-center gap-2'>
                    <GoSearch /> Search
                </button>

            </div>
        </>
    );
};

export default BannerContent;