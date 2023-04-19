import React, { useState } from 'react'
import { images } from '../constants'
import {AiOutlineMenu, AiOutlineClose} from 'react-icons/ai'
import {MdKeyboardArrowDown} from 'react-icons/md'


const navItemsInfo = [
  { name: "Home", type: "link", href: "/" },
  { name: "Articles", type: "link", href: "/articles" },
  {
    name: "Pages",
    type: "dropdown",
    items: [
      { title: "About us", href: "/about" },
      { title: "Contact us", href: "/contact" },
    ],
  },
  { name: "Pricing", type: "link", href: "/pricing" },
  { name: "Faq", type: "link", href: "/faq" },
];

const NavItem =({item})=>{
  const [dropdown, setDropdown] = useState(false);

  const toggleDropdownHandler = () => {
    setDropdown((curState) => {
      return !curState;
    });
  };
  return (
    <li className="relative group">
      {item.type === "link" ? (
        <>
          <a className="px-4 py-2">
            {item.name}
          </a>
          <span className="cursor-pointer text-blue-500 absolute transition-all duration-500 font-bold right-0 top-0 group-hover:right-[90%] opacity-0 group-hover:opacity-100">
            /
          </span>
        </>
      ) : (
        <div className="flex flex-col items-center">
          <button
            className="px-4 py-2 flex gap-x-1 items-center"
            onClick={toggleDropdownHandler}
          >
            <span>{item.name}</span>
            <MdKeyboardArrowDown />
          </button>
          <div
            className={`${
              dropdown ? "block" : "hidden"
            } lg:hidden transition-all duration-500 pt-4 lg:absolute lg:bottom-0 lg:right-0 lg:transform lg:translate-y-full lg:group-hover:block w-max`}
          >
            <ul className="bg-dark-soft lg:bg-transparent text-center flex flex-col shadow-lg rounded-lg overflow-hidden">
              {item.items.map((page, index) => (
                <a
                  key={index}
                  
                  className="hover:bg-dark-hard hover:text-white px-4 py-2 text-white lg:text-dark-soft"
                >
                  {page.title}
                </a>
              ))}
            </ul>
          </div>
        </div>
      )}
    </li>
  );
};

  


const Header = () => {
  const [navIsVisible, setNavIsVisible] = useState(false);

  const navVisibilityHandler = ()=>{
    setNavIsVisible((curState)=>{
      return !curState
    })
  }
  return (
    <section>
      <header className='container mx-auto px-5 flex justify-between py-4'>
        <div>
          <img className='w-16' src={images.Logo} alt="" />
        </div>

        <div className='lg:hidden z-50'>
          {navIsVisible ? <AiOutlineClose className='w-6 h-6' onClick={navVisibilityHandler}/>: <AiOutlineMenu className='w-6 h-6' onClick={navVisibilityHandler}/>}
        </div>

        <div className={` ${navIsVisible? "right-0":"-right-full"} mt-[56px] lg:mt-0 bg-dark-hard lg:bg-transparent z-49 flex flex-col w-full lg:w-auto justify-center lg:justify-right lg:flex-row lg:static fixed top-0 bottom-0   gap-x-9 items-center transition-all duration-300`}>

          <ul className=' text-white lg:text-dark-soft flex items-center gap-y-5 flex-col lg:flex-row gap-x-2 font-semibold'>
            {
              navItemsInfo.map((item)=>(
                <NavItem key={item.name} item={item}/>
              ))
            }
          
          </ul>
          <button className='mt-5 lg:mt-0 border-2 border-blue-500 px-6 py-2 rounded-full font-semibold text-blue-500 hover:bg-blue-500 hover:text-white'>Sign In</button>
        </div>
      </header>
    </section>
  )
}

export default Header