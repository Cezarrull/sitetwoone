import { Header } from "../../Components/Header/Header";
import './Galeria.css';

import Image1 from '../Galeria/Photos/FotosPrimeiras/Image4.jpg'
import Image2 from '../Galeria/Photos/PedidoDia/Image4.jpg'
import { Link } from "react-router-dom";

export function Galeria() {
    return(
        <>
            <Header />
            <div className="galeriaBody">
                <div className="contentGaleria">
                    <Link to="/PrimeirasFotos">
                        <figure className="boxPhoto">
                                <img src={Image1} alt="" />

                                <figcaption className="details">
                                    <h2>PRIMEIRAS FOTOS</h2>
                                </figcaption>
                        </figure>
                    </Link>
                    <Link to="/DiaDoPedido">
                        <figure className="boxPhoto">
                                <img src={Image2} alt="" />

                                <figcaption className="details">
                                    <h2>DIA DO PEDIDO</h2>
                                </figcaption>
                        </figure>
                    </Link>
                </div>
            </div>
        </>
    )
}