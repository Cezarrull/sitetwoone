import { Header } from "../../Components/Header/Header";
import './Desenhos.css'

import { ButtonUp } from "../../Components/ButtonUp/ButtonUp";
import { ArrowLeft } from "@phosphor-icons/react";
import { Link } from "react-router-dom";

import bgImage from '../../Assets/bgImage.jpg'
import bgMobile from '../../Assets/bgImageMobile.jpg'
import pinPng from '../../Assets/Pin.png'
import fitaPng from '../../Assets/Desenhos/fita.png'

/*/////////////// Import Images ////////////////*/
import Image1 from "../../Assets/Desenhos/img1.jpg"
import Image1m from "../../Assets/Desenhos/img1m.jpg"
import Image2 from "../../Assets/Desenhos/img2.jpg"
import Image2m from "../../Assets/Desenhos/img2m.jpg"
import Image3 from "../../Assets/Desenhos/img3.jpg"
import Image3m from "../../Assets/Desenhos/img3m.jpg"
import Image4 from "../../Assets/Desenhos/img4.jpg"
import Image4m from "../../Assets/Desenhos/img4m.jpg"
import Image5 from "../../Assets/Desenhos/img5.jpg"
import Image5m from "../../Assets/Desenhos/img5m.jpg"
import Image6 from "../../Assets/Desenhos/img6.jpg"
import Image6m from "../../Assets/Desenhos/img6m.jpg"
import Image7 from "../../Assets/Desenhos/img7.jpg"
import Image7m from "../../Assets/Desenhos/img7m.jpg"
import Image8 from "../../Assets/Desenhos/img8.jpg"
import Image8m from "../../Assets/Desenhos/img8m.jpg"
import Image9 from "../../Assets/Desenhos/img9.jpg"
import Image9m from "../../Assets/Desenhos/img9m.jpg"
import Image10 from "../../Assets/Desenhos/img10.jpg"
import Image10m from "../../Assets/Desenhos/img10m.jpg"
import Image11 from "../../Assets/Desenhos/img11.jpg"
import Image11m from "../../Assets/Desenhos/img11m.jpg"
import Image12 from "../../Assets/Desenhos/img12.jpg"
import Image12m from "../../Assets/Desenhos/img12m.jpg"
import Image13 from "../../Assets/Desenhos/img13.jpg"
import Image13m from "../../Assets/Desenhos/img13m.jpg"
import Image14 from "../../Assets/Desenhos/img14.jpg"
import Image14m from "../../Assets/Desenhos/img14m.jpg"
import Image15 from "../../Assets/Desenhos/img15.jpg"
import Image15m from "../../Assets/Desenhos/img15m.jpg"
import Image16 from "../../Assets/Desenhos/img16.jpg"
import Image16m from "../../Assets/Desenhos/img16m.jpg"
import Image17 from "../../Assets/Desenhos/img17.jpg"
import Image17m from "../../Assets/Desenhos/img17m.jpg"
import Image18 from "../../Assets/Desenhos/img18.jpg"
import Image18m from "../../Assets/Desenhos/img18m.jpg"
import Image19 from "../../Assets/Desenhos/img19.jpg"
import Image19m from "../../Assets/Desenhos/img19m.jpg"
import Image20 from "../../Assets/Desenhos/img20.jpg"
import Image20m from "../../Assets/Desenhos/img20m.jpg"
/*/////////////////////////////////////////////////*/

export function Desenhos() {
    return(
        <>
        <Header />
        <ButtonUp />
        <Link to="/" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
        <img src={bgImage} alt="" className='bg'/>
        <img src={bgMobile} alt="" className='bgMobile'/>

            <div className="desenhoBody">
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image1} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image1m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image2} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image2m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image3} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image3m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image4} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image4m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image5} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image5m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image6} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image6m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image7} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image7m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image8} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image8m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image9} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image9m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image10} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image10m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image11} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image11m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image12} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image12m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image13} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image13m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image14} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image14m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image15} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image15m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image16} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image16m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image17} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image17m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image18} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image18m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image19} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image19m} alt="" />
                        </div>
                    </div>
                </div>
                <div className="content">
                <img src={pinPng} alt=""  className="pin"/>
                <img src={fitaPng} alt="" className="fita"/>
                    <div className="contentOne">
                        <div className="titleContent">
                            <h2>Cezar</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image20} alt="" />
                        </div>
                    </div>
                    <div className="contentTwo">
                        <div className="titleContent">
                            <h2>Lala</h2>
                        </div>
                        <div className="contentImages">
                            <img src={Image20m} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}