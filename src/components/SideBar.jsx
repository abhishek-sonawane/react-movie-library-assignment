import React from 'react'
import {BiHomeAlt} from 'react-icons/bi'
import {AiOutlineHeart} from 'react-icons/ai'
import {AiOutlineInfoCircle} from 'react-icons/ai'
import {HiArrowRightCircle} from 'react-icons/hi2'
import { Link } from 'react-router-dom'
import { useState } from 'react'

function SideBar() {
  const [isOpen,setOpen] =  useState(false)
  return (
    <div className={` z-40 duration-300 h-full text-white bg-appBg_dark-100 drop-shadow-md border-r-[1px] border-appBg_dark-400 fixed top-0 left-0 ${isOpen? 'w-44': 'w-20'} `}  >
          <ul className='pt-20 pl-7 text-white flex gap-5 flex-col justify-center content-center  '>
            <li>
              <Link to='/'>
                <div className='flex flex-row gap-2 items-center'>
                <div>
                <BiHomeAlt  />
                  </div> 
                <h1 className={` duration-300 ${ !isOpen && 'scale-0'}`}>homepage</h1>
                </div>
              </Link>
            </li>
            {/* 2 */}
            <li>
             <Link to='/favourites'>
              <div className='flex flex-row gap-2 items-center'>
             <div>
             <AiOutlineHeart  /> 
             </div>
             <h1 className={` duration-300 ${ !isOpen && 'scale-0'}`}>Favourites</h1>

              </div>
             </Link>
            </li>
            {/* 3 */}
            <li>
              <Link to='/about'>
                <div className='flex flex-row gap-2 items-center'>
              <div>
              <AiOutlineInfoCircle  />   
              </div>
                  <h1 className={` duration-300 ${ !isOpen && 'scale-0'}`}>About</h1>
                </div>
              </Link>
            </li>

            <li className={`absolute top-10 duration-500 right-[-15px] ${isOpen && 'rotate-[-180deg]'}`} onClick={()=>setOpen((prev)=>!prev)} >
              <HiArrowRightCircle size='2em' />
            </li>
          </ul>
    </div>
  )
}

export default SideBar