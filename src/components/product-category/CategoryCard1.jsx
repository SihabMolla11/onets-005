const CategoryCard1 = ({ category }) => {
    return (
        <div className='w-[100%] py-5 space-y-5 text-center flex-center flex-col'>
            <div className='h-14 w-14 flex-center justify-center rounded-full bg-[#E8F7FF] '>
                <img src={category?.icon} alt="icon" />
            </div>
            <div>
                <h4 className='text-xl font-medium mb-4'>{category?.name}s</h4>
                <h5 className='text-[#636A80]'>{category?.ads}</h5>
            </div>
        </div>
    );
};

export default CategoryCard1;