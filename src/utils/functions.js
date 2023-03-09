import { collection, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";
import { breeds } from "./options";


export const postsCollectionRef = collection(db, "posts")

async function postAnimal(data, uuid) {
    const res = await setDoc(doc(db, "posts", uuid), data);
    if (res) return "posted succesfully"
}

export function breedSelector(animal) {
    switch (animal) {
        case "cat": return breeds.cat
        case "dog": return breeds.dog
        case "cattle": return breeds.cattle
        default: breeds.other
    }
}


// async function postAnimal(data, uuid) {
//     const res = await addDoc(collection(db, "posts"), uuid, data);
//     if (res) return "posted succesfully"
// }

// Add a new document in collection "cities"
// await setDoc(doc(db, "cities", "LA"), {
//     name: "Los Angeles",
//     state: "CA",
//     country: "USA"
// });



export { postAnimal }

