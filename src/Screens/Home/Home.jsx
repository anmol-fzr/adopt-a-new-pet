import { useState, useEffect } from "react"
import { useAtom } from "jotai"

// Components
import Drawer from "../../Components/Drawer/Drawer"
import Button from "../../Components/Form/Button"
import Select from "../../Components/Form/Select"
import Input from "../../Components/Form/Input" 

// Styles
import { container } from "../../styles/style"

// Options
import { colors, healths, breeds, injuries, animals as animalsOptions, } from "../../utils/options"

import { animalsData, user } from "../../utils/store"

// Firebase 
import { getDocs, query, where } from "firebase/firestore"
import { v4 as uuid } from "uuid"
import { animalObject } from "../../utils/extras"
import { breedSelector, postAnimal, postsCollectionRef } from "../../utils/functions"
import { Toaster, SuccessToast, ErrorToast } from "../../Components/Toasts"

import { CgMathPlus } from "react-icons/cg"
import Container from "../../Components/Container"

const randomId = uuid()

export default function Home({ filter }) {
    const uid = localStorage.getItem("uid")
    const [ drawers, setDrawers ] = useState({
        add: false,
    }) 

    const [ loggedUser, setLoggedUser ] = useAtom(user)


    const [ rawAnimals ] = useAtom(animalsData)
    const [ animals, setAnimals ] = useState([])

    // if (filter == "") {
    //     setAnimals(rawAnimals)
    // }
    // else {
    //     // console.log(animals)
    //     // console.log("applied filter:", filter)
    // }

    const [ newAnimal, setNewAnimal ] = useState(animalObject(loggedUser.name, uid, randomId, loggedUser.avatar))

    function push() {
        const res = postAnimal(newAnimal, randomId)
        res.then(() => SuccessToast("Post Created Succesfully"))

        setDrawers({ ...drawers, add: false })
        console.log(newAnimal)
        // window.location.reload(true)
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
            options: breedSelector(newAnimal.animal),
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
            desc: "in rupees",
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

    function createFilterQuery(value) {
        if (value == "any" || value == "unknown" || value == "other") return
        // return const Query = where("animal", '==', value)
    }

    async function fetchAnimals(filter) {

        // const animalQuery = where("animal", '==', animal)
        // const breedQuery = where("breed", '==', breed)
        // const colorQuery = where("color", '==', color)
        // const priceQuery = where("price", '<=', price)

        // const q = query(postsCollectionRef, animalQuery, breedQuery, colorQuery, priceQuery);

        if (filter) {
            const q = query(postsCollectionRef, where("animal", "==", filter));
            // const q = query(postsCollectionRef, where("breed", "==", "dobermann"));
            // const q = query(postsCollectionRef, where("color", "==", "ginger"));
            // const q = query(postsCollectionRef, where("price", "<=", "ginger"));
            const arr = []
            const querySnapshot = await getDocs(q);
            querySnapshot.forEach(doc => {
                arr.push(doc.data())
                setAnimals(arr)
            });
        }
        else {
            const docsSanp = await getDocs(postsCollectionRef).then(res => res).catch(err => err)
            const arr = []
            docsSanp.forEach(element => {
                arr.push(element.data())
                setAnimals(arr)
            });
        }
    }


    useEffect(() => {
        fetchAnimals(filter)
    }, [])

    return (
        <div className={`  ${container.scrollPadding} min-h-screen flex  cursor-pointer`} >
            <Toaster />

            <div onClick={() => setDrawers({ ...drawers, add: true })} className="flex flex-col items-end justify-end fixed bottom-0 right-8 group " >
                <Button className=" justify-self-end rounded-full aspect-square w-fit p-1.5" label={<CgMathPlus size="1.5em" />} />
                <p className="-top-24 left-3 opacity-0 bg-gray-300 p-1 capitalize font-medium px-2 rounded-md relative group-hover:opacity-100" >add post</p>
            </div>


            <Drawer label="Post a pet" open={drawers.add} onClose={() => setDrawers({ ...drawers, add: false })}  >
                <div className="h-full flex flex-col gap-2">
                    {selects.map(({ label, options, value, onChange }) => <Select key={label} value={value} label={label} options={options} onChange={onChange} />)}
                    {inputs.map(({ label, type, value, onChange, desc }) => <Input key={label} label={label} desc={desc} type={type} value={value} onChange={onChange} />)}
                    <img src={newAnimal.image} alt="" />
                    <Button label="Post" onClick={push} className="w-fit mx-auto" />
                </div>
            </Drawer>




            <Container label="Animals" data={animals} />

        </div>
    )
}