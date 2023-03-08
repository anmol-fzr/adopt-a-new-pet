import { useState, useEffect } from "react"

// Components
import Card from "../../Components/Card"
import Label from "../../Components/Form/Label"
import Icon from "../../Components/UI/Icon"
import Drawer from "../../Components/Drawer/Drawer"
import Input from "../../Components/Form/Input"
import Select from "../../Components/Form/Select"
import Button from "../../Components/Form/Button"
import Modal from "../../Components/UI/Modal"

// Styles
import { container, interact } from "../../styles/style"

// Firebase
import { collection, getDocs, where, query, doc, deleteDoc, updateDoc } from "firebase/firestore"
import { db } from "../../firebase/firebaseConfig"

// React Icons
import { HiOutlineTrash, HiOutlinePencil } from "react-icons/hi"

// Jotai
import { useAtom } from "jotai"
import { login, name as userName } from "../../utils/store"

// Options
import { colors, healths, breeds, injuries } from "../../utils/options"
import { animalObject } from "../../utils/extras"
import { Toaster, SuccessToast, ErrorToast } from "../../Components/Toasts"

// console.clear()
const uid = localStorage.getItem("uid")
const postsCollectionRef = collection(db, "posts")


export default function MyPosts() {
    const [ loggedIn ] = useAtom(login)
    const [ drawers, setDrawers ] = useState({
        edit: false,
        trash: false,
    })
    const [ displayName ] = useAtom(userName)
    const [ animals, setAnimals ] = useState([])
    const [ newAnimal, setNewAnimal ] = useState(animalObject(displayName, uid, ""))

    async function fetchMyAnimal() {
        const q = query(postsCollectionRef, where("author.uid", "==", uid));

        const arr = []
        const querySnapshot = await getDocs(q);
        querySnapshot.forEach(doc => {
            arr.push(doc.data())
            setAnimals(arr)
        });
    }
    async function deletePost() {
        const res = await deleteDoc(doc(db, "posts", newAnimal.uuid))
        SuccessToast("Post Deleted Succesfully")
    }
    async function update() {
        await updateDoc(doc(db, "posts", newAnimal.uuid), newAnimal)
        SuccessToast("Post Updated Succesfully")
        setDrawers({ ...drawers, edit: false })
    }

    useEffect(() => {
        fetchMyAnimal();
    }, [])

    const selects = [
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

    function handleChange(e, key) {
        return setNewAnimal({ ...newAnimal, [ key ]: e.value })
    }

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

    function edit(uuid) {
        setNewAnimal(filterPost(uuid))
        setDrawers({ ...drawers, edit: true })
    }

    function trash(uuid) {
        setNewAnimal(filterPost(uuid))
        setDrawers({ ...drawers, trash: true })
    }

    function filterPost(uuid) {
        return animals.filter(animal => animal.uuid === uuid)[ 0 ]
    }

    function TrashModal() {
        return (<Modal title="Do You want to Delete the post?" open={drawers.trash} onClose={() => setDrawers({ ...drawers, trash: false })} >
            <div className="text-center flex items-center w-full flex-col gap-2 " >
                do you really want to delete the post with title
                <p className="font-semibold" >{newAnimal.name}</p>
                <img src={newAnimal.image} alt="" />
                <div className="p-2 h-fit w-full flex gap-2 items-center justify-between ">
                    <button onClick={() => setDrawers({ ...drawers, trash: false })} className={`p-3 px-4 rounded-md bg-gray-200 hover:bg-gray-100 text-gray-700 ${interact.scale} ${interact.shadow} `} >
                        Cancel
                    </button>
                    <button onClick={deletePost} className={`  p-1  px-4 rounded-md flex items-center bg-red-100 hover:bg-red-200 text-red-500 ${interact.scale} ${interact.shadow} `} >
                        <Icon onClick={trash} icon={<HiOutlineTrash />} color="red" effects={false} />
                        Delete
                    </button>
                </div>
            </div>

        </Modal>)
    }

    return (
        <div className={` min-h-screen flex ${container.scrollPadding}`} >
            <Toaster />

            {loggedIn
                ? (
                    <>
                        <Drawer label="Update a Post" open={drawers.edit} onClose={() => setDrawers({ ...drawers, edit: false })} >
                            <div className="h-full flex flex-col gap-2">
                                {selects.map(({ label, options, value, onChange }) => <Select key={label} value={value} label={label} options={options} onChange={onChange} />)}
                                {inputs.map(({ label, type, value, onChange, desc }) => <Input key={label} desc={desc} label={label} type={type} value={value} onChange={onChange} />)}
                                <img src={newAnimal.image} alt="" />
                                <Button label="Update" onClick={update} className="w-fit mx-auto" />
                            </div>
                        </Drawer >

                        <TrashModal />

                        <div className="flex flex-col gap-2 p-2">
                            <Label label="Animals" optional={true} />
                            <div className={container.columns}>
                                {animals.map(({ name, desc, health, injury, color, breed, author, time, uuid, image }) =>
                                    <Card img={image} other={<Actions trash={() => trash(uuid)} edit={() => edit(uuid)} />} key={name} name={name} desc={desc} health={health} injury={injury} time={String(time)} author={author} color={color} breed={breed} />
                                )}
                            </div>
                        </div> 
                    </>)
                : (<h1 className="capitalize text-center m-auto" >login to see your posts</h1>)
            }
        </div >
    )
}

function Actions({ edit, trash }) {
    return (
        <div className="p-2 h-fit  flex gap-2 items-center  ">
            <Icon onClick={trash} icon={<HiOutlineTrash />} color="red" />
            <Icon onClick={edit} icon={<HiOutlinePencil />} />
        </div>
    )
}