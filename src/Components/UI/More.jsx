
export default function More({ children, open }) {
    return (
        <div className={` ${open ? "" : "origin-top scale-0 opacity-0"} absolute top-20 right-4 max-w-sm bg-gray-200 rounded-md p-2`} >
            {children}
        </div>
    )
}
