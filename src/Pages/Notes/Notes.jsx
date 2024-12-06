import { Header } from "../../Components/Header/Header";
import './Notes.css'
import bgMobile from '../../Assets/bgImageMobile.jpg'
import bgImage from '../../Assets/bgImage.jpg'
import { Link } from "react-router-dom";
import { ArrowLeft, X } from "@phosphor-icons/react";

import PostItBack from '../../Assets/Notas/postitBack.png'
import PostIt from '../../Assets/Notas/postit.png'
import { ButtonUp } from "../../Components/ButtonUp/ButtonUp";
import { useState } from "react";

export function Notes() {
    const [active, setActive] = useState(null)

    const buttonCloseNote = (index) => {
        if (active !== index) {
            setActive(index);
        }
    }

    return(
        <>
        <Header />
        <Link to="/" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
        <ButtonUp />
        <img src={bgImage} alt="" className='bg'/>
        <img src={bgMobile} alt="" className='bgMobile'/>

            <div className="noteBody">
                <div className={`messageContainer ${active === 0 ? 'close' : ''}`}>
                    <div className="messageNote">
                        <X size={32} color="white" className="buttonCloseNote" onClick={() => buttonCloseNote(0)}></X>
                        <p>clique em cima da nota para ver o recado </p>
                    </div>
                </div>
                <div className="containerNote">
                    <div className="contentNote">
                        <img src={PostItBack} alt="" className="postBack"/>
                            <p className="textNote">test test</p>
                        <img src={PostIt} alt="" className="postUp"/>
                    </div>
                    <div className="contentNote">
                        <img src={PostItBack} alt="" className="postBack"/>
                            <p className="textNote">test test</p>
                        <img src={PostIt} alt="" className="postUp"/>
                    </div>
                    <div className="contentNote">
                        <img src={PostItBack} alt="" className="postBack"/>
                            <p className="textNote">test test</p>
                        <img src={PostIt} alt="" className="postUp"/>
                    </div>
                    <div className="contentNote">
                        <img src={PostItBack} alt="" className="postBack"/>
                            <p className="textNote">test test</p>
                        <img src={PostIt} alt="" className="postUp"/>
                    </div>
                    <div className="contentNote">
                        <img src={PostItBack} alt="" className="postBack"/>
                            <p className="textNote">test test</p>
                        <img src={PostIt} alt="" className="postUp"/>
                    </div>
                    <div className="contentNote">
                        <img src={PostItBack} alt="" className="postBack"/>
                            <p className="textNote">test test</p>
                        <img src={PostIt} alt="" className="postUp"/>
                    </div>
                </div>
            </div>
        </>
    )
}