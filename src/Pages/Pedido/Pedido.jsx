import { Header } from '../../Components/Header/Header'
import './Pedido.css'
import { Play } from '@phosphor-icons/react'

import Image1 from '../../Assets/Pedido/quartoTeAmo.jpg'

export function Pedido() {
    return(
        <>
        <Header />
            <div className="pedidoBody">
                <div className="containerOrder">
                    <div className="containerDiv">
                        <div className="textOrder">
                            <h2>DIA DO PEDIDO 01/09/2024</h2>
                            <p>
                                E foi no dia 01 de novembro de 2024, que convidei a mulher dos meus sonhos, para ser o amor da minha vida!
                            </p>
                            <p>
                                Estamos juntos a <span className='buttonDate' id='days'>{diffInDaysValue}</span> dias!
                                Que venha muitos outros.
                            </p>
                        </div>
                        <div className="imageOrder">
                            <img src={Image1}></img>
                        </div>
                    </div>
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
            </div>
        </>
    )
}

// function CountDays

    const agora = Date.now();
    const pedido = new Date('09 01 2024')

    const dateTwo = Number(pedido)

    const diffInTime = Math.abs(dateTwo - agora)
    
    const timeInOneDay = 1000 * 60 * 60 * 24
    
    const diffInDays = diffInTime / timeInOneDay

    const diffInDaysValue = diffInDays.toFixed() 
