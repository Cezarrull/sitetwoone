import { Header } from "../../Components/Header/Header";
import './Notes.css'
import bgMobile from '../../Assets/bgImageMobile.jpg'
import bgImage from '../../Assets/bgImage.jpg'
import { Link } from "react-router-dom";
import { ArrowLeft } from "@phosphor-icons/react";

import PostItBack from '../../Assets/Notas/postitBack.png'
import PostIt from '../../Assets/Notas/postit.png'

export function Notes() {
    return(
        <>
        <Header />
        <Link to="/" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
        <img src={bgImage} alt="" className='bg'/>
        <img src={bgMobile} alt="" className='bgMobile'/>

        
            <div className="noteBody">
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
                </div>
            </div>
        </>
    )
}