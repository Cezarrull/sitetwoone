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
                <div id="quiz-1" className="containerQuizzes">
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
                <div id="quiz-2" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">3/20</div>
                        <h2 className="titleQuestion">Aonde eles se conheceram pessoalmente?</h2>
                        <div className="question">
                            <p><span>a)</span>Instagram</p>
                            <p><span>b)</span>Festa</p>
                            <p><span>c)</span>Viajem de formatura</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(2) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(2)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa c: Viajem de formatura para Porto Seguro - BA
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="quiz-3" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">4/20</div>
                        <h2 className="titleQuestion">Quem é mais velho?</h2>
                        <div className="question">
                            <p><span>a)</span>Cézar</p>
                            <p><span>b)</span>Lala</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(3) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(3)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa b: Lala é mais velha por 4 meses de diferença
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="quiz-4" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">5/20</div>
                        <h2 className="titleQuestion">Quem falou Eu te amo primeiro?</h2>
                        <div className="question">
                            <p><span>a)</span>Lala</p>
                            <p><span>b)</span>Cézar</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(4) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(4)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa a: Lala falou primeiro
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="quiz-5" className="containerQuizzes">
                    <div className="questionContent">
                        <div className="numberQuestion">6/20</div>
                        <h2 className="titleQuestion">Qual o programa favorito do casal?</h2>
                        <div className="question">
                            <p><span>a)</span>Ver filmes</p>
                            <p><span>b)</span>Jogar</p>
                            <p><span>c)</span>Ir em restaurantes</p>
                        </div>
                        <div className={`buttonCheckQuestion ${active.has(5) ? 'buttonOpenResponse' : ''}`} onClick={() => handleClick(5)}>
                            <p>RESPOSTA</p>
                            <div className="response">
                                <p className="textResponse">
                                    Alternativa a: Ver filmes
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                <div id="quiz-6" className="playAgain">
                    <Link to="/QuizSobreNós">Jogar novamente</Link>
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