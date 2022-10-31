import React, { useState} from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
    const [nav, setNav] = useState(false);
  
    const handleNav = () => {
      setNav(!nav);
    };
        


    return(
        <div className=' flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white'>
            <h1 className='align text-left w-full text-3xl font-bold text-[#00fd9a] m-5 '>REACT.</h1>
            <ul className='flex hidden'>
                <li className='p-4'>HOME</li>
                <li className='p-4'>COMPANY</li>
                <li className='p-4'>RESOURCES</li>
                <li className='p-4'>ABOUT</li>
                <li className='p-4'>CONTACT</li>
            </ul>
            <div onClick={handleNav} >
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}


                
            </div>
            <div className={!nav ? 'fixed left-0 top-0 w-[20%] h-full border-r border-r-gray-900 bg-gray-900' : 'fixed left-[-100%]'}>
            <h1 className='align text-left w-full text-3xl font-bold text-[#00fd9a] m-5 '>REACT.</h1>

                <ul className='p-4 uppercase'>
                <li className='p-4 border-b border-gray-100'>HOME</li>
                <li className='p-4 border-b border-gray-100'>COMPANY</li>
                <li className='p-4 border-b border-gray-100'>RESOURCES</li>
                <li className='p-4 border-b border-gray-100'>ABOUT</li>
                <li className='p-4'>CONTACT</li>  
                </ul>
            </div>
        </div>

    )
    }
export default Navbar;
