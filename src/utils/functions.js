import { collection, addDoc, query, where, setDoc, doc } from "firebase/firestore";
import { db } from "../firebase/firebaseConfig";

async function postAnimal(data, uuid) {
    const res = await setDoc(doc(db, "posts", uuid), data);
    if (res) return "posted succesfully"
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

