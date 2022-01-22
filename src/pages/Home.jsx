import React from 'react'
import Charts from '../components/Charts'
import FeatureInfo from '../components/FeatureInfo'
import WidgetLg from '../components/WidgetLg'
import WidgetSm from '../components/WidgetSm'
import { data } from '../utils/data'

const Home = () => {
    return (
        <div className='m-2'>
            <FeatureInfo />
            <Charts 
                data= {data}  axisKey='name' linekey1='sales' 
                linekey2='demand' title='Sales Analytics' grid={true} />
            
            <div className='flex flex-col md:flex-row gap-5 mt-5'>
                <WidgetSm />
                <WidgetLg />
            </div>
        </div>
    )
}

export default Home
