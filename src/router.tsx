import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLayout from "./layouts/FormLayout";
import PruebaLayout from "./layouts/PruebaLayout";
import BasesView from "./views/BasesView";
import FormView from "./views/FormView";
import RegisterView from "./views/RegisterView";


export default function Router(){
    return(
        <BrowserRouter>
        <Routes>
            <Route element={<PruebaLayout/>}>
            <Route path="/bases/constantes"element={<BasesView/>} />
            </Route>
            <Route element={<FormLayout />}>
            <Route path="/formulario"element={<FormView/>}/>
            <Route path="/formulario2"element={<RegisterView/>}/>
            </Route>

        </Routes>
        </BrowserRouter>

    )
}