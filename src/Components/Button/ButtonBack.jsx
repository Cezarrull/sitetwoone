import { Link } from "react-router-dom"
import './ButtonBack.css'

import { ArrowLeft } from "@phosphor-icons/react"

export function ButtonBack() {
    return (
        <>
            <Link className="buttonBack"><ArrowLeft size={16}/>Voltar</Link>
        </>
    )
}