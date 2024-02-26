import location1 from '../../assets/location-section/location1.png';
import location2 from '../../assets/location-section/location2.png';
import location3 from '../../assets/location-section/location3.png';
import location4 from '../../assets/location-section/location4.png';
import location5 from '../../assets/location-section/location5.png';
import location6 from '../../assets/location-section/location6.png';
import location7 from '../../assets/location-section/location7.png';
import location8 from '../../assets/location-section/location8.png';
import LocationCard from './LocationCard';

const Location = () => {

    const locations = [
        { name:'Las Vegas, USA', image:location1},
        { name:'New York, USA', image:location2},
        { name:'Mumbai, India', image:location3},
        { name:'Dublin, Ireland', image:location4},
        { name:'Manila, Philippines', image:location5},
        { name:'Bangkok, Thailand ', image:location6},
        { name:'kuala Lumpur, Malaysia', image:location7},
        { name:'Jakarta, Indonesia', image:location8},
    ]


    return (
        <div className='my-container'>
            <h2 className="section-title">Popular Location</h2>
            <div className='grid-4-cols '>
                    {
                        locations?.map((location, index)=><LocationCard key={index} location={location}/>)
                    }
            </div>
        </div>
    );
};

export default Location;