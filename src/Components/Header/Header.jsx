import { useState } from "react";
import './Header.css'

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
                        <a href="#" className="nav__link">
                            Início
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Sobre
                        </a>
                    </li>
                    <li className="nav__item">
                        <a href="#" className="nav__link">
                            Contato
                        </a>
                    </li>
                    <li className="nav__itemLast" id="last">
                        <a href="#" className="nav__link">
                            todos
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