import { Header } from "../../Components/Header/Header";
import './Galeria.css';

import Image1 from '../Galeria/Photos/FotosPrimeiras/porto.jpg'
import Image2 from '../Galeria/Photos/PedidoDia/nosDoisPedido.jpg'
import bgImage from '../../Assets/bgImage.jpg'
import bgMobile from '../../Assets/bgImageMobile.jpg'
import { Link } from "react-router-dom";
import { ArrowLeft, Folder,FolderOpen } from "@phosphor-icons/react";

export function Galeria() {
    return(
        <>
            <Header />
            <Link to="/" className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
            <img src={bgImage} alt="" className='bg'/>
            <img src={bgMobile} alt="" className='bgMobile'/>
            <div className="galeriaBody">
                <div className="contentGaleria">
                    <Link to="/PrimeirasFotos">
                        <figure className="boxPhoto">
                                <img src={Image1} alt="" />

                                <figcaption className="detailsGallery">
                                    <h2>PRIMEIRAS FOTOS</h2>
                                    <Folder size={32} className="folder"/>
                                    <FolderOpen size={32} className="folderOpen"/>
                                </figcaption>
                        </figure>
                    </Link>
                    <Link to="/DiaDoPedido">
                        <figure className="boxPhoto">
                                <img src={Image2} alt="" />

                                <figcaption className="detailsGallery">
                                    <h2>DIA DO PEDIDO</h2>
                                    <Folder size={32} className="folder"/>
                                    <FolderOpen size={32} className="folderOpen"/>
                                </figcaption>
                        </figure>
                    </Link>
                </div>
            </div>
        </>
    )
}