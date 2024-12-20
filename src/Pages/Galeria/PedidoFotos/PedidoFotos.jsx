import './PedidoFotos.css'
import { useState } from "react";

import { ButtonUp } from "../../../Components/ButtonUp/ButtonUp";
import { Header } from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import { ArrowLeft, X, ArrowSquareOut } from '@phosphor-icons/react';

import Image1 from '../Photos/PedidoDia/alianças.jpg'
import Image2 from '../Photos/PedidoDia/floresM.jpg'
import Image3 from '../Photos/PedidoDia/mariaLauraFlor.jpg'
import Image4 from '../Photos/PedidoDia/nosDoisPedido.jpg'
import Image5 from '../Photos/PedidoDia/teAmoFlor.jpg'
import Image6 from '../Photos/PedidoDia/teAmoQuarto.jpg'
import bgImage from '../../../Assets/bgImage.jpg'
import bgMobile from '../../../Assets/bgImageMobile.jpg'

export function PedidoFotos () {
    const [active, setActive] = useState(null)

    const handleClick = (index) => {
        if (active !== index) {
            setActive(index);
        } 
    };

    const btnClose = (index) => {
        event.stopPropagation(); 

        if (active === index) {
            setActive(null);
        }
    };

    return(
        <>
            <Header />
            <ButtonUp />
            <Link to="/Galeria" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
            <img src={bgImage} alt="" className='bg'/>
            <img src={bgMobile} alt="" className='bgMobile'/>

            <div className="pedidoFotosBody">
                <div className='pedidoFotosContent'>
                    <Link to="#">
                        <figure className={`boxOpenedPedido ${active === 0 ? 'boxCheckPedido' : ''}`} onClick={() => handleClick(0)}>
                            <img src={Image1} alt="" />
                            <div className="buttonClosePedido" onClick={(event) => btnClose(0, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <h2>01/09/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpenedPedido ${active === 1 ? 'boxCheckPedido' : ''}`} onClick={() => handleClick(1)}>
                            <img src={Image2} alt="" />
                            <div className="buttonClosePedido" onClick={(event) => btnClose(1, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <h2>01/09/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpenedPedido ${active === 2 ? 'boxCheckPedido' : ''}`} onClick={() => handleClick(2)}>
                            <img src={Image3} alt="" />
                            <div className="buttonClosePedido" onClick={(event) => btnClose(2, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <h2>01/09/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpenedPedido ${active === 3 ? 'boxCheckPedido' : ''}`} onClick={() => handleClick(3)}>
                            <img src={Image4} alt="" />
                            <div className="buttonClosePedido" onClick={(event) => btnClose(3, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <h2>01/09/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpenedPedido ${active === 4 ? 'boxCheckPedido' : ''}`} onClick={() => handleClick(4)}>
                            <img src={Image5} alt="" />
                            <div className="buttonClosePedido" onClick={(event) => btnClose(4, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <h2>01/09/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpenedPedido ${active === 5 ? 'boxCheckPedido' : ''}`} onClick={() => handleClick(5)}>
                            <img src={Image6} alt="" />
                            <div className="buttonClosePedido" onClick={(event) => btnClose(5, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <h2>01/09/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <div className="PedidoLinkPage">
                        <Link to="/Pedido" className='buttonPagePedido'>Vejas mais <ArrowSquareOut size={22} className='iconButtonPedido'/></Link>
                    </div>
                </div>
            </div>
        </>
    )
}