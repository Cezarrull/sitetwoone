import { Header } from "../../Components/Header/Header";
import './Notes.css'
import bgMobile from '../../Assets/bgImageMobile.jpg'
import bgImage from '../../Assets/bgImage.jpg'

export function Notes() {
    return(
        <>
        <Header />
        <img src={bgImage} alt="" className='bg'/>
        <img src={bgMobile} alt="" className='bgMobile'/>
        
            <div className="noteBody">

            </div>
        </>
    )
}