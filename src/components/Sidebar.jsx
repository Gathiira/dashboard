import React from 'react'
import { MdLineStyle, MdOutlineAnalytics, MdOutlineManageAccounts, MdOutlineReport } from 'react-icons/md';
import {FcSalesPerformance} from 'react-icons/fc'
import { FiUsers, FiMessageSquare } from "react-icons/fi";
import {FaSitemap} from 'react-icons/fa';
import {GrTransaction, GrMailOption} from 'react-icons/gr';
import {HiOutlineDocumentReport} from 'react-icons/hi';
import {VscFeedback} from 'react-icons/vsc'

const Sidebar = () => {
    return (
        <div className='flex-[0.4] sticky top-[50px] bg-gray-100 h-[calc(100%_-_50px)] w-full'>
            <div className="flex flex-col md:p-[10px] text-gray-700 text-sm md:text-xl h-full overflow-auto">
                <div className="flex flex-col mb-[10px] justify-center items-center">
                    <ul className="flex flex-col gap-2 list-none w-full">
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <MdLineStyle /> Home</li>
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <MdOutlineAnalytics /> Analytics</li>
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <FcSalesPerformance /> Sales</li>
                    </ul>
                </div>
                <h2 className='text-gray-400 m-3'>Quick Menu</h2>
                <div className="flex flex-col mb-[10px] justify-center items-center">
                    <ul className="flex flex-col gap-2 list-none w-full">
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <FiUsers /> Users
                        </li>
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <FaSitemap /> Products</li>
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <GrTransaction /> Transactions</li>
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <HiOutlineDocumentReport /> Reports</li>
                    </ul>
                </div>
                <h2 className='text-gray-400 m-3'>Notifications</h2>
                <div className="flex flex-col mb-[10px] justify-center items-center">
                    <ul className="flex flex-col gap-2 list-none w-full">
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <GrMailOption /> Mail</li>
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <VscFeedback /> Feedback</li>
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <FiMessageSquare /> Messages</li>
                    </ul>
                </div>
                <h2 className='text-gray-400 m-3'>Staff</h2>
                <div className="flex flex-col mb-[10px] justify-center items-center">
                    <ul className="flex flex-col gap-2 list-none w-full">
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <MdOutlineManageAccounts /> Manage</li>
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <HiOutlineDocumentReport /> Analytics</li>
                        <li className="flex items-center gap-1 p-2 cursor-pointer active:bg-gray-300 rounded-sm hover:bg-gray-300">
                            <MdOutlineReport /> Reports</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Sidebar
