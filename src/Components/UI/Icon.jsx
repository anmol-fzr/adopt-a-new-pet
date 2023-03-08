import { IconContext } from "react-icons";

export default function Icon({ color = "black", size = "1.5em", icon, onClick }) {
  return (
    <IconContext.Provider value={{ color, size, className: "global-class-name" }}>
      <button onClick={onClick} className={`p-1 w-fit active:scale-90 hover:scale-110 hover:backdrop-brightness-90 rounded-lg cursor-pointer`}>
        {icon}
      </button>
    </IconContext.Provider>
  )
}