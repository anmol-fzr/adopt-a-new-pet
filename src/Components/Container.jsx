import React from 'react'
import { Link } from 'react-router-dom'
import { container } from '../styles/style'
import Card from './Card'
import Label from './Form/Label'


export default function Container({ label, data }) {

    return (
        <div className="flex flex-col w-full gap-2 p-2">
            {data ? (
                <>
                    <Label label={label} optional={true} />
                    <div className={container.columns}>
                        {data.map((data) => {
                            return (
                                <Link key={data.name} to={`post/${data.name.split(" ").join("-")}`} state={data} >
                                    <Card img={data.image} name={data.name} desc={data.desc} health={data.health} injury={data.injury} time={String(data.time)} author={data.author} color={data.color} breed={data.breed} />
                                </Link>
                            )
                        }
                        )}
                    </div>
                </>
            ) : (<>
                <div className='flex flex-col h-full items-center gap-4 justify-center'  >
                    <h1 className='text-center font-medium' >No Animals Listed Still</h1>
                    <p>Click on the button in bottom right corner to post a new animal</p>

                </div>
            </>)}
        </div>
    )
}
