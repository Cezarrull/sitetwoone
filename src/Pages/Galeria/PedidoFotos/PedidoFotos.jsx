import './PedidoFotos.css'

import { ButtonUp } from "../../../Components/ButtonUp/ButtonUp";
import { Header } from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from '@phosphor-icons/react';

import Image1 from '../Photos/PedidoDia/alianças.jpg'
import Image2 from '../Photos/PedidoDia/floresM.jpg'
import Image3 from '../Photos/PedidoDia/mariaLauraFlor.jpg'
import Image4 from '../Photos/PedidoDia/nosDoisPedido.jpg'
import Image5 from '../Photos/PedidoDia/teAmoFlor.jpg'
import Image6 from '../Photos/PedidoDia/teAmoQuarto.jpg'

export function PedidoFotos () {
    return(
        <>
            <Header />
            <ButtonUp />
            <Link to="/Galeria" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>

                <div className="pedidoFotosBody">
                    <div className='pedidoFotosContent'>
                        
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