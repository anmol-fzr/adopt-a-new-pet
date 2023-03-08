import { Suspense, lazy } from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import Card from '../../Components/Card';
import Container from '../../Components/Container';
import Button from '../../Components/Form/Button';
import Label from '../../Components/Form/Label';
import Loader from '../../Components/UI/Loader';
import { container } from '../../styles/style';

const NotFound = lazy(() => import("../NotFound/NotFound"));


export default function PostPage({ }) {
    const location = useLocation()
    const data = location.state;
    return (
        <Suspense fallback={<Loader fullscreen={true} />} >
            {data ?
                (
                    <div className={` min-h-screen w-full ${container.scrollPadding}  `} >

                        {/* <Link to={`post/${data.name.split(" ").join("-")}`} state={data} >
                                <Card img={data.image} key={data.name} name={data.name} desc={data.desc} health={data.health} injury={data.injury} time={String(data.time)} author={data.author} color={data.color} breed={data.breed} />
                            </Link> */}

                        <div className="py-6">
                            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
                                <div className="flex flex-col md:flex-row -mx-4">
                                    <div className="md:flex-1 px-4">
                                        <div className="h-64 md:h-80 rounded-lg bg-gray-100 mb-4">
                                            <img className="h-64 md:h-80 w-full object-cover rounded-lg bg-gray-100 mb-4 flex items-center justify-center" src={data.image} alt="" />
                                        </div>
                                    </div>
                                    <div className="md:flex-1 px-4">
                                        <h2 className="mb-2 leading-tight tracking-tight font-bold text-gray-800 text-2xl md:text-3xl capitalize">{data.name}.</h2>
                                        <p className="text-gray-500 text-sm">By <a href="#" className="text-indigo-600 hover:underline">{data.author.name}</a></p>

                                        <div className="flex items-center space-x-4 my-4">
                                            <div className="rounded-lg bg-gray-100 flex py-2 px-3">
                                                {data.price > 0 ?
                                                    (<>
                                                        <span className="text-indigo-400 mr-1 mt-1">₹</span>
                                                        <span className="font-bold text-indigo-600 text-3xl">{data.price}</span>
                                                    </>)
                                                    : (<>
                                                        <span className="font-bold text-indigo-600 text-3xl">Free</span>
                                                    </>)

                                                }
                                            </div>
                                        </div>

                                        <p className="text-gray-500 capitalize">{data.desc}.</p>

                                        <div className="flex py-4 space-x-4">
                                            <Button label={`Chat with ${data.author.name}`} className="h-14 px-6 py-2 font-semibold rounded-xl text-lg" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                )
                : (
                    <div>
                        <NotFound />
                    </div>
                )
            }
        </Suspense >
    )
}