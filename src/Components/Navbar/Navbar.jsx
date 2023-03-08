import React from 'react'
import { useAtom } from "jotai"
import { Outlet, useNavigate } from 'react-router-dom'
import { logOut } from '../../firebase/firebaseConfig'
import { container } from '../../styles/style'
import Button from '../Form/Button'
import { login, name, profilePhoto } from '../../utils/store'
import { Link } from 'react-router-dom'

export default function Navbar() {
    const [ loggedIn ] = useAtom(login)
    const [ displayName ] = useAtom(name)
    const [ photoURL ] = useAtom(profilePhoto)
    const navigate = useNavigate()

    return (
        <>
            <nav className={` ${container.pad} z-10 fixed top-0 w-full bg-black/75 text-white p-2 flex items-center justify-between`} >
                <ul>
                    <Link to="/" ><h1 className='font-medium'>Adopt A Pet</h1></Link>
                </ul>
                <ul>
                    <Link to="/my-posts" >My posts</Link>
                </ul>
                <ul className='flex items-center gap-4' >
                    <Button label={loggedIn ? 'Logout' : 'Login'} onClick={loggedIn ? logOut : () => navigate("/login")} />
                    {loggedIn && <div className="flex flex-col  items-center">
                        <img className='h-8  w-8 rounded-full ' src={photoURL} alt="" />
                        <p className='font-medium capitalize' > {displayName} </p>
                    </div>}
                </ul> 
            </nav>
            <Outlet />
        </>
    )
}
