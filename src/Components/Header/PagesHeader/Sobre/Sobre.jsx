import { Link } from 'react-router-dom';
import { Header } from '../../Header';
import './Sobre.css'

import bgImage from '../../../../Assets/bgImage.jpg'
import bgMobile from '../../../../Assets/bgImageMobile.jpg'
import { ArrowLeft, ArrowSquareOut } from '@phosphor-icons/react';

export function Sobre() {
    return(
        <>
            <Header />
            <Link to="/" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
            <img src={bgImage} alt="" className='bg'/>
            <img src={bgMobile} alt="" className='bgMobile'/>

            <div className="sobreBody">
                <div className="sobreContainer">
                    <h2>Sobre o que se trata o site <span className="titleSite">TWOONE?</span></h2>
                    <p>
                        Esse site foi criado para você se divertir e interagir de uma maneira única! Aqui, você pode explorar uma galeria de fotos e desenhos feitos por nós. Cada imagem conta uma história e traz um pedaço do nosso mundo. Além disso, temos quizzes divertidos para testar o quanto você realmente nos conhece! Venha descobrir curiosidades sobre nós e se divertir com perguntas criativas e desafios. Estamos aqui para proporcionar momentos de diversão e interação, e esperamos que você aproveite cada momento neste espaço, explorando e se divertindo com tudo o que preparamos aqui!
                    </p>
                    <div className="footerTitle">
                        <div className="titleItensFooter">
                            <h3>Com muito amor</h3>
                            <Link to="/TWOONE" className="more">TWOONE<ArrowSquareOut size={16} className="iconButtonTwoone" /></Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}