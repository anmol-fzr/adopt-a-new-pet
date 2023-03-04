import { IconContext } from "react-icons";

export default function Icon({ children, color = "white", size = "1.5em" }) {
  return (
    <IconContext.Provider value={{ color, size, className: "global-class-name" }}>
      {children}
    </IconContext.Provider>
  )
} 