import { Link } from 'react-router-dom';
import { Header } from '../../Header';
import './Twoone.css'

import bgImage from '../../../../Assets/bgImage.jpg'
import bgMobile from '../../../../Assets/bgImageMobile.jpg'
import { ArrowLeft } from '@phosphor-icons/react';

export function Twoone() {
    return(
        <>
        <Header />
        <Link to="/" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
        <img src={bgImage} alt="" className='bg'/>
        <img src={bgMobile} alt="" className='bgMobile'/>

            <div className="bodyTwoone">
                <div className="containerTwoone">
                    <h2>Sobre a palavra <strong className=".titleTwoone">TWOONE</strong></h2>
                    <p>
                        O nome TWOONE sugere a ideia de "dois em um", representando a união de duas pessoas em uma só jornada. Ele reflete a parceria, harmonia e a conexão profunda entre os membros do casal, como se ambos fossem uma única entidade, mas ainda assim mantendo suas identidades individuais. TWOONE simboliza a beleza de duas vidas que se entrelaçam, criando algo maior e mais forte juntos, sem perder a essência de cada um. É a celebração do equilíbrio perfeito entre duas almas que se completam, formando uma história única e compartilhada.
                    </p>
                </div>
            </div>
        </>
    )
}