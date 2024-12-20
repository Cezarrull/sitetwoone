import './Favoritos.css'
import { useState } from "react";

import { ButtonUp } from "../../../Components/ButtonUp/ButtonUp";
import { Header } from "../../../Components/Header/Header";
import { Link } from "react-router-dom";
import { ArrowLeft, X } from '@phosphor-icons/react';

import Image1 from '../Photos/Favoritos/floresLala.jpg'
import Image2 from '../Photos/Favoritos/preto&branco.jpg'
import Image3 from '../Photos/Favoritos/olhos.jpg'
import Image4 from '../Photos/Favoritos/mcQueen.jpg'
import Image5 from '../Photos/Favoritos/creme.jpg'
import Image6 from '../Photos/Favoritos/show.jpg'
import bgImage from '../../../Assets/bgImage.jpg'
import bgMobile from '../../../Assets/bgImageMobile.jpg'

export function Favoritos() {
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

        <div className="favoritosBody">
                <div className='favoritosContent'>
                    <Link to="#">
                        <figure className={`boxOpenedFavorito ${active === 0 ? 'boxCheckFavoritos' : ''}`} onClick={() => handleClick(0)}>
                            <img src={Image1} alt="" />
                            <div className="buttonCloseFavoritos" onClick={(event) => btnClose(0, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <h2>01/12/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpenedFavorito ${active === 1 ? 'boxCheckFavoritos' : ''}`} onClick={() => handleClick(1)}>
                            <img src={Image2} alt="" />
                            <div className="buttonCloseFavoritos" onClick={(event) => btnClose(1, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <h2>09/11/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpenedFavorito ${active === 2 ? 'boxCheckFavoritos' : ''}`} onClick={() => handleClick(2)}>
                            <img src={Image3} alt="" />
                            <div className="buttonCloseFavoritos" onClick={(event) => btnClose(2, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <h2>27/10/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpenedFavorito ${active === 3 ? 'boxCheckFavoritos' : ''}`} onClick={() => handleClick(3)}>
                            <img src={Image4} alt="" />
                            <div className="buttonCloseFavoritos" onClick={(event) => btnClose(3, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <h2>01/12/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpenedFavorito ${active === 4 ? 'boxCheckFavoritos' : ''}`} onClick={() => handleClick(4)}>
                            <img src={Image5} alt="" />
                            <div className="buttonCloseFavoritos" onClick={(event) => btnClose(4, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <h2>27/09/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="#">
                        <figure className={`boxOpenedFavorito ${active === 5 ? 'boxCheckFavoritos' : ''}`} onClick={() => handleClick(5)}>
                            <img src={Image6} alt="" />
                            <div className="buttonCloseFavoritos" onClick={(event) => btnClose(5, event)}>
                                <X size={32}/>
                            </div>

                            <figcaption className="details">
                                <h2>27/10/2024</h2>
                            </figcaption>
                        </figure>
                    </Link>
                </div>
            </div>
        </>
    )
}