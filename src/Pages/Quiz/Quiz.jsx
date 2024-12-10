import { Header } from "../../Components/Header/Header";
import './Quiz.css'

import bgMobile from '../../Assets/bgImageMobile.jpg'
import bgImage from '../../Assets/bgImage.jpg'
import cezar from '../../Assets/Quiz/cezarSolo.jpg'
import lala from '../../Assets/Quiz/lalaSolo.jpg'
import juntos from '../../Assets/Quiz/nosJuntos.jpg'

import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

export function Quiz() {
    return(
        <>
        <Header />
        <Link to="/" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
        <img src={bgImage} alt="" className='bg'/>
        <img src={bgMobile} alt="" className='bgMobile'/>

            <div className="quizBody">
                <div className="contentQuiz">
                    <Link to="/Quiz/QuizSobreNós" className="quiz">
                        <figure className="quizContainer">
                            <img src={juntos} alt="" />

                            <figcaption className="quizDetails">
                                <h2>Descubra se você sabe um pouco sobre nós</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="/QuizCezar" className="quiz">
                        <figure className="quizContainer">
                            <img src={cezar} alt="" />

                            <figcaption className="quizDetails">
                                <h2>O quanto você conhece o Cezar?</h2>
                            </figcaption>
                        </figure>
                    </Link>
                    <Link to="/QuizLala" className="quiz">
                        <figure className="quizContainer">
                            <img src={lala} alt="" />

                            <figcaption className="quizDetails">
                                <h2>O quanto você conhece o Lala?</h2>
                            </figcaption>
                        </figure>
                    </Link>
                </div>
            </div>
        </>
    )
}