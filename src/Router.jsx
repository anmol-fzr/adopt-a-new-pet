import { Suspense,lazy } from "react"
import { Routes, Route } from "react-router-dom"
import Loader from "./Components/UI/Loader"; 
import general, { auth } from "./utils/routes";

const Login = lazy(() => import("./Components/Auth/Login"));
const NotFound = lazy(() => import("./Screens/NotFound/NotFound")); 
const Home = lazy(() => import("./Screens/Home/Home")); 
const MyPosts = lazy(() => import("./Screens/MyPosts/MyPosts"));
const PostPage = lazy(() => import("./Screens/PostPage/PostPage"));
const Header = lazy(() => import("./Components/Navbar/Header"));
const Dogs = lazy(() => import("./Screens/Dogs"));
const Cattle = lazy(() => import("./Screens/Cattle"));
const Cats = lazy(() => import("./Screens/Cats"));
// import Navbar from "./Components/Navbar/Navbar"



import { onAuthStateChanged } from "firebase/auth"
import { auth as firebaseAuth } from "./firebase/firebaseConfig"
import { useAtom } from "jotai"
import { login, name, profilePhoto } from "./utils/store";


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

        <Route path="/" element={<Header />} >

          <Route path={general.index} element={<Home />} />
          <Route path={general.myPosts} element={<MyPosts />} />
          <Route path={general.postPage} element={<PostPage />} />
          <Route path={general.cats} element={<Cats />} />
          <Route path={general.dogs} element={<Dogs />} />
          <Route path={general.cattles} element={<Cattle />} />
          <Route path={general.notFound} element={<NotFound />} />
          <Route path={auth.login} element={<Login />} />

        </Route>

      </Routes>
    </Suspense>
  )
}