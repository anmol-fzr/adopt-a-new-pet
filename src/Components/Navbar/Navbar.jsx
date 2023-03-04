import React from 'react'
import { Outlet } from 'react-router-dom'
import { container } from '../../styles/styles'

export default function Navbar() {
    return (
        <>
            <nav className={` ${container.pad} bg-black/50  flex items-center justify-between`} >
                <ul>Navbar</ul>
                <ul>
                </ul>
            </nav>
            <Outlet />
        </>
    )
}
