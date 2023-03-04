export default function Loader({ fullscreen }) {
    return (
        <div className={`${fullscreen ? `min-h-screen` : `w-full h-full`} flex items-center justify-center`}>
            <div className="wrapper">
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </div>
    )
}
