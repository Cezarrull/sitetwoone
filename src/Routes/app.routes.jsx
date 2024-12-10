import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from '../Pages/Home/Home'
import { Pedido } from "../Pages/Pedido/Pedido";
import { Desenhos } from "../Pages/Desenhos/Desenhos";
import { Galeria } from "../Pages/Galeria/Galeria";
import { PrimeirasFotos } from "../Pages/Galeria/PrimeirasFotos/PrimeirasFotos";
import { PedidoFotos } from "../Pages/Galeria/PedidoFotos/PedidoFotos";
import { Quiz } from "../Pages/Quiz/Quiz";
import ScrollToTop from "./ScrollToTop";
import { QuizJuntos } from "../Pages/Quiz/PageQuiz/QuizJuntos";
import { QuizCezar } from "../Pages/Quiz/PageQuiz/QuizCezar";
import { QuizLala } from "../Pages/Quiz/PageQuiz/QuizLala";
import { Juntos } from "../Pages/Quiz/PageQuiz/Quizzes/Juntos";

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
                <Route path="/Quiz" element={<Quiz />} />
                <Route path="/QuizSobreNós" element={<QuizJuntos />} />
                <Route path="/QuizCezar" element={<QuizCezar />} />
                <Route path="/QuizLala" element={<QuizLala />} />
                <Route path="/DescubraSeVoceSabeUmPoucoSobreNos" element={<Juntos />}/>
            </Routes>
        </>
    )
}