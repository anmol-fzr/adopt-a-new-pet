import Label from "./Form/Label"

export default function Card({ name, desc, health, injury, color, breed, author, time, other, img }) {
    return (
        <div className="p-2 group scale-95 hover:scale-100 active:scale-90 cursor-pointer">
            <div className="max-w-sm rounded relative overflow-hidden shadow-lg">
                <img className="h-60 aspect-video object-cover" src={img} alt="Mountain" />
                <div className="absolute top-0 right-0 bg-gray-50/50 rounded-bl-2xl">{other}</div>
                <div className="px-6 py-4 bg-white">
                    <div className="font-bold text-xl mb-2 capitalize">{name}</div>
                    <p className="text-gray-700 text-base">
                        {desc.length > 75 ? desc.substring(0, 75) : desc}
                    </p>
                    <p className="text-gray-700 text-base">posted by {author.name}   </p>
                </div>
                {/* <div className="px-6   pb-6 hidden group-hover:flex flex-col ">
                    <Details label="health" value={health} />
                    <Details label="Injury" value={injury} />
                    <Details label="Color" value={color} />
                    <Details label="Breed" value={breed} />
                </div> */}
            </div>
        </div>
    )
}




function Details({ label, value }) {
    return (
        <span className="flex gap-1 items-center" >
            <Label label={label} optional={true} />:
            <Label label={value} optional={true} />
        </span>
    )
}