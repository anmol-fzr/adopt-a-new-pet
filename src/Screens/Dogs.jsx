import React, { lazy } from 'react'
const Home = lazy(() => import('./Home/Home'));

export default function Dogs() {
    return (
        <Home filter="dog" />
    )
}
