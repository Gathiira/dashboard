import React from 'react';
import { LineChart,Line, XAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Charts = ({data, axisKey, linekey1, linekey2, title, grid}) => {

    return (
        <div className='w-full mt-5 shadow-lg shadow-gray-400 rounded-md'>
            <h3 className="text-3xl mb-5 p-2">{title}</h3>
            <div className='flex items-center'>
                <ResponsiveContainer width='100%' aspect={4/1}>
                    <LineChart
                        data={data}
                    >
                        {grid && <CartesianGrid strokeDasharray="5 5" />}
                        <XAxis dataKey={axisKey} />
                        <Tooltip isAnimationActive={true} />
                        <Line type="monotone" dataKey={linekey1} stroke="#8884d8" activeDot={{ r: 6 }} />
                        <Line type="monotone" dataKey={linekey2} stroke="#82ca9d" activeDot={{ r: 6 }}/>
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </div>
    )
}

export default Charts

