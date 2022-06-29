import { BrowserRouter , Route ,  Routes  } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage'
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailsPage from "../pages/DetailsPage/DetailsPage"

const Router = () =>{
    return <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="pokedex" element={<PokedexPage />} />
                <Route path="details" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    
}

export default Router