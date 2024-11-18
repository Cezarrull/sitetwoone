import { Header } from '../../Components/Header/Header'
import './Pedido.css'

import Image1 from '../../Assets/Pedido/quartoTeAmo.jpg'

export function Pedido() {
    return(
        <>
        <Header />
            <div className="pedidoBody">
                <div className="containerOrder">
                    <div className="textOrder">
                        <h2>DIA DO PEDIDO 01/09/2024</h2>
                        <p>
                            E foi no dia 01 de novembro de 2024, que convidei a mulher dos meus sonhos, para ser o amor da minha vida!
                        </p>
                        <p>
                            Estamos juntos a <span className='buttonDate' id='days' /*data-val={message}*/>{message}</span> dias!
                            Que venha muitos outros.
                        </p>
                    </div>
                    <div className="imageOrder">
                        <img src={Image1}></img>
                    </div>
                </div>
            </div>
        </>
    )
}

// function CountDays
    const agora = new Date();
    const pedido = new Date('09 01 2024')
    
    const diffInTime = Math.abs(pedido - agora)
    
    const timeInOneDay = 1000 * 60 * 60 * 24
    
    const diffInDays = diffInTime / timeInOneDay

    const diffInDaysValue = diffInDays.toFixed(0) 

    const message = Number(diffInDaysValue);

//function AnimationNumbers 
/*
const valueDisplay = document.querySelector(".buttonDate");
let startValue = 0;


let counterUpDate = setInterval(function() {
    startValue ++;


    if (startValue >= 75) {
        clearInterval(counter);
    }
}, 1)*/