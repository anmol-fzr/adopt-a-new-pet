import React from 'react'
import { useLocation } from "react-router-dom"
import { CgChevronRight } from "react-icons/cg"
import Icon from "../../../Components/UI/Icon"
import general from '../../../utils/routes'
import { Link } from 'react-router-dom'

export default function BreadCrubms() {
    const location = useLocation();
    const pathParts = location.pathname.split("/");

    let page = pathParts[ 0 ] == "" ? "home" : ""
    let subPage = pathParts[ 1 ]
    let section = pathParts.length >= 3 ? "Post" : ""

    page = page.split("-").join(" ")

    const helper = {
        home: general.index,
        cats: general.cats,
        dogs: general.dogs,
        cattle: general.cattles,
        "my-posts": general.myPosts
    }

    const crumbs = [
        {
            label: page,
            to: helper[ page.toLowerCase() ]
        },
        {
            label: subPage,
            to: helper[ subPage.toLowerCase() ]
        },
        {
            label: section,
            to: helper[ section.toLowerCase() ]
        },
    ]

    // const crumbs = []

    // arr.map(crumb => crumbs.push(crumb.split("-").join(" ")))


    return (
        subPage !== "login" &&
        (<div className="max-w-7xl mx-auto py-4 w-full ml-0 px-4 sm:px-6 lg:px-8 shadow-sm" >
            <div className="flex items-center gap-x-2 text-gray-400 text-sm">
                {crumbs.map(({ label, to }) => {
                    return (label && <Link to={to} key={label} className='flex items-center' >
                        <p className="hover:underline capitalize hover:text-gray-600">{label}</p>
                        <Icon icon={<CgChevronRight />} color="#d1d5db" size='1.6em' effects={false} />
                    </Link>
                    )
                }
                )}
            </div>
        </div>)
    )
}
