import React from 'react'
import {MdOutlineArrowDownward, MdOutlineArrowUpward} from 'react-icons/md'

const FeatureInfo = () => {
    return (
        <div className='flex flex-col gap-2 md:flex-row'>
            <div className="flex-[1] flex-col gap-2 bg-gray-200 p-5 rounded-lg cursor-pointer shadow-lg shadow-gray-400">
                <span className="text-2xl font-medium">Profit</span>
                <div className="flex gap-2 items-center">
                    <span className="font-bold text-3xl text-black">$2,232</span>
                    <div className='flex gap-2 items-center'>
                        <span className="featuredMoneyRate"> - 5.03 </span>
                        <MdOutlineArrowDownward color='red'/>
                    </div>
                </div>
                <small className="text-xs text-gray-600">Compared to last month</small>
            </div>
            <div className="flex-[1] flex-col gap-2 bg-gray-200 p-5 rounded-lg cursor-pointer shadow-lg shadow-gray-400">
                <span className="text-2xl font-medium">Demand</span>
                <div className="flex gap-2 items-center">
                    <span className="font-bold text-3xl text-black">$15,974</span>
                    <div className='flex gap-2 items-center'>
                        <span className="featuredMoneyRate"> 9.03 </span>
                        <MdOutlineArrowUpward color='green'/>
                    </div>
                </div>
                <small className="text-xs text-gray-600">Compared to last month</small>
            </div>
            <div className="flex-[1] flex-col gap-5 bg-gray-200 p-5 rounded-lg cursor-pointer shadow-lg shadow-gray-400">
                <span className="text-2xl">Sales</span>
                <div className="flex gap-2 items-center">
                    <span className="font-bold text-3xl text-black">$4,549</span>
                    <div className='flex gap-2 items-center'>
                        <span className="featuredMoneyRate"> - 6.03 </span>
                        <MdOutlineArrowDownward color='red'/>
                    </div>
                </div>
                <small className="text-xs text-gray-600">Compared to last month</small>
            </div> 
            <div className="flex-[1] flex-col gap-2 bg-gray-200 p-5 rounded-lg cursor-pointer shadow-lg shadow-gray-400">
                <span className="text-2xl font-medium">Cost</span>
                <div className="flex gap-2 items-center">
                    <span className="font-bold text-3xl text-black">$11,646</span>
                    <div className='flex gap-2 items-center'>
                        <span className="featuredMoneyRate"> 8.03 </span>
                        <MdOutlineArrowUpward color='green'/>
                    </div>
                </div>
                <small className="text-xs text-gray-600">Compared to last month</small>
            </div> 
        </div>
    )
}

export default FeatureInfo
