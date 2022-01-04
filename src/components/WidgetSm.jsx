import React from 'react'
import {MdVisibility} from 'react-icons/md'
import { userList } from '../utils/data'

const WidgetSm = () => {
    return (
        <div className='flex-[1] p-5 rounded-md shadow-lg shadow-gray-400'>
            <span className="font-bold text-xl">New Members</span>
            <ul className="m-0 p-0 list-none">
                {userList?.map((user,i)=>(
                    <li className="flex justify-between items-center gap-2 my-3 border-b-[1px] border-b-slate-300 " key={i}>
                        <div className="flex gap-2 items-center">
                            <img 
                                src={user.img} 
                                alt="profile"
                                className='w-[40px] h-[40px] rounded-full cursor-pointer object-cover'
                            />
                            <div className='flex flex-col gap-0'>
                                <span className="font-medium text-xl">{user.name}</span>
                                <span className="text-sm font-thin">{user.jobtitle}</span>
                            </div>
                        </div>
                        <button
                            type='button' 
                            className="flex items-center gap-1 rounded-md bg-white m-1 p-1">
                            <MdVisibility /> View
                        </button>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default WidgetSm
