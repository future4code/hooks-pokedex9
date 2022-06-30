import { BrowserRouter , Route ,  Routes  } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage'
import PokedexPage from "../pages/PokedexPage/PokedexPage";
import DetailsPage from "../pages/detailsPage/DetailsPage"

const Router = () =>{
    return <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route path="pokedex" element={<PokedexPage />} />
                <Route path="/:id" element={<DetailsPage />} />
            </Routes>
        </BrowserRouter>
    
}

export default Router