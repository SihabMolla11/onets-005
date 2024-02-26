import { BiUserCircle } from "react-icons/bi";
import { FiPlusCircle } from "react-icons/fi";
import { IoIosArrowDown } from "react-icons/io";
import flag from '../../assets/flag.svg';
import logo from '../../assets/logo.svg';



const Navbar = () => {

    const menus = [
        { name: 'Home', icon: true },
        { name: 'Listing' },
        { name: 'Pages', icon: true },
        { name: 'Get Membership' },
        { name: 'Contact' },
    ]


    return (
        <div className="py-4 flex-center justify-between w-[100%]">
            <div className='flex-center gap-2'>
                <img src={logo} alt="site logo" />
                <h4 className='text-color-white font-semibold text-xl'>Onest</h4>
            </div>
            <ul className='text-[#ffffffb2]  flex-center justify-between max-w-[520px] w-full'>

                {
                    menus?.map((menu, index) => <li key={index} className={`text-sm cursor-pointer ${menu?.icon ? 'flex-center gap-2' : ''} ${index === 0 ? 'font-normal text-color-white' : 'font-light'}`}>
                        {menu?.name} {menu?.icon && <IoIosArrowDown />}
                    </li>)
                }

            </ul>
            <div className="max-w-[460px] text-[#ffffffb2]  text-sm font-[200] flex-center gap-6">
                <div className="flex-center gap-2 cursor-pointer">
                    <BiUserCircle />
                    <p>Login/Register</p>
                </div>
                <button className="white-btn flex "> <FiPlusCircle />  Post A Ads</button>
                <hr className="h-5 w-[1px] bg-color-white" />
                <img className="h-[20px] w-[20px] rounded-full" src={flag} alt="flag" />
                <span className="text-color-white">Eng </span>
                <IoIosArrowDown className="cursor-pointer" />
            </div>
        </div>
    );
};

export default Navbar;