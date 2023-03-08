// export const animalObject = {
//     color: "brown",
//     breed: "unknown",
//     image: "",
//     location: 'here',
//     injury: "none",
//     health: "great",
//     name: "name",
//     desc: "desc",
//     price: 0,
//     time: new Date().toDateString(),
//     author: {
//         name: displayName,
//         uid,
//     },
//     uuid: randomId
// }


export function animalObject(name, uid, uuid) {
    return {
        color: "brown",
        breed: "unknown",
        image: "",
        location: 'here',
        injury: "none",
        health: "great",
        name: "name",
        desc: "desc",
        animal: "cat",
        price: 0,
        time: new Date().toDateString(),
        author: {
            name,
            uid,
        },
        uuid
    }
}