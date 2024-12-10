import { ButtonUp } from "../../../../Components/ButtonUp/ButtonUp";
import { Header } from "../../../../Components/Header/Header";
import './Quizzes.css'

import bgMobile from '../../../../Assets/bgImageMobile.jpg'
import bgImage from '../../../../Assets/bgImage.jpg'

import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

export function Juntos() {
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
                            <p>test test test</p>
                        </div>
                        <div className="question">
                            <p>test test</p>
                        </div>
                        <div className="question">
                            <p>test</p>
                        </div>
                        <div className="buttonCheckQuestion">
                            <div className="Response">
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