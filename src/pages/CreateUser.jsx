import React from 'react'

function CreateUser() {
    return (
        <div className='m-2 flex flex-col items-center'>
            <div className='w-2/4 shadow-lg items-center'>
                <h1 className='text-xl font-[400] ml-4'>New User</h1>
                <form>
                    <div className='flex flex-col p-5 gap-4'>
                        <div className='flex gap-2 items-center'>
                            <label className='flex-[0.5]'>Username</label>
                            <input type="text" placeholder='john' className='flex-[2] h-[40px] rounded-md p-2' />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label className='flex-[0.5]'>Full Names</label>
                            <input type="text" placeholder='John Muturi' className='flex-[2] h-[40px] rounded-md p-2' />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label className='flex-[0.5]'>D.O.B</label>
                            <input type="text" placeholder='12.0.1990' className='flex-[2] h-[40px] rounded-md p-2' />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label className='flex-[0.5]'>Email</label>
                            <input type="text" placeholder='johndoe@gmail.com' className='flex-[2] h-[40px] rounded-md p-2' />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label className='flex-[0.5]'>Phone Number</label>
                            <input type="text" placeholder='+1 233 4343433' className='flex-[2] h-[40px] rounded-md p-2' />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label className='flex-[0.5]'>Password</label>
                            <input type="text" placeholder='***********' className='flex-[2] h-[40px] rounded-md p-2' />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label className='flex-[0.5]'>Address</label>
                            <input type="text" placeholder='California, USA' className='flex-[2] h-[40px] rounded-md p-2' />
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label className='flex-[0.5]'>Gender</label>
                            <div className='flex-[2] flex gap-4'>
                                <div className='flex gap-3 items-center'>
                                    <input type="radio" name='gender' id='male' value='Male' />
                                    <label for="male">Male</label>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <input type="radio" name='gender' id='female' value='Female' />
                                    <label for="female">Female</label>
                                </div>
                                <div className='flex gap-3 items-center'>
                                    <input type="radio" name='gender' id='other' value='Other'/>
                                    <label for="other">Other</label>
                                </div>
                            </div>
                        </div>
                        <div className='flex gap-2 items-center'>
                            <label className='flex-[0.5]'>Active</label>
                            <select name="active" id="active" className='flex-[2] h-[40px] rounded-md p-2'>
                                <option value="Yes">Yes</option>
                                <option value="No">No</option>
                            </select>
                        </div>
                    </div>
                    <button className='m-5 p-3 bg-green-700 rounded-md text-white font-[500] text-xl'>Create</button>
                </form>
            </div>
        </div>
    )
}

export default CreateUser
