import { Header } from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import './PrimeirasFotos.css';

import Image1 from '../Photos/FotosPrimeiras/beijo.jpg'
import Image2 from '../Photos/FotosPrimeiras/celular.jpg'
import Image3 from '../Photos/FotosPrimeiras/delado.jpg'
import Image4 from '../Photos/FotosPrimeiras/porto.jpg'
import Image5 from '../Photos/FotosPrimeiras/riso.jpg'
import Image6 from '../Photos/FotosPrimeiras/snap.jpg'
import { ButtonUp } from "../../../Components/ButtonUp/ButtonUp";

export function PrimeirasFotos() {
    return(
        <>
        <Header />
        <ButtonUp />
        <Link to="/Galeria" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>

            <div className="primeirasBody">
                <div className="primeirasFotosContent">

                    <Link to="#">
                        <figure className="boxPhotoPrimeiras">
                            <img src={Image1} alt="" />

                            <figcaption className="details">
                                <h2>PRIMEIRAS FOTOS</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className="boxPhotoPrimeiras">
                            <img src={Image2} alt="" />

                            <figcaption className="details">
                                <h2>PRIMEIRAS FOTOS</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className="boxPhotoPrimeiras">
                            <img src={Image3} alt="" />

                            <figcaption className="details">
                                <h2>PRIMEIRAS FOTOS</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className="boxPhotoPrimeiras">
                            <img src={Image4} alt="" />

                            <figcaption className="details">
                                <h2>PRIMEIRAS FOTOS</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className="boxPhotoPrimeiras">
                            <img src={Image5} alt="" />

                            <figcaption className="details">
                                <h2>PRIMEIRAS FOTOS</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className="boxPhotoPrimeiras">
                            <img src={Image6} alt="" />

                            <figcaption className="details">
                                <h2>PRIMEIRAS FOTOS</h2>
                            </figcaption>
                        </figure>
                    </Link>
                </div>
            </div>
        </>
    )
}
/*
window.addEventListener("click", function() {
    var button = document.querySelectorAll("figure")
    button.classList.add(".online")
})*/