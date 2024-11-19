import { Header } from '../../Components/Header/Header';
import './Home.css'

import Image1 from '../../Assets/Home/brava.jpg'
import Image2 from '../../Assets/Home/carros.jpg'
import Image3 from '../../Assets/Home/celular.jpg'
import Image4 from '../../Assets/Home/olhos.jpg'


export function Home() {
    return (
        <>
        <Header/>
            <div className="homeBody">
                <a href="/Pedido" className="buttonHref">
                    <div className="container">
                        <div className="text">
                            <h2>ONDE TUDO COMEÇOU</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum omnis exercitationem voluptates perferendis temporibus pariatur
                            </p>
                        </div>
                        <div className="image">
                            <img src={Image1} alt="One" />
                        </div>
                    </div>
                </a>
                <a href="/Desenhos" className="buttonHref">
                    <div className="containerTwo">
                        <div className="imageTwo">
                            <img src={Image2} alt="Two" />
                        </div>
                        <div className="textTwo">
                            <h2>NOSSOS DESENHOS</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum omnis exercitationem voluptates perferendis temporibus pariatur
                            </p>
                        </div>
                    </div>
                </a>
                <a href="#" className="buttonHref">
                    <div className="container">
                        <div className="text">
                            <h2>TESTE SOBRE ALINHAMENTO DE TEXTO PARA DIV</h2>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Earum omnis exercitationem voluptates perferendis temporibus pariatur
                            </p>
                        </div>
                        <div className="image">
                            <img src={Image3} alt="Three" />
                        </div>
                    </div>
                </a>
                <a href="#" className="buttonHref">
                    <div className="containerTwo">
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
                </a>
            </div>
        </>
    )
}