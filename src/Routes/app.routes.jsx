import { Route, Routes } from "react-router-dom";
import { Home } from '../Pages/Home/Home'
import { Pedido } from "../Pages/Pedido/Pedido";
import { Desenhos } from "../Pages/Desenhos/Desenhos";

export function AppRouter() {
    return(
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Pedido" element={<Pedido />} />
            <Route path="/Desenhos" element={<Desenhos />} />
        </Routes>
    )
}