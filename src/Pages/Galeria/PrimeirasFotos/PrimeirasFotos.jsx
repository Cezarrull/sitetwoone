import { Header } from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";
import './PrimeirasFotos.css';

import Image1 from '../Photos/FotosPrimeiras/Image1.jpg'
import Image2 from '../Photos/FotosPrimeiras/Image2.jpg'
import Image3 from '../Photos/FotosPrimeiras/Image3.jpg'
import Image4 from '../Photos/FotosPrimeiras/Image4.jpg'
import Image5 from '../Photos/FotosPrimeiras/Image5.jpg'
import Image6 from '../Photos/FotosPrimeiras/Image6.jpg'
import { ButtonUp } from "../../../Components/ButtonUp/ButtonUp";

export function PrimeirasFotos() {
    return(
        <>
        <Header />
        <ButtonUp />
        <Link to="/Galeria" className="buttonBack"><ArrowLeft size={24}/>Voltar</Link>
            <div className="activeImage">
                <span className="buttonClose">&times;</span>
                <img src={Image1} alt="" className="imageLarge" />
            </div>
            <div className="primeirasBody">
                <div className="primeirasFotosContent">
                    <Link to="#">
                        <figure className="boxPhotoPrimeiras">
                            <img src={Image1} alt=""/>

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

const images = [...document.querySelectorAll('.boxPhotoPrimeiras')];

const popup = document.querySelector('.activeImage');
const closeBnt = document.querySelector('.buttonClose');
const largeImage = document.querySelector('.imageLarge');

images.forEach((item, i) => {
    item.addEventListener("click", () => {
        updateImage(i);
        popup.classList.toggle("active");
    })
})

const updateImage = (i) => {
    let path = `/src/Pages/Galeria/Photos/FotosPrimeiras/Image${1 + i}.jpg`
    largeImage.src = path;
}

if (closeBnt) {
    closeBnt.addEventListener("click", () => {
        if (popup) {
            popup.classList.toggle("active");
        } else {
            console.error("popup element not found!");
        }
    });
} else {
    console.error("closeBnt element not found!");
}