import car from '../../assets/new-ads-section/car.png';
import home from '../../assets/new-ads-section/home.png';
import house from '../../assets/new-ads-section/house.png';
import phone from '../../assets/new-ads-section/phone.png';
import room from '../../assets/new-ads-section/room.png';
import tool from '../../assets/new-ads-section/tool.png';
import NewAdsCard from './NewAdsCard';

const NewAds = () => {

    const ads = [
        { name: 'Samsung Galaxy A22 2021', menubar: true, background: true, icon: tool },
        { name: 'Apple iPhone 7 Plus (32 GB) ↗️ Hot price (Used)', background: true, icon: phone },
        { name: 'Bajaj Pulsar NS.DUAL.DISK.FRESH 2020', background: true, icon: car },
        { name: 'Xiaomi Poco X2 (8/256) Hot Offer (Used)', icon: house },
        { name: 'Toyota Allion A-15 Super Fresh 2008', icon: home },
        { name: 'Canon EOS Rebel SL3 / EOS 250D', icon: room },
    ]


    return (
        <div className='my-container'>
            <h2 className='section-title'> Newest Ads</h2>
            <div className='grid grid-cols-1 lg:grid-cols-2 gap-6'>
                {
                    ads.map((ad, index) => <NewAdsCard key={index} ad={ad} />)
                }
            </div>
        </div>
    );
};

export default NewAds;