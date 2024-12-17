import { Link } from 'react-router-dom';
import { Header } from '../../Header';
import './Sobre.css'

import bgImage from '../../../../Assets/bgImage.jpg'
import bgMobile from '../../../../Assets/bgImageMobile.jpg'
import { ArrowLeft } from '@phosphor-icons/react';

export function Sobre() {
    return(
        <>
            <Header />
            <Link to="/" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
            <img src={bgImage} alt="" className='bg'/>
            <img src={bgMobile} alt="" className='bgMobile'/>

            <div className="sobreBody">
                <div className="sobreContainer">
                    <h2>Sobre oque se trata o site <span className="titleSite">TWOONE?</span></h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Hic suscipit incidunt ducimus voluptas repudiandae debitis repellendus earum sed asperiores! Ipsam, inventore amet quod reiciendis minima consectetur doloribus hic fuga quas.</p>
                </div>
            </div>
        </>
    )
}