import React from 'react'
import Chart from '../../components/chart/Chart'
import FeaturedInfo from '../../components/featuredInfo/FeaturedInfo'
import "./homepage.css"
import { userData } from '../../FakeData'
import WidgetSm from '../../components/widgetSm/WidgetSm'
import WidgetLg from '../../widgetLg/WidgetLg'
const Homepage = () => {
    return (
        <div className='homepage'> 
            <FeaturedInfo/>
            <Chart data={userData} title="User Analystic" grid dataKey="Active User"/>
        <div className="homeWidgets">
            <WidgetSm/>
            <WidgetLg/>
        </div>
        </div>
    )
}

export default Homepage
