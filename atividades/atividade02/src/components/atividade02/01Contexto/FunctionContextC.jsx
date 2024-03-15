// Forma Atual
import { useContext } from "react"

import ColorTheme from "./MyColorContext"
import FunctionContextD from "./FunctionContextD"

const FunctionContextC = () => {
    
    const {bkgC} = useContext(ColorTheme)
    return (
        <>
            <h1 style={{ backgroundColor: bkgC }}>
                Contexto C
            </h1>
            <FunctionContextD />
        </>
    )
}

export default FunctionContextC