import { BrowserRouter , Route ,  Routes  } from "react-router-dom";
import HomePage from '../pages/HomePage/HomePage'


const Router = () =>{
    return <BrowserRouter>
            <Routes>
                <Route index element={<HomePage/>}/>
                <Route/>
                <Route/>
            </Routes>
        </BrowserRouter>
    
}

export default Router