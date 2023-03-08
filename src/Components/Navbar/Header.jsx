import React from 'react'
import { Outlet } from 'react-router-dom'
import BreadCrubms from './BreadCrubms/BreadCrubms'
import Navbar from './Navbar'

export default function Header() {
    return (
        <div className='flex flex-col  '>
            <Navbar />
            <BreadCrubms />
            <Outlet />
        </div>
    )
}
