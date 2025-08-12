import {Routes, Route} from "react-router-dom"
import {lazy, Suspense} from "react"

import Loyout from "./components/base/Loyout"
import Loader from "./components/base/Loader"
import Toaster from "./components/base/Toaster"

const Home = lazy(() => import("./pages/Home"))
const Recipes = lazy(() => import("./pages/Recipes"))
const NotFound = lazy(() => import("./pages/NotFound"))

const App = () => {
    return (
        <>
            <Suspense fallback={<Loader />}>
                <Routes>
                    <Route path="/" element={<Loyout />}>
                        <Route index element={<Home />} />
                        <Route path="recipes" element={<Recipes />} />
                        <Route path="*" element={<NotFound />} />
                    </Route>
                </Routes>
            </Suspense>

            <Toaster />
        </>
    )
}

export default App
