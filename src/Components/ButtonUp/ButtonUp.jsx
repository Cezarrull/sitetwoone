import { useEffect } from 'react';
import './ButtonUp.css';
import { ArrowUp } from "@phosphor-icons/react";

export function ButtonUp() {
    useEffect(() => {
        const toTop = document.getElementById("buttonUp");

        const handleScroll = () => {
            if (toTop) {  // Verifique se o elemento existe
                toTop.classList.toggle("active", window.scrollY > 1000);
            }
        };

        window.addEventListener("scroll", handleScroll);

        // Limpe o ouvinte de eventos quando o componente for desmontado
        return () => window.removeEventListener("scroll", handleScroll);
    }, []); // A matriz de dependência vazia garante que isso seja executado apenas uma vez após a montagem

    return (
        <>
            <a href="#" className="buttonUp" id="buttonUp">
                <ArrowUp size={20} weight="bold" />
            </a>
        </>
    );
}