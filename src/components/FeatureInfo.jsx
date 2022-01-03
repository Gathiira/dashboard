import React from 'react'
import {MdOutlineArrowDownward, MdOutlineArrowUpward} from 'react-icons/md'

const FeatureInfo = () => {
    return (
        <div className='mt-5 flex flex-col gap-2 md:flex-row 
                        justify-around items-center overflow-x-auto w-full'>
            <div className="flex-[1] flex-col gap-2 bg-gray-200 p-5 rounded-lg">
                <span className="text-3xl">Revenue</span>
                <div className="flex flex-col gap-2">
                    <span className="text-bold text-2xl text-black">$2,232</span>
                    <div className='flex gap-2 items-center'>
                        <span className="featuredMoneyRate"> -5.03 </span>
                        <MdOutlineArrowDownward/>
                    </div>
                </div>
                <small className="text-xs">Compared to last month</small>
            </div>
            <div className="flex-[1] flex-col gap-2 bg-gray-200 p-5 rounded-lg">
                <span className="text-3xl">Demand</span>
                <div className="flex flex-col gap-2">
                    <span className="text-bold text-2xl text-black">$15,974</span>
                    <div className='flex gap-2 items-center'>
                        <span className="featuredMoneyRate"> 9.03 </span>
                        <MdOutlineArrowUpward/>
                    </div>
                </div>
                <small className="text-xs">Compared to last month</small>
            </div>
            <div className="flex-[1] flex-col gap-2 bg-gray-200 p-5 rounded-lg">
                <span className="text-3xl">Sales</span>
                <div className="flex flex-col gap-2">
                    <span className="text-bold text-2xl text-black">$4,549</span>
                    <div className='flex gap-2 items-center'>
                        <span className="featuredMoneyRate"> -6.03 </span>
                        <MdOutlineArrowDownward/>
                    </div>
                </div>
                <small className="text-xs">Compared to last month</small>
            </div> 
            <div className="flex-[1] flex-col gap-2 bg-gray-200 p-5 rounded-lg">
                <span className="text-3xl">Cost</span>
                <div className="flex flex-col gap-2">
                    <span className="text-bold text-2xl text-black">$11,646</span>
                    <div className='flex gap-2 items-center'>
                        <span className="featuredMoneyRate"> 8.03 </span>
                        <MdOutlineArrowUpward/>
                    </div>
                </div>
                <small className="text-xs">Compared to last month</small>
            </div> 
        </div>
    )
}

export default FeatureInfo
