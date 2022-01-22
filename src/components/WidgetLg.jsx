import React from 'react'
import { MdVisibility } from 'react-icons/md'
import { transactions } from '../utils/data'

const WidgetLg = () => {
    return (
        <div className='flex-[2] p-5 rounded-md shadow-lg shadow-gray-400'>
            <h3 className='text-xl font-bold'>Latest Transactions</h3>
            <table className='w-full mt-3'>
                <thead className='text-left'>
                    <tr>
                        <th>Customer</th>
                        <th>Date</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody className='text-left'>
                    {transactions?.map((transaction,i)=>(
                        <tr key={i} className='border-b-[1px] border-b-slate-300'>
                            <td className='flex items-center gap-1 p-2'>
                                <img 
                                    src={transaction.user.img} alt="cust"
                                    className='w-[30px] h-[30px] rounded-full object-cover'
                                />
                                <span className='text-sm font-light'>{transaction.user.name}</span>
                            </td>
                            <td className='text-sm font-light'>{transaction.date}</td>
                            <td className='text-sm font-light'> ${transaction.amount}</td>
                            <td className='text-sm font-light'>{transaction.status}</td>
                            <td>
                                <button
                                    type='button' 
                                    className="flex items-center gap-1 rounded-md bg-white m-1 p-1">
                                    <MdVisibility /> View
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default WidgetLg
