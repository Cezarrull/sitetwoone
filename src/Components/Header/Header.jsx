import { useState } from "react";
import './Header.css'
import { Link } from "react-router-dom";

export function Header() {
    const [active, setActive] = useState("nav__menu");
    const [icon, setIcon] = useState("nav__toggler");
    const [topic, setTopic] = useState("navLinkTopic");

    const navToggle = () => {
    if (active === "nav__menu") {
        setActive("nav__menu nav__active");
    } else setActive("nav__menu");

    // Icon Toggler
    if (icon === "nav__toggler") {
        setIcon("nav__toggler toggle");
    } else setIcon("nav__toggler");

    if (active === "nav_menu") {
        setTopic("navLinkTopic")
    } else {
        setTopic("navLinkTopic")
    }
};

    // Topic Toggler
    const navTopicToggle = () => {

    if (topic === "navLinkTopic") {
        setTopic("navLinkTopic_active")
    } else setTopic("navLinkTopic")
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
                    <div className="nav__item" id="itemTopics">
                        <div className={topic} onClick={navTopicToggle}>
                            Tópicos
                            <div className="topics">
                                <div className="navTopics" id="firstNavTopics">
                                    <Link to="/Pedido">Pedido</Link>
                                </div>
                                <div className="navTopics">
                                    <Link to="/Quiz">Quizzes</Link>
                                </div>
                                <div className="navTopics">
                                    <Link to="/Galeria">Galeria</Link>
                                </div>
                                <div className="navTopics" id="lastNavTopics">
                                    <Link to="/Desenhos">Desenhos</Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <li className="nav__item">
                        <Link to="/Social" className="nav__link">
                            Social
                        </Link>
                    </li>
                    <li className="nav__itemLast" id="last">
                        <Link to="/Sobre" className="nav__link">
                            Sobre
                        </Link>
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