import { ButtonUp } from "../../../../Components/ButtonUp/ButtonUp";
import { Header } from "../../../../Components/Header/Header";
import './Quizzes.css'
import { useState } from "react";

import bgMobile from '../../../../Assets/bgImageMobile.jpg'
import bgImage from '../../../../Assets/bgImage.jpg'

import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

export function Juntos() {
    const [active, setActive] = useState(new Set());  

    const handleClick = (index) => {
        const updatedActive = new Set(active);
        if (updatedActive.has(index)) {
            updatedActive.delete(index);
        } else {
            updatedActive.add(index);
        }
        setActive(updatedActive);
    };

    return(
        <>
            <Header />
            <Link to="/Quiz" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
            <ButtonUp />
            <img src={bgImage} alt="" className='bg'/>
            <img src={bgMobile} alt="" className='bgMobile'/>

            <div className="bodyQuizzes">
                <div className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">1/20</div>
                        <h2 className="titleQuestion">como eles chamam um ao outro?</h2>
                        <div className="question">
                            <p><span>a)</span>vida</p>
                            <p><span>b)</span>be</p>
                            <p><span>c)</span>amor</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(0) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(0)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa b: be
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">2/20</div>
                        <h2 className="titleQuestion">A quanto dias estão juntos?</h2>
                        <div className="question">
                            <p><span>a)</span>{result + 12} dias</p>
                            <p><span>b)</span>{result - 7} dias</p>
                            <p><span>c)</span>{result} dias</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(1) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(1)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa c: {result} dias ou {months} mêses juntos.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

const agora = new Date();
    const pedido = new Date('2024-09-01');

    const diffInTime = pedido - agora;
    
    const timeInOneDay = Math.floor(diffInTime / (1000 * 60 * 60 * 24)); 

    const result = Math.abs(timeInOneDay)
    
    const positiveDiffInTime = Math.abs(timeInOneDay);
    const remainingDays = positiveDiffInTime % 365;
    const months = Math.floor(remainingDays / 30);