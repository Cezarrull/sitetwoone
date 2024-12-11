import { ButtonUp } from "../../../../Components/ButtonUp/ButtonUp";
import { Header } from "../../../../Components/Header/Header";
import './Quizzes.css'
import { useState } from "react";

import bgMobile from '../../../../Assets/bgImageMobile.jpg'
import bgImage from '../../../../Assets/bgImage.jpg'

import { Link } from "react-router-dom";
import { ArrowLeft, CaretUp } from "@phosphor-icons/react";

export function Juntos() {
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
            <Link to="/Quiz" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
            <ButtonUp />
            <img src={bgImage} alt="" className='bg'/>
            <img src={bgMobile} alt="" className='bgMobile'/>

            <div className="bodyQuizzes">
                <div className="containerQuizzes">
                    <div className="questionContent">
                        <h2 className="titleQuestion">BLA BLABLA BA BLA?</h2>
                        <div className="question">
                            <p><span>1)</span>testOne</p>
                            <p><span>2)</span>testTwo</p>
                            <p><span>3)</span>testThree</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active === 0 ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(0)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Porque test test test é test por causa do test,
                                    se test test test for test então dia test é test.
                                </p>
                            </div>
                            <div className="buttonCloseResponse" onClick={(event) => btnClose(0, event)}><CaretUp size={24} color="white" /></div>
                        </div>
                    </div>
                </div>
                <div className="containerQuizzes">
                    <div className="questionContent">
                        <h2 className="titleQuestion">BLA BLABLA BA BLA?</h2>
                        <div className="question">
                            <p><span>1)</span>testOne</p>
                            <p><span>2)</span>testTwo</p>
                            <p><span>3)</span>testThree</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active === 1 ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(1)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Porque test test test é test por causa do test,
                                    se test test test for test então dia test é test.
                                </p>
                            </div>
                            <div className="buttonCloseResponse" onClick={(event) => btnClose(1, event)}><CaretUp size={24} color="white" /></div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}