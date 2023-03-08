import { Suspense,lazy } from "react"
import { Routes, Route, useNavigate } from "react-router-dom"
import ProtectedRoutes from "./Components/ProtectedRoutes";
import Loader from "./Components/UI/Loader"; 
import general, { auth } from "./utils/routes";

const Login = lazy(() => import("./Components/Auth/Login"));
const NotFound = lazy(() => import("./Screens/NotFound/NotFound")); 
const Home = lazy(() => import("./Screens/Home/Home")); 
// const Navbar = lazy(() => import("./Components/Navbar/Navbar"))
import Navbar from "./Components/Navbar/Navbar"


import { onAuthStateChanged } from "firebase/auth"
import { auth as firebaseAuth } from "./firebase/firebaseConfig"
import { useAtom } from "jotai"
import { login, name, profilePhoto } from "./utils/store";
import MyPosts from "./Screens/MyPosts/MyPosts";


export default function Router() {

  const [ loggedIn, setLoggedIn ] = useAtom(login)
  const [ displayName, setDisplayName ] = useAtom(name)
  const [ photoURL, setPhotoURL ] = useAtom(profilePhoto)


  onAuthStateChanged(firebaseAuth, user => {
    if (user) {
      setLoggedIn(true)
      setDisplayName(user.displayName)
      setPhotoURL(user.photoURL)
      // localStorage.setItem("email", user.email)

      localStorage.setItem("uid", user.uid);

    }
    else {
      setLoggedIn(false)
      setDisplayName("")
      setPhotoURL("")
      // localStorage.setItem("email", "")

      localStorage.setItem("uid", "")

    }
  })

  return (
    <Suspense fallback={<Loader fullscreen={true} />} >
      <Routes >

        <Route path="/" element={<Navbar />} >

          <Route path={general.index} element={<Home />} />
          <Route path="my-posts" element={<MyPosts />} />
          <Route path={general.notFound} element={<NotFound />} />
          <Route path={auth.login} element={<Login />} />

        </Route>

      </Routes>
    </Suspense>
  )
}