import { ButtonUp } from "../../../../Components/ButtonUp/ButtonUp";
import { Header } from "../../../../Components/Header/Header";
import './Quizzes.css'
import { useState } from "react";

import bgMobile from '../../../../Assets/bgImageMobile.jpg'
import bgImage from '../../../../Assets/bgImage.jpg'

import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

export function Cezar() {
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
                        <h2 className="titleQuestion">Qual sua cor favorita?</h2>
                        <div className="question">
                            <p><span>a)</span><div className="colorOne">Preto</div></p>
                            <p><span>b)</span><div className="colorTwo">Azul</div></p>
                            <p><span>c)</span><div className="colorThree">Amarelo</div></p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(0) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(0)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa b: 
                                    <div className="colorBody">
                                        <div className="colorTwo"></div> 
                                    </div>
                                    Azul petróle
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
                            <p><span>a)</span>25 de abril de 2007</p>
                            <p><span>b)</span>24 de abril de 2006</p>
                            <p><span>c)</span>27 de abril de 2007</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(1) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(1)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa a: 25 de abril de 2007 / {result} anos
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
                            <p><span>b)</span>Pizza</p>
                            <p><span>c)</span>Strogonoff</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(2) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(2)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa a: Macarrão
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="quiz-3" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">4/20</div>
                        <h2 className="titleQuestion">Oque ele mais gosta de fazer?</h2>
                        <div className="question">
                            <p><span>a)</span>Dormir</p>
                            <p><span>b)</span>Jogar</p>
                            <p><span>c)</span>Andar de bike</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(3) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(3)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa c: Andar de bike
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="quiz-4" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">5/20</div>
                        <h2 className="titleQuestion">Qual o nome das duas cachorras de Cézar?</h2>
                        <div className="question">
                            <p><span>a)</span>Sushi e Pipoca</p>
                            <p><span>b)</span>Mel e Melicia</p>
                            <p><span>c)</span>Nina e Luna</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(4) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(4)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa a: Sushi e Pipoca
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="quiz-5" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">6/20</div>
                        <h2 className="titleQuestion">Quantos irmão Cézar tem?</h2>
                        <div className="question">
                            <p><span>a)</span>2</p>
                            <p><span>b)</span>4</p>
                            <p><span>c)</span>1</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(5) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(5)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa b: 4 irmões
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
                            <p><span>a)</span>Veneza</p>
                            <p><span>b)</span>Paris</p>
                            <p><span>c)</span>EUA</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(6) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(6)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa A: Veneza - Itália
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="quiz-7" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">8/20</div>
                        <h2 className="titleQuestion">Qual é o jogo favorito de Cézar?</h2>
                        <div className="question">
                            <p><span>a)</span>Minecraft</p>
                            <p><span>b)</span>Hollow Knight</p>
                            <p><span>c)</span>GTA-V</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(7) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(7)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa c: Hollow Knight
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div id="quiz-8" className="playAgain">
                    <Link to="/QuizCezar">Jogar novamente</Link>
                </div>
            </div>
        </>
    )
}

const agora = new Date();
const pedido = new Date('2007-04-25');

const diffInTime = pedido - agora;

const millisecondsInYear = 1000 * 60 * 60 * 24 * 365.25;

const diffInYears = Math.abs(diffInTime / millisecondsInYear);

const result = Math.floor(diffInYears);