import MapPin from '../../assets/populer-ads/MapPin.svg';
import Stack from '../../assets/populer-ads/Stack.svg';

const ProductAdsCard = ({ ad }) => {
    return (
        <div className='w-[100%] shadow-lg rounded-md'>
            <img className='w-full' src={ad.image} alt="ad-image" />
            <div className={`p-5 ${ad?.bgcolor ? "product-ads-border" : ""}`}>
                <p className='flex-center text-[#767E94] gap-2'> <img src={Stack} alt="stack image" /> Education</p>
                <p className='text-md font-medium'>
                    {ad.name}
                </p>
                <hr className='card-line' />
                <div className='flex-center justify-between '>
                    <p className='flex-center gap-2'>
                        <img src={MapPin} alt="map-icon" />
                        <span className='text-[#767E94]'>New Mexico</span>
                    </p>
                    <p className='text-[#FF4F4F]'>{ad.price}</p>
                </div>
            </div>
        </div>
    );
};

export default ProductAdsCard;