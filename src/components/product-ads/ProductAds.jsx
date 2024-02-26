import { FaArrowRight } from "react-icons/fa6";
import car from '../../assets/populer-ads/car.jpg';
import computer from '../../assets/populer-ads/computer.png';
import engin from '../../assets/populer-ads/engin.png';
import home_toy from '../../assets/populer-ads/home-toy.png';
import phone from '../../assets/populer-ads/phone.png';
import river from '../../assets/populer-ads/river.png';
import road from '../../assets/populer-ads/road.png';
import room from '../../assets/populer-ads/room.png';
import ProductAdsCard from './ProductAdsCard';

const ProductAds = () => {

    const ads = [
        { name: 'Toyota Fielder G HYBRID WXB PE...', image: car, price: '$1,200.00', bgcolor: true },
        { name: 'Canon EOS Rebel SL3 / EOS 250D', image: room, price: '$1,500.00', bgcolor: true },
        { name: 'Apple iPhone 7 Plus (32 GB) ↗️ Hot...', image: home_toy, price: '$2,300.00', bgcolor: true },
        { name: 'DORMAK Lift, 06 Person 07 Stops', image: river, price: '$220.00' },
        { name: 'Xiaomi Poco X2 (8/256) Hot Offer...', image: road, price: '$220.00' },
        { name: 'Rent-A-Car (All Kinds of Car & ...', image: phone, price: '$220.00' },
        { name: 'Samsung Galaxy A22 2021...', image: engin, price: '$70.00' },
        { name: 'Rent-A-Car (All Kinds of Car &...', image: computer, price: '$80.00' },
    ]


    return (
        <div className='my-container '>
            <h2 className='section-title'>Our Popular Ads</h2>
            <div className='grid-4-cols'>
                {
                    ads.map((ad, index) => <ProductAdsCard key={index} ad={ad} />)
                }
            </div>
            <div className="flex justify-center my-[50px]">
                <button className="btn-primary flex-center">View ALl <FaArrowRight /></button>
            </div>
        </div>
    );
};

export default ProductAds;