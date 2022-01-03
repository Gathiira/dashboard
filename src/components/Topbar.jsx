import React from 'react'
import {MdOutlineNotificationsNone, MdOutlineLanguage} from 'react-icons/md';
import {RiSettings3Fill} from 'react-icons/ri'

const Topbar = () => {
    return (
        <div className='sticky top-0 w-full bg-gray-100 h-[50px] z-[999]'>
            <div className="flex h-full px-[5px] md:px-[30px] items-center justify-between">
                <div className="topLeft">
                    <span className="text-bold text-[30px] text-blue-600 cursor-pointer">Dashboard</span>
                </div>
                <div className="flex items-center gap-2">
                    <div className='relative cursor-pointer'>
                        <MdOutlineNotificationsNone className='w-8 h-8' />
                        <span className="absolute right-[0px] top-[0px] 
                                        w-[15px] h-[15px] bg-red-500 flex 
                                        items-center justify-center rounded-[50%] text-[10px]">2</span>
                    </div>
                    <div className='relative cursor-pointer'>
                        <MdOutlineLanguage className='w-8 h-8' />
                    </div>
                    <div className='relative cursor-pointer'>
                        <RiSettings3Fill className='w-8 h-8' />
                    </div>
                    <img 
                        src="https://i2.wp.com/johnothecoder.uk/wp-content/uploads/sites/11/2018/12/Mafia-Online-Avatar-600x600.jpg?ssl=1" 
                        alt="profile"
                        className='w-[40px] h-[40px] rounded-md cursor-pointer md:mx-5'
                    />
                </div>
            </div>
        </div>
    )
}

export default Topbar
