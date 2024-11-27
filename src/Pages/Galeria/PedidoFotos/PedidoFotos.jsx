import './PedidoFotos.css'

import { ButtonUp } from "../../../Components/ButtonUp/ButtonUp";
import { Header } from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from '@phosphor-icons/react';

import Image1 from '../Photos/PedidoDia/Image1.jpg'
import Image2 from '../Photos/PedidoDia/Image2.jpg'
import Image3 from '../Photos/PedidoDia/Image3.jpg'
import Image4 from '../Photos/PedidoDia/Image4.jpg'
import Image5 from '../Photos/PedidoDia/Image5.jpg'
import Image6 from '../Photos/PedidoDia/Image6.jpg'

export function PedidoFotos () {
    return(
        <>
            <Header />
            <ButtonUp />
            <Link to="/Galeria" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
            
            <div className="activeImagePd">
                <span className="buttonClosePd">&times;</span>
                <img src={Image1} alt="" className="imageLargePd" />
            </div>
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

const imagesPd = [...document.querySelectorAll('.boxPhotoPrimeiras')];

const popupPd = document.querySelector('.activeImagePd');
const closeBntPd = document.querySelector('.buttonClosePd');
const largeImagePd = document.querySelector('.imageLargePd');

imagesPd.forEach((item, i) => {
    item.addEventListener("click", () => {
        updateImagePd(i);
        popupPd.classList.toggle("activePd");
    })
})

const updateImagePd = (i) => {
    let pathPd = `/src/Pages/Galeria/Photos/PedidoDia/Image${1 + i}.jpg`
    largeImagePd.src = pathPd;
}

if (closeBntPd) {
    closeBntPd.addEventListener("click", () => {
        if (popupPd) {
            popupPd.classList.toggle("activePd");
        } else {
            console.error("popup element not found!");
        }
    });
} else {
    console.error("closeBnt element not found!");
}