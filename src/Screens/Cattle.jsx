import { lazy } from 'react'
const Home = lazy(() => import('./Home/Home'));

export default function Cattle() {
    return (
        <Home filter="cattle" />
    )
}
