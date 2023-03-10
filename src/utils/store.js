import { loadable } from "jotai/utils"
import { atom } from 'jotai'

export const login = atom(true)
export const userId = loadable(atom(async get => get))

export const user = atom({
    name: "",
    email: "",
    avatar: "",

})

export const filter = atom({
    animal: "",
    price: "",
    breed: "",
    color: "",
})

export const filters = atom({
    animal: {
        label: "animal",
        operator: "==",
        value: ""
    },
    price: "",
    breed: "",
    color: "",
})



export const animalsData = atom([])




// const loadableAtom = loadable(atom(async (get) => get))
// // Does not need to be wrapped by a <Suspense> element
// const Component = () => {
//     const [ value ] = useAtom(loadableAtom)
//     if (value.state === 'hasError') return <Text>{value.error}</Text>
//     if (value.state === 'loading') {
//         return <Text>Loading...</Text>
//     }
//     console.log(value.data) // Results of the Promise
//     return <Text>Value: {value.data}</Text>
// }