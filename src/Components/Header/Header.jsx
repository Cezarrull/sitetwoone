import { useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";

export function Header() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const navToggle = () => {
    if (active === "nav__menu") {
        setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler

    if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");
};

    return(
        <>
            <nav className="nav">
                <a href="/" className="nav__brand">Twoone</a>

                <ul className={active}>
                    <li className="nav__itemFirst" id="first">
                        <Link to="/" className="nav__link">
                            Início
                        </Link>
                    </li>
                    <li className="nav__item" id="itemTopics">
                        <a href="#" className="nav__link">
                            Tópicos
                            <div className="topics">
                                <li className="navTopics" id="firstNavTopics">
                                    <Link to="/Pedido">Pedido</Link>
                                </li>
                                <li className="navTopics">
                                    <Link to="/Quiz">Quizzes</Link>
                                </li>
                                <li className="navTopics">
                                    <Link to="/Galeria">Galeria</Link>
                                </li>
                                <li className="navTopics" id="lastNavTopics">
                                    <Link to="/Desenhos">Desenhos</Link>
                                </li>
                            </div>
                        </a>
                    </li>
                    <li className="nav__item">
                        <Link to="/Social" className="nav__link">
                            Social
                        </Link>
                    </li>
                    <li className="nav__itemLast" id="last">
                        <a href="#" className="nav__link">
                            Sobre
                        </a>
                    </li>
                </ul>
                <div onClick={navToggle} className={icon}>
                    <div className="line1"></div>
                    <div className="line2"></div>
                    <div className="line3"></div>
                </div>
            </nav>
        </>
    )
}

// header bg add on scrollY 

window.addEventListener("scroll", function() {
    var header = document.querySelector("nav");
    header.classList.toggle("sticky", window.scrollY > 0)
})