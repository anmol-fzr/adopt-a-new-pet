const any = { label: "any", value: "any" };
const unknown = { label: "unknown", value: "unknown" };
const other = { label: "other", value: "other" };
const colors = [
    {
        label: "black",
        value: "black"
    },
    {
        label: "brown",
        value: "brown"
    },
    {
        label: "white",
        value: "white"
    },
    {
        label: "black",
        value: "black"
    },
    {
        label: "ginger",
        value: "ginger"
    },
]
const healths = [
    {
        label: "not so good",
        value: "not so good"
    },
    {
        label: "so so",
        value: "so so"
    },
    {
        label: "great",
        value: "great"
    },
]


// const q = query(postsCollectionRef, where("animal", "==", filter));
// const q = query(postsCollectionRef, where(label, operator, value));
// const arr = []
// const querySnapshot = await getDocs(q);
// querySnapshot.forEach(doc => {
//     arr.push(doc.data())
//     setAnimals(arr)
// });



const catBreeds = [
    any,
    unknown,
    other,
    {
        label: "persian cart",
        value: "persian cart",
    },
    {
        label: "Maine Coon",
        value: "Maine Coon",
    },
    {
        label: "Siamese cat",
        value: "Siamese cat",
    },
    {
        label: "Bombay cat",
        value: "Bombay cat",
    },
    {
        label: "Himalayan cat",
        value: "Himalayan cat",
    },
    {
        label: "American Bobtail",
        value: "American Bobtail",
    },
    {
        label: "Ragdoll",
        value: "Ragdoll",
    },
    {
        label: "Exotic Shorthair",
        value: "Exotic Shorthair",
    },
    {
        label: "British Shorthair",
        value: "British Shorthair",
    },
    {
        label: "Scottish Fold",
        value: "Scottish Fold",
    },
    {
        label: "Burmese cat",
        value: "Burmese cat",
    },
    {
        label: "Russian Blue",
        value: "Russian Blue",
    },
    {
        label: "Singapura cat",
        value: "Singapura cat",
    },
    {
        label: "Sphynx cat",
        value: "Sphynx cat",
    },
    {
        label: "American Shorthair",
        value: "American Shorthair",
    },
    {
        label: "Somali cat",
        value: "Somali cat",
    },
]
const dogBreeds = [
    any,
    unknown,
    other,
    {
        label: "Indian pariah dog",
        value: "Indian pariah dog"
    },
    {
        label: "Rajapalayam dog",
        value: "Rajapalayam dog"
    },
    {
        label: "Mudhol hound",
        value: "Mudhol hound"
    },
    {
        label: "Labrador Retriever",
        value: "Labrador Retriever"
    },
    {
        label: "Pug",
        value: "Pug"
    },
    {
        label: "Indian Spitz",
        value: "Indian Spitz"
    },
    {
        label: "boxer",
        value: "boxer"
    },
    {
        label: "Dobermann",
        value: "Dobermann"
    },
    {
        label: "Chihuahua",
        value: "Chihuahua"
    },
    {
        label: "American Indian Dog",
        value: "American Indian Dog"
    },
]
const cattleBreeds = [
    any, unknown, other,
    {
        label: "Sahiwal cattle",
        value: "Sahiwal cattle"
    },
    {
        label: "Ongole cattle",
        value: "Ongole cattle"
    },
    {
        label: "Krishna Valley",
        value: "Krishna Valley"
    },
    {
        label: "Rathi cattle",
        value: "Rathi cattle"
    },
    {
        label: "Bachaur cattle",
        value: "Bachaur cattle"
    },
]

const breeds = {
    dog: dogBreeds,
    cat: catBreeds,
    cattle: cattleBreeds,
    other: [
        unknown
    ]
}
const injuries = [
    {
        label: "none",
        value: "none"
    },
    {
        label: "head",
        value: "head"
    },
    {
        label: "leg",
        value: "leg"
    },
]



const animals = [
    {
        label: "cat",
        value: "cat"
    },
    {
        label: "dog",
        value: "dog"
    },
    {
        label: "cattle",
        value: "cattle"
    },
]

function addAny(arr) {
    return [ any, ...arr ]
}

console.log()

const prices = [
    {
        label: "any",
        value: "any"
    },
    {
        label: "adopt",
        value: null
    },
    {
        label: "under 1000",
        value: 1000
    },
    {
        label: "under 2000",
        value: 2000
    },
    {
        label: "under 5000",
        value: 5000
    },
]

const filterOptions = {
    prices,
    animals: addAny(animals),
    colors: addAny(colors)
}

export { colors, healths, breeds, injuries, animals, filterOptions }