import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from '../Pages/Home/Home'
import { Pedido } from "../Pages/Pedido/Pedido";
import { Desenhos } from "../Pages/Desenhos/Desenhos";
import { Galeria } from "../Pages/Galeria/Galeria";
import { PrimeirasFotos } from "../Pages/Galeria/PrimeirasFotos/PrimeirasFotos";
import { PedidoFotos } from "../Pages/Galeria/PedidoFotos/PedidoFotos";
import { Notes } from "../Pages/Notes/Notes";
import ScrollToTop from "./ScrollToTop";

export function AppRouter() {
    const location = useLocation();
    return(
        <>
            {location.pathname !== '/' && <ScrollToTop />} 
        
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/Pedido" element={<Pedido />} />
                <Route path="/Desenhos" element={<Desenhos />} />
                <Route path="/Galeria" element={<Galeria />} />
                <Route path="/PrimeirasFotos" element={<PrimeirasFotos />} />
                <Route path="/DiaDoPedido" element={<PedidoFotos />} />
                <Route path="/Notas" element={<Notes />} />
            </Routes>
        </>
    )
}