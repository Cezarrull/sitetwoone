import { Link } from 'react-router-dom';
import { Header } from '../../Header';
import './Social.css'

import bgImage from '../../../../Assets/bgImage.jpg'
import bgMobile from '../../../../Assets/bgImageMobile.jpg'
import cezar from '../../../../Assets/Quiz/cezarSolo.jpg'
import lala from '../../../../Assets/Quiz/lalaSolo.jpg'
import { ArrowLeft, InstagramLogo, TiktokLogo } from '@phosphor-icons/react';

export function Social() {
    return(
        <>
        <Header />
        <Link to="/" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
        <img src={bgImage} alt="" className='bg'/>
        <img src={bgMobile} alt="" className='bgMobile'/>

        <div className="bodySocial">
            <div className="containerSocial">
                <h2>SIGA-NOS</h2>
                <p>em nossas redes sociais</p>
                <div className="itensSocial">
                    <div className="socialCezar">
                        <img src={cezar} alt="" />
                        <h3>Cezar</h3>
                        <div className="sociais">
                            <a href="https://www.instagram.com/cezar_rull/" target='_blanck'><InstagramLogo size={30} /></a>
                            <a href="https://www.tiktok.com/@e_o_rull" target='_blanck'><TiktokLogo size={32} /></a>
                        </div>
                    </div>
                    <span className="line"></span>
                    <div className='socialLala'>
                        <img src={lala} alt="" />
                        <h3>Lala</h3>
                        <div className="sociais">
                            <a href="https://www.instagram.com/lalatorrano/" target='_blanck'><InstagramLogo size={30} /></a>
                            <a href="https://www.tiktok.com/@lalatorrano" target='_blanck'><TiktokLogo size={32} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}