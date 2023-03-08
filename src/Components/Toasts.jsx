import toast, { Toaster as ToasterUI } from "react-hot-toast"

export const Toaster = () => <ToasterUI position="top-right" reverseOrder={false} />
export const SuccessToast = text => toast.success(text)
export const ErrorToast = text => toast.error(text)