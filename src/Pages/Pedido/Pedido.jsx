import { Header } from '../../Components/Header/Header'
import './Pedido.css'

import { Play, ArrowLeft } from '@phosphor-icons/react'
import { Link } from 'react-router-dom'

import Image1 from '../../Assets/Pedido/quartoTeAmo.jpg'
import bgImage from '../../Assets/bgImage.jpg'
import bgMobile from '../../Assets/bgImageMobile.jpg'

export function Pedido() {
    return(
        <>
        <Header />
        <Link to="/" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
        <img src={bgImage} alt="" className='bg'/>
        <img src={bgMobile} alt="" className='bgMobile'/>

            <div className="pedidoBody">
                <div className="containerOrder">
                    <div className="containerDiv">
                        <div className="textOrder">
                            <h2>DIA DO PEDIDO 01/09/2024</h2>
                            <p>
                                E foi no dia 01 de setembro de 2024, que convidei a mulher dos meus sonhos, para ser o amor da minha vida!
                            </p>
                            <p>
                                Estamos juntos a <span className='buttonDate' id='numberDays' dangerouslySetInnerHTML={{__html: result}} ></span> dias!
                                Que venha muitos outros.
                            </p>
                            <div className="divVideoLink">
                                <div className="buttonVideo">
                                    <div className="textTwoOrder">
                                        <h2>ASSISTA UM VÍDEO CHEIO DE EMOÇÕES.</h2>
                                    </div>
                                </div>
                                <div className="buttonDiv">
                                    <a href="https://www.instagram.com/reel/C_Zek4OMqiUuhxMz8ivk2K__eUvTDa4cvzwucs0/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" target='_blanck'>
                                        <Play size={18} weight="fill" className="playButton"/>ASSISTA AGORA
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="imageOrder">
                            <img src={Image1}></img>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

// function CounterDays

const agora = new Date();
    const pedido = new Date('2024-09-01');

    const diffInTime = pedido - agora;
    
    const timeInOneDay = Math.floor(diffInTime / (1000 * 60 * 60 * 24)); 

    const result = Math.abs(timeInOneDay)