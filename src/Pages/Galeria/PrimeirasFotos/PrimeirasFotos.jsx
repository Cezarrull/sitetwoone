import { useState } from "react";
import { Header } from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "@phosphor-icons/react";
import './PrimeirasFotos.css';

import Image1 from '../Photos/FotosPrimeiras/beijo.jpg'
import Image2 from '../Photos/FotosPrimeiras/celular.jpg'
import Image3 from '../Photos/FotosPrimeiras/snap.jpg'
import Image4 from '../Photos/FotosPrimeiras/porto.jpg'
import Image5 from '../Photos/FotosPrimeiras/banheiro.jpg'
import Image6 from '../Photos/FotosPrimeiras/bravesa.jpg'
import bgImage from '../../../Assets/bgImage.jpg'
import bgMobile from '../../../Assets/bgImageMobile.jpg'
import { ButtonUp } from "../../../Components/ButtonUp/ButtonUp";

export function PrimeirasFotos() {
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

            <div className="primeirasBody">
                <div className="primeirasFotosContent">
                    <Link to="#">
                        <figure className={`boxOpened ${active === 0 ? 'boxCheck' : ''}`} onClick={() => handleClick(0)}>
                            <img src={Image1} alt=""/>
                            <div className="buttonClose" onClick={(event) => btnClose(0, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <p>PRIMEIRAS FOTOS</p>
                                <h2>16/08/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpened ${active === 1 ? 'boxCheck' : ''}`} onClick={() => handleClick(1)}>
                            <img src={Image2} alt="" />
                            <div className="buttonClose" onClick={(event) => btnClose(1, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <p>PRIMEIRAS FOTOS</p>
                                <h2>10/08/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpened ${active === 2 ? 'boxCheck' : ''}`} onClick={() => handleClick(2)}>
                            <img src={Image3} alt="" />
                            <div className="buttonClose" onClick={(event) => btnClose(2, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <p>PRIMEIRAS FOTOS</p>
                                <h2>09/08/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpened ${active === 3 ? 'boxCheck' : ''}`} onClick={() => handleClick(3)}>
                            <img src={Image4} alt="" />
                            <div className="buttonClose" onClick={(event) => btnClose(3, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <p>PRIMEIRAS FOTOS</p>
                                <h2>20/07/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpened ${active === 4 ? 'boxCheck' : ''}`} onClick={() => handleClick(4)}>
                            <img src={Image5} alt="" />
                            <div className="buttonClose" onClick={(event) => btnClose(4, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <p>PRIMEIRAS FOTOS</p>
                                <h2>25/08/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpened ${active === 5 ? 'boxCheck' : ''}`} onClick={() => handleClick(5)}>
                            <img src={Image6} alt="" />
                            <div className="buttonClose" onClick={(event) => btnClose(5, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <p>PRIMEIRAS FOTOS</p>
                                <h2>31/08/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                </div>
            </div>
        </>
    )
}