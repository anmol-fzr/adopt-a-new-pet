import { useState, useEffect } from "react"
import { useAtom } from "jotai"

// Components
import Drawer from "../../Components/Drawer/Drawer"
import Button from "../../Components/Form/Button"
import Select from "../../Components/Form/Select"
import Input from "../../Components/Form/Input"
import Label from "../../Components/Form/Label"
import Card from "../../Components/Card"

// Styles
import { container } from "../../styles/style"

// Options
import { colors, healths, breeds, injuries, animals as animalsOptions } from "../../utils/options"

import { animalsData, name as userName } from "../../utils/store"

// Firebase
import { db } from "../../firebase/firebaseConfig"
import { collection, getDocs } from "firebase/firestore"


import { v4 as uuid } from "uuid"
import { animalObject } from "../../utils/extras"
import { postAnimal } from "../../utils/functions"
import { Toaster, SuccessToast, ErrorToast } from "../../Components/Toasts"

import { MdAdd } from "react-icons/md"

// console.clear()

const randomId = uuid()

export default function Home() {
    const uid = localStorage.getItem("uid")
    const [ drawers, setDrawers ] = useState({
        add: false
    })
    const [ displayName ] = useAtom(userName)
    const [ animals, setAnimals ] = useAtom(animalsData)
    // const [ animals, setAnimals ] = useState([])
    const [ newAnimal, setNewAnimal ] = useState(animalObject(displayName, uid, randomId))

    function push() {
        const res = postAnimal(newAnimal, randomId)
        res.then(() => SuccessToast("Post Created Succesfully"))

        setDrawers({ ...drawers, add: false })
        console.log(newAnimal)
        window.location.reload(true)
    }

    function handleChange(e, key) {
        return setNewAnimal({ ...newAnimal, [ key ]: e.value })
    }

    const selects = [
        {
            label: "animal",
            options: animalsOptions,
            value: newAnimal.animal,
            onChange: e => handleChange(e, "animal")
        },
        {
            label: "color",
            options: colors,
            value: newAnimal.color,
            onChange: e => handleChange(e, "color")
        },
        {
            label: "breed",
            options: breeds,
            value: newAnimal.breed,
            onChange: e => handleChange(e, "breed")
        },
        {
            label: "injury",
            options: injuries,
            value: newAnimal.injury,
            onChange: e => handleChange(e, "injury")
        },
        {
            label: "health",
            options: healths,
            value: newAnimal.health,
            onChange: e => handleChange(e, "health")
        },
    ]

    const inputs = [
        {
            label: "price",
            type: "number",
            value: newAnimal.price,
            onChange: e => handleChange(e.target, "price")
        },
        {
            label: "name",
            value: newAnimal.name,
            onChange: e => handleChange(e.target, "name")
        },
        {
            label: "desc",
            value: newAnimal.desc,
            onChange: e => handleChange(e.target, "desc")
        },
        {
            label: "image",
            value: newAnimal.image,
            type: "url",
            onChange: e => handleChange(e.target, "image")
        },
    ]

    async function fetchAnimals() {
        const docsSanp = await getDocs(collection(db, "posts")).then(res => res).catch(err => err)
        const arr = []
        docsSanp.forEach(element => {
            arr.push(element.data())
            setAnimals(arr)
        });
    }

    useEffect(() => {
        fetchAnimals()
    }, [])

    return (
        <div className={`  ${container.scrollPadding} min-h-screen `} >
            <Toaster />

            <Button
                className=" absolute bottom-8 right-8   rounded-full aspect-square h-fit p-1.5"
                label={<MdAdd size="1.5em" />}
                onClick={() => setDrawers({ ...drawers, add: true })} />


            <Drawer label="Post a pet" open={drawers.add} onClose={() => setDrawers({ ...drawers, add: false })}  >
                <div className="h-full flex flex-col gap-2">
                    {selects.map(({ label, options, value, onChange }) => <Select key={label} value={value} label={label} options={options} onChange={onChange} />)}
                    {inputs.map(({ label, type, value, onChange }) => <Input key={label} label={label} type={type} value={value} onChange={onChange} />)}
                    <img src={newAnimal.image} alt="" />
                    <Button label="Post" onClick={push} className="w-fit mx-auto" />
                </div>
            </Drawer>

            <div className="flex flex-col gap-2 p-2">
                <Label label="Animals" optional={true} />
                <div className=" columns-2 xl:columns-3 2xl:columns-6 gap-2">
                    {animals.map(({ name, desc, health, injury, color, breed, author, time, uuid, image }) =>
                        (<Card name={name} img={image} desc={desc} health={health} injury={injury} time={String(time)} author={author} color={color} breed={breed} />))}
                </div>
            </div>

        </div>
    )
}


{/* <div className=' flex w-full flex-col sm:block columns-2 px-8 py-16 items-center xl:columns-3 2xl:columns-4' >
    {menuData.map((product) => {
        return (
            <>
                <div key={product.name} className='flex flex-col p-1 xl:p-2 bg-transparent break-inside-avoid w-full  '>
                    <div className="container p-2 md:p-4 my-2 mx-auto rounded-lg shadow-2xl productCard hover:scale-[1.025]">
                        <div className="relative">
                            <img className="w-max" src={product.image} alt="" />
                        </div>
                        <div className="m-2 text-gray-500">
                            <span className='flex justify-between items-center' >
                                <h1 className="  font-bold text-2xl">{product.name}</h1>
                                <p className='dull-clr   font-bold text-lg' >{product.price}</p>
                            </span>
                            <p className="text-gray-500">{product.desc}</p>
                            <div className='flex justify-end' >
                                <button className='px-2 py-1 flex items-center gap-1 bg-blue-500 text-white rounded-lg hover:bgb-blue-600 ' >
                                    5
                                    <span className="text-white text-sm star material-symbols-outlined">
                                        star
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        )
    })}
</div></> */}


