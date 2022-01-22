import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Home from './Home'

function Layout() {
    return (
        <div>
            <Topbar />
            <div className="flex bg-gray-100">
                <Sidebar />
                <div className="flex-[4] md:flex-[6] bg-gray-200">
                <Home />
                </div>
            </div>
        </div>
    )
}

export default Layout
