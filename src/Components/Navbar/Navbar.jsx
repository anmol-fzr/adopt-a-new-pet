import React, { useState, useEffect } from 'react'
import { useAtom } from "jotai"
import { useNavigate } from 'react-router-dom'
import { logOut } from '../../firebase/firebaseConfig'
import Button from '../Form/Button'
import { filter as filterAtom, login, user } from '../../utils/store'
import { Link } from 'react-router-dom'
import general, { auth } from '../../utils/routes'
import Icon from '../UI/Icon'
import More from '../UI/More'
import { interact } from '../../styles/style'
import { CgOptions, CgSearch, CgMenu } from "react-icons/cg"
import Drawer from '../Drawer/Drawer'
import Select from '../Form/Select'
import { filterOptions } from '../../utils/options'
import { breedSelector } from '../../utils/functions'

// console.clear()

const categories = [
    {
        label: "Cats",
        to: general.cats
    },
    {
        label: "Dogs",
        to: general.dogs
    },
    {
        label: "Cattles",
        to: general.cattles
    },
    {
        label: "Chat",
        to: general.chat
    },
    {
        label: "My Posts",
        to: general.myPosts
    },
]

export default function Navbar() {
    const [ areOptionsOpen, setAreOptionsOpen ] = useState(false)
    const [ drawers, setDrawers ] = useState({
        filter: false
    })

    const [ filters, setFilters ] = useAtom(filterAtom)

    const [ loggedIn ] = useAtom(login)
    const [ loggedUser ] = useAtom(user)

    function createFilterQuery(field, value) {
        if (value == "any" || value == "unknown" || value == "other") console.log()
        return `where(${field}, ' == ', ${value})`
    }

    function wow(field, value) {
        createFilterQuery(field, value)
    }



    // Atoms

    const navigate = useNavigate()


    const filterSelect = [
        {
            label: "animal",
            options: filterOptions.animals,
            value: filters.animal,
            onChange: e => setFilters({ ...filters, animal: e.value })
        },
        {
            label: "breed",
            options: breedSelector(filters.animal),
            value: filters.animal,
            onChange: e => setFilters({ ...filters, breed: e.value })
        },
        {
            label: "color",
            options: filterOptions.colors,
            value: filters.color,
            onChange: e => setFilters({ ...filters, color: e.value })
        },
        {
            label: "price",
            options: filterOptions.prices,
            value: filters.price,
            onChange: e => setFilters({ ...filters, price: e.value })
        },

    ]

    return (
        <> 
            <nav className="bg-white shadow-sm sticky top-0 z-20">
                <div className=" px-4 sm:px-6 lg:px-8 py-1 md:py-4">
                    <div className="flex items-center justify-between md:justify-start">
                        <button type="button" className="md:hidden w-10 h-10 rounded-lg -ml-2 flex justify-center items-center">
                            <Icon icon={<CgMenu />} color="currentColor" size='1.5em' />
                        </button>

                        <Link to={general.index} className="font-bold text-gray-700 text-2xl">Adopt A Pet</Link>

                        <div className="hidden md:flex space-x-3 flex-1 lg:ml-8">
                            {categories.map(({ label, to }) =>
                                <Link key={label} to={to.replace("/*", "")} className="px-2 py-2 hover:bg-gray-100 rounded-lg text-gray-400 hover:text-gray-600">{label}</Link>
                            )}
                        </div>

                        <div className="flex items-center space-x-4">
                            <div className="relative hidden md:flex items-center">
                                <input type="search" className="pl-10  pr-2 h-10 py-1 rounded-lg border border-gray-200   focus:border-indigo-600 outline-none focus:outline-none focus:shadow-inner leading-none" placeholder="Search" />
                                <span className="absolute pl-1 pt-0.5"  >
                                    <Icon icon={<CgSearch />} color="#d1d5db" effects={false} />
                                </span>

                            </div>
                            <div className="relative hidden md:block">
                                <button onClick={() => setDrawers({ ...drawers, filter: true })} role="button" className=" p-2 pl-1 font-semibold h-10 flex items-center justify-center gap-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none" >
                                    <Icon icon={<CgOptions />} effects={false} />
                                    Filter
                                </button>
                            </div>


                            {loggedIn ?
                                (<button onClick={() => setAreOptionsOpen(!areOptionsOpen)} type="button" className={` ${areOptionsOpen ? "bg-gray-200" : ""} group ${interact.scale} md:block  h-10 aspect-square rounded-lg bg-gray-100 border border-gray-200 flex justify-center items-center`}>
                                    <img src={loggedUser.avatar} alt="avatar" className={` ${areOptionsOpen ? "h-8" : "h-7 group-hover:h-8"}   aspect-square rounded-lg mx-auto`} />
                                </button>) : (
                                    <Button label='Login' onClick={() => navigate(auth.login)} />
                                )
                            }
                            <More open={areOptionsOpen} >
                                <Button label='Logout' onClick={() => {
                                    logOut()
                                    setAreOptionsOpen(false)
                                }} />
                            </More>


                        </div>
                    </div>

                    <div className="relative md:hidden">
                        <input type="search" className="mt-1 w-full pl-10 pr-2 h-10 py-1 rounded-lg border border-gray-200 focus:border-gray-300 focus:outline-none focus:shadow-inner leading-none" placeholder="Search" />

                        <svg className="h-6 w-6 text-gray-300 ml-2 mt-3 stroke-current absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                        </svg>
                    </div>

                </div>
            </nav>  
            <Drawer label="Filters" open={drawers.filter} onClose={() => setDrawers({ ...drawers, filter: false })}  >
                <div className="h-full flex flex-col gap-2">
                    {filterSelect.map(({ label, options, value, onChange }) => <Select key={label} value={value} label={label} options={options} onChange={onChange} />)}
                    <Button label="Apply Filter" onClick={() => wow("Apply Fitlers")} className="w-fit mx-auto" />
                </div>
            </Drawer>
        </>
    )
}
