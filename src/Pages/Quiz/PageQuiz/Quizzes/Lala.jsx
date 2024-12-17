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
        const isActive = updatedActive.has(index);

        if (!isActive) {
            setActive(updatedActive.add(index));

            setTimeout(() => {
                const nextQuiz = document.getElementById(`quiz-${index + 1}`);
                if (nextQuiz) {
                    nextQuiz.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }
            }, 400);
        } else {
            updatedActive.delete(index);
            setActive(updatedActive);
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
            <div id="quiz-0" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">1/20</div>
                        <h2 className="titleQuestion">Qual a cor favorita do Cézar?</h2>
                        <div className="question">
                            <p><span>a)</span><div className="colorOne">Preto</div></p>
                            <p><span>b)</span><div className="colorFour">Rosa</div></p>
                            <p><span>c)</span><div className="colorFive">Vermelho</div></p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(0) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(0)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa a: 
                                    <div className="colorBody">
                                        <div className="colorOne"></div>
                                    </div> 
                                    Preto
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="quiz-1" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">2/20</div>
                        <h2 className="titleQuestion">Quando é seu aniversário?</h2>
                        <div className="question">
                            <p><span>a)</span>01 de dezembro de 2007</p>
                            <p><span>b)</span>01 de novembro de 2006</p>
                            <p><span>c)</span>01 de dezembro de 2006</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(1) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(1)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa c: 01 de dezembro de 2006 / {result} anos
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="quiz-2" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">3/20</div>
                        <h2 className="titleQuestion">Qual sua comida favorita?</h2>
                        <div className="question">
                            <p><span>a)</span>Macarrão</p>
                            <p><span>b)</span>Japonesa</p>
                            <p><span>c)</span>Strogonoff</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(2) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(2)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa b: Japonesa
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="quiz-3" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">4/20</div>
                        <h2 className="titleQuestion">Oque ela mais gosta de fazer?</h2>
                        <div className="question">
                            <p><span>a)</span>Dormir</p>
                            <p><span>b)</span>Assistir TV</p>
                            <p><span>c)</span>Treinar</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(3) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(3)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa c: Assisitr TV
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="quiz-4" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">5/20</div>
                        <h2 className="titleQuestion">Qual o nome da cachorra de Lala?</h2>
                        <div className="question">
                            <p><span>a)</span>Mili</p>
                            <p><span>b)</span>Melícia</p>
                            <p><span>c)</span>Nini</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(4) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(4)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa a: Mili
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="quiz-5" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">6/20</div>
                        <h2 className="titleQuestion">Quantos irmão Lala tem?</h2>
                        <div className="question">
                            <p><span>a)</span>2</p>
                            <p><span>b)</span>1</p>
                            <p><span>c)</span>4</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(5) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(5)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa b: 1 Irmão
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="quiz-6" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">7/20</div>
                        <h2 className="titleQuestion">Qual é o seu lugar dos sonhos para viajar?</h2>
                        <div className="question">
                            <p><span>a)</span>Cancún</p>
                            <p><span>b)</span>Paris</p>
                            <p><span>c)</span>EUA</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(6) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(6)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa a: Cancún - México
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="quiz-7" className="playAgain">
                    <Link to="/QuizLala">Jogar novamente</Link>
                </div>
            </div>
        </>
    )
}

const agora = new Date();
const pedido = new Date('2006-12-01');

const diffInTime = pedido - agora;

const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

const diffInYears = Math.abs(diffInTime / millisecondsInYear);

const result = Math.floor(diffInYears);