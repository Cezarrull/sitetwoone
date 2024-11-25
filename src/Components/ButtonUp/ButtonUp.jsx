import './ButtonUp.css'
import { ArrowUp } from "@phosphor-icons/react";

export function ButtonUp() {
    return(
        <>
            <a href="#" className="buttonUp" id="buttonUp"><ArrowUp size={20} weight="bold"/></a>
        </>
    )
}
window.addEventListener("scroll", function() {
    var header = document.getElementById("buttonUp");
    header.classList.toggle("active", window.scrollY > 1000)
})