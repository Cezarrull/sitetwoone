import './PageQuiz.css'
import { Header } from '../../../Components/Header/Header'
import { ButtonUp } from "../../../Components/ButtonUp/ButtonUp";

import bgMobile from '../../../Assets/bgImageMobile.jpg'
import bgImage from '../../../Assets/bgImage.jpg'

import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

import Cezar from '../../../Assets/Quiz/cezarSolo.jpg'

export function QuizCezar() {
    return(
        <>
        <Header />
        <Link to="/Quiz" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
        <ButtonUp />
        <img src={bgImage} alt="" className='bg'/>
        <img src={bgMobile} alt="" className='bgMobile'/>

        <div className="bodyPlayQuiz">
            <div className="containerPlay">
                <figure className="contentImg">
                    <img src={Cezar} alt="" />
                </figure>
                <div className="contentPlay">
                    <h2>Descubra se você sabe sobre o Cézar</h2>
                    <p>
                        Aqui vai 20 perguntas sobre o Cézar, para você descobrir o quanto o conhece
                    </p>
                    <Link to="/OQuantoVocêConheceOCezar" className="buttonPlayLink">
                        <div className="buttonPlay">
                            <p>Jogar o Quiz</p>
                        </div>
                    </Link>
                </div>
            </div>
        </div>
        </>
    )
}