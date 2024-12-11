import './PageQuiz.css'
import { Header } from '../../../Components/Header/Header'
import { ButtonUp } from "../../../Components/ButtonUp/ButtonUp";

import bgMobile from '../../../Assets/bgImageMobile.jpg'
import bgImage from '../../../Assets/bgImage.jpg'

import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

import Lala from '../../../Assets/Quiz/lalaSolo.jpg'

export function QuizLala() {
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
                    <img src={Lala} alt="" />
                </figure>
                <div className="contentPlay">
                    <h2>Título teste para o quiz</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    </p>
                    <Link to="/OQuantoVocêConheceALala" className="buttonPlayLink">
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