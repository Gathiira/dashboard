import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { user_rows } from '../utils/data';
import {BsPlusLg} from 'react-icons/bs'
import { MdPermIdentity, MdCalendarToday, MdPhoneAndroid, MdMailOutline, MdLocationPin, MdOutlineFileUpload } from 'react-icons/md';

function User() {
    const { userId } = useParams(); 
    const [userInfo, setUserInfo] = useState(user_rows)
    const [image, setImage] = useState(null)

    console.log(userId);

    useEffect(() => {
        setUserInfo(userInfo.filter((user)=> user.id === userId))
    }, [userId])

    console.log(image);

    return (
        <div className='m-2'>
            <div className='flex items-center md:justify-between'>
                <h2 className='font-[700] text-[32px] invisible md:visible'>Edit User</h2>
                <Link to='/user-create'>
                    <button className='bg-green-300 p-2 rounded-lg cursor-pointer text-[24px]'>
                        <BsPlusLg className='w-[80px]' />
                    </button>
                </Link>
            </div>
            <div className='flex flex-col md:flex-row gap-4 mt-5'>
                <div 
                    className='flex-[1] p-[20px] shadow-lg shadow-gray-400 rounded-lg'
                >
                    <div className='flex items-center gap-2'>
                        <img className='object-cover rounded-lg w-[40px] h-[40px]' src="https://random.imagecdn.app/500/150" alt="profile" />
                        <div className='flex flex-col'>
                            <span className='font-[600]'>Anna Becker</span>
                            <span className='font-[300]'>Software Developer</span>
                        </div>
                    </div>
                    <div className='mt-5'>
                        <div className='flex items-center gap-4 mt-3'>
                            <MdPermIdentity />
                            <span>annabecker99</span>
                        </div>
                        <div className='flex items-center gap-4 mt-3'>
                            <MdCalendarToday />
                            <span>11.9.2001</span>
                        </div>
                        <div className='flex items-center gap-4 mt-3'>
                            <MdPhoneAndroid />
                            <span>+1 233 234334</span>
                        </div>
                        <div className='flex items-center gap-4 mt-3' >
                            <MdMailOutline />
                            <span>becker@gmail.com</span>
                        </div>
                        <div className='flex items-center gap-4 mt-3'>
                            <MdLocationPin />
                            <span>NY, USA</span>
                        </div>
                    </div>
                </div>
                <div className='flex-[3] p-[20px] shadow-lg shadow-gray-400 rounded-lg'>
                    <form className=''>
                        <div className='flex gap-4 flex-col md:flex-row'>
                            <div className='flex flex-[3] flex-col gap-6'>
                                <div className='flex gap-4 items-center'>
                                    <label className='text-base font-[400] flex-[1]'>Username</label>
                                    <input type="text" placeholder='annabecker99' className='p-2 rounded-md border-none flex-[3]' />
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <label className='text-base font-[400] flex-[1]'>Full Name</label>
                                    <input type="text" placeholder='Anna Becker' className='p-2 rounded-md border-none flex-[3]' />
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <label className='text-base font-[400] flex-[1]'>Email</label>
                                    <input type="text" placeholder='becker@gmail.com' className='p-2 rounded-md border-none flex-[3]' />
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <label className='text-base font-[400] flex-[1]'>Phone</label>
                                    <input type="text" placeholder='+1 233 234334' className='p-2 rounded-md border-none flex-[3]' />
                                </div>
                                <div className='flex gap-4 items-center'>
                                    <label className='text-base font-[400] flex-[1]'>Address</label>
                                    <input type="text" placeholder='NY, USA' className='p-2 rounded-md border-none flex-[3]' />
                                </div>
                            </div>
                            <div className='flex-[1]'> 
                                <div>
                                    <span className='text-base font-[400]'>Profile Picture</span>
                                    <img src="https://random.imagecdn.app/500/150" alt="profile" className='rounded-lg object-cover mt-2' />
                                    <input  
                                        type="file" 
                                        id='file' 
                                        className='mt-5'  
                                        placeholder='Upload'
                                        onChange={(e)=> setImage(e.target.value)}
                                     />
                                </div>
                            </div>
                        </div>
                        <button className='mt-10 bg-green-700 p-5 rounded-lg text-white'>Save</button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default User
