import { CiHeart } from "react-icons/ci";
import { FiUser } from "react-icons/fi";
import { MdOutlineWatchLater, MdStars } from "react-icons/md";
import { SlLocationPin } from "react-icons/sl";
import { TbStack2 } from "react-icons/tb";




const NewAdsCard = ({ ad }) => {
    return (
        <div className="rounded-md flex-center flex-col md:flex-row ">
            <img className="w-full md:h-[220px] md:w-[220px]" src={ad.icon} alt="ad image" />
            <div className={`new-ads-card-border ${ad.background ? " new-ad-card-bg " : "nc-gray-brd"}`}>
                <div className="flex-center gap-3 mb-3 px-6">
                    <p className="text-[#636A80] flex-center gap-2"><TbStack2 className="text-[#FF4F4F]" /> Vehicles</p>

                    {
                        ad.menubar && <>
                            <p className="text-[#992F2F] bg-[#FFE5E5] p-2 rounded-full flex-center gap-2"> <MdStars className="text-[#FF4F4F]" /> Member</p>
                            <p className="text-[#997300] bg-[#FFF8E0] p-2 rounded-full "> Featured </p>
                        </>
                    }
                </div>
                <h4 className="text-[#191F33] font-semibold text-lg mb-5 px-6">Samsung Galaxy A22 2021</h4>

                <div className="flex-center justify-between px-6">
                    <p className="flex-center gap-2 text-[#939AAD]"> <FiUser /> Jerome Bell</p>
                    <p className="flex-center gap-2 text-[#939AAD]"> <SlLocationPin /> United States</p>
                    <p className="flex-center gap-2 text-[#939AAD]"> <MdOutlineWatchLater /> 2 hours</p>
                </div>

                <hr className='card-line' />

                <div className="flex-center justify-between px-6">
                    <p className="text-xl font-medium text-[#FF4F4F]">$5200</p>
                    <CiHeart className="text-color-primary text-xl" />
                </div>

            </div>
        </div>
    );
};

export default NewAdsCard;