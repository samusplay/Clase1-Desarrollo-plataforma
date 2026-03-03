import { BrowserRouter, Route, Routes } from "react-router-dom";
import PruebaLayout from "./layouts/PruebaLayout";
import BasesView from "./views/BasesView";


export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<PruebaLayout/>}>
            <Route path="/bases/constantes"element={<BasesView/>} />

            </Route>
        </Routes>
        </BrowserRouter>

    )
}