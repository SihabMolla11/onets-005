import not from '../../assets/Work-section/Notepad.svg';
import box from '../../assets/Work-section/box.svg';
import user from '../../assets/Work-section/user-icon.svg';
import WorkCard from './WorkCard';

const WorkSection = () => {

    const works = [
        { id: 1, name: 'Create Account', icon: user },
        { id: 2, name: 'Post a Ads', icon: not },
        { id: 3, name: 'Start Earning', icon: box },
    ]


    return (
        <div className='my-container'>
            <h2 className='section-title'> How it Work</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
                {
                    works.map((work) => <WorkCard key={work.id} work={work} />)
                }
            </div>
        </div>
    );
};

export default WorkSection;