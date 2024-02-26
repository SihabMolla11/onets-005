
import Handshake from '../../assets/category-image/Handshake.svg';
import box from '../../assets/category-image/box.svg';
import cap from '../../assets/category-image/cap.svg';
import car from '../../assets/category-image/car.svg';
import house from '../../assets/category-image/house.svg';
import pc from '../../assets/category-image/pc.svg';
import mobile from '../../assets/category-image/phone.svg';
import tool from '../../assets/category-image/tool.svg';
import CategoryCard1 from './CategoryCard1';
import CategoryCard2 from './CategoryCard2';

const categories = [
    { name: 'Mobiles', ads: '69,590 Ads', icon: mobile },
    { name: 'Electronics', icon: pc },
    { name: 'Vehicles', ads: '24,296 Ads', icon: car },
    { name: 'Property', ads: '15,374 Ads', icon: box },
    { name: 'Essentials', ads: '4,391 Ads', icon: tool },
    { name: 'Home & Living', ads: '39,400 Ads', icon: house },
    { name: 'Business Industry', ads: '2,874 Ads', icon: Handshake },
    { name: 'Education', ads: '1,888 Ads', icon: cap },
]




const ProductCategory = () => {
    return (
        <div className='my-container'>
            <h2 className='section-title'>Popular Category</h2>
            <div className='grid-4-cols'>
                {
                    categories.map((category, index) => category?.ads ? <CategoryCard1 key={index} category={category} /> : <CategoryCard2 key={index} category={category} />)
                }
            </div>
        </div>
    );
};

export default ProductCategory;