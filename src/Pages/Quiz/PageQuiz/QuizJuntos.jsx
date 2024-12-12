import './PageQuiz.css'
import { Header } from '../../../Components/Header/Header'
import { ButtonUp } from "../../../Components/ButtonUp/ButtonUp";

import bgMobile from '../../../Assets/bgImageMobile.jpg'
import bgImage from '../../../Assets/bgImage.jpg'

import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

import Juntos from '../../../Assets/Quiz/nosJuntos.jpg'

export function QuizJuntos() {
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
                    <img src={Juntos} alt="" />
                </figure>
                <div className="contentPlay">
                    <h2>Descubra se você sabe um pouco sobre nós</h2>
                    <p>
                        Aqui vai 20 perguntas sobre o casal, para você descobrir o quanto o conhecem
                    </p>
                    <Link to="/DescubraSeVoceSabeUmPoucoSobreNos" className="buttonPlayLink">
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