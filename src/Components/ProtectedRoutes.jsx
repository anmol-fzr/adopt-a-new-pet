import { useNavigate } from "react-router-dom"
import { useAtom } from "jotai"
import { login } from "../utils/store"

export default function ProtectedRoutes({ element }) {
    const navigate = useNavigate()
    const [ loginState ] = useAtom(login)
    if (loginState) return element
    navigate("/login")
}