import { FaArrowRight } from "react-icons/fa6";


const CategoryCard2 = ({ category }) => {
    return (
        <div className='w-[100%] py-5 space-y-5 text-center flex-center flex-col shadow-xl rounded-md'>
            <div className='h-14 w-14 flex-center justify-center rounded-full bg-color-primary shadow-2xl shadow-color-primary '>
                <img src={category?.icon} alt="icon" />
            </div>
            <div>
                <h4 className='text-xl font-medium mb-4'>{category?.name}</h4>
                <h5 className='text-color-primary flex-center gap-2 '>View Ads <FaArrowRight />
                </h5>
            </div>
        </div>
    );
};

export default CategoryCard2;