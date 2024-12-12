import { ButtonUp } from "../../../../Components/ButtonUp/ButtonUp";
import { Header } from "../../../../Components/Header/Header";
import './Quizzes.css'
import { useState } from "react";

import bgMobile from '../../../../Assets/bgImageMobile.jpg'
import bgImage from '../../../../Assets/bgImage.jpg'

import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

export function Lala() {
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
                        <h2 className="titleQuestion">BLA BLABLA BA BLA?</h2>
                        <div className="question">
                            <p><span>a)</span>testOne</p>
                            <p><span>b)</span>testTwo</p>
                            <p><span>c)</span>testThree</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(0) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(0)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Porque test test test é test por causa do test,
                                    se test test test for test então dia test é test.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">2/20</div>
                        <h2 className="titleQuestion">BLA BLABLA BA BLA?</h2>
                        <div className="question">
                            <p><span>a)</span>testOne</p>
                            <p><span>b)</span>testTwo</p>
                            <p><span>c)</span>testThree</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(1) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(1)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Porque test test test é test por causa do test,
                                    se test test test for test então dia test é test.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}