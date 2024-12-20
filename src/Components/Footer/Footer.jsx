import './Footer.css'
import { Link } from 'react-router-dom'
import { useEffect } from 'react';

export function Footer() {
    const saveScrollPosition = () => {
            sessionStorage.setItem('scrollPosition', window.scrollY);
        };
        
        useEffect(() => {
            const savedScrollPosition = sessionStorage.getItem('scrollPosition');
            if (savedScrollPosition) {
                window.scrollTo(0, parseInt(savedScrollPosition, 10)); 
            } else {
                window.scrollTo(0, 0); 
            }
        }, []);

    return(
        <>
            <div className="footerBody">
                <div className="topicsFooter">
                    <div className="itensTopicsFooter">
                        <h2>TWOONE</h2>
                        <div className="itensLinks">
                            <Link to="/Social" className="linksFooter"  onClick={saveScrollPosition} >Sociais</Link>
                            <Link to="/Sobre" className="linksFooter"  onClick={saveScrollPosition} >Sobre</Link>
                            <Link to="/TWOONE" className="linksFooter"  onClick={saveScrollPosition} >Mais</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}