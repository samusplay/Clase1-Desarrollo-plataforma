import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormLayout from "./layouts/FormLayout";
import PruebaLayout from "./layouts/PruebaLayout";
import BasesView from "./views/BasesView";
import ClaseView from "./views/ClaseView";
import ConciertoView from "./views/ConciertoView";
import FormView from "./views/FormView";
import HackathonView from "./views/HackathonView";
import InputView from "./views/InputView";
import OfertaRetroView from "./views/OfertaRetroView";
import ProductsView from "./views/ProductsView";
import RegisterView from "./views/RegisterView";
import SumasView from "./views/SumasView";


export default function Router() {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PruebaLayout />}>
                    <Route path="/bases/constantes" element={<BasesView />} />
                    <Route path="/bases/dados" element={<ClaseView />} />
                    <Route path="/bases/dados2" element={<SumasView />} />
                    <Route path="/bases/tabla"element={<ProductsView/>} />
                    <Route path="/oferta" element={<OfertaRetroView />} />
                </Route>
                <Route element={<FormLayout />}>
                    <Route path="/formulario" element={<FormView />} />
                    <Route path="/formulario2" element={<RegisterView />} />
                    <Route path="/formulario3" element={<InputView />} />
                    <Route path="/formularioConcierto" element={<ConciertoView />} />
                    <Route path="/formulariodev" element={<HackathonView />} />
                </Route>

            </Routes>
        </BrowserRouter>

    )
}