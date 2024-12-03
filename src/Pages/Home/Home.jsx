import { Header } from '../../Components/Header/Header';
import { Link } from 'react-router-dom';
import './Home.css'

import Image1 from '../../Assets/Home/brava.jpg'
import Image2 from '../../Assets/Home/carros.jpg'
import Image3 from '../../Assets/Home/celular.jpg'
import Image4 from '../../Assets/Home/olhos.jpg'
import bgImage from '../../Assets/bgImage.jpg'
import bgMobile from '../../Assets/bgImageMobile.jpg'
import pinPng from '../../Assets/Pin.png'

export function Home() {
    return (
        <>
        <Header/>
        <img src={bgImage} alt="" className='bg'/>
        <img src={bgMobile} alt="" className='bgMobile'/>
            <div className="homeBody">
                <Link to="/Pedido" className="buttonHref">
                    <div className="container">
                    <img src={pinPng} alt="" className="pin"/>
                        <div className="text">
                            <h2>ONDE TUDO COMEÇOU</h2>
                            <p>
                                Um pouco de um grande dia!
                            </p>
                        </div>
                        <div className="image">
                            <img src={Image1} alt="One" />
                        </div>
                    </div>
                </Link>
                <Link to="/Desenhos" className="buttonHref">
                    <div className="containerTwo">
                        <img src={pinPng} alt="" className="pin"/>
                        <div className="imageTwo">
                            <img src={Image2} alt="Two" />
                        </div>
                        <div className="textTwo">
                            <h2>NOSSOS DESENHOS</h2>
                            <p>
                                20 Desenhos pintados com dois estilos diferentes! 
                            </p>
                        </div>
                    </div>
                </Link>
                <Link to="/Galeria" className="buttonHref">
                    <div className="container">
                        <img src={pinPng} alt="" className="pin"/>
                        <div className="text">
                            <h2>GALERIA DOS MELHORES MOMENTOS</h2>
                            <p>
                                Algumas fotos de dias especiais e incríveis!
                            </p>
                        </div>
                        <div className="image">
                            <img src={Image3} alt="Three" />
                        </div>
                    </div>
                </Link>
                <Link to="#" className="buttonHref">
                    <div className="containerTwo">
                        <img src={pinPng} alt="" className="pin"/>
                        <div className="imageTwo">
                            <img src={Image4} alt="Four" />
                        </div>
                        <div className="textTwo">
                            <h2>TESTE SOBRE ALINHAMENTO DE TEXTO PARA DIV</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum omnis exercitationem voluptates perferendis temporibus pariatur
                            </p>
                        </div>
                    </div>
                </Link>
            </div>
        </>
    )
}