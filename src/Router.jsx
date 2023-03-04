import { MantineProvider } from '@mantine/core';
import { AnimatePresence } from "framer-motion";
import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";


// Components
import Loader from "./Components/UI/Loader"

// Screens
const Home = lazy(() => import("./Screens/Home/Home"));

export default function Router() {
  return (
    <Suspense fallback={<Loader fullscreen={true} />} >

      <AnimatePresence presenceAffectsLayout >
        <MantineProvider theme={{ colorScheme: 'dark' }} >

          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>

        </MantineProvider>
      </AnimatePresence>

    </Suspense>
  );
} 