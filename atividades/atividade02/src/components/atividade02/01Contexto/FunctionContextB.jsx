// Forma Atual
import { useContext } from "react"
import ColorTheme from "./MyColorContext"

const FunctionContextB = () => {

    const {bkgB} = useContext(ColorTheme)

    return (
        <>
            <h1 style={{ backgroundColor: bkgB }}>
                Contexto B
            </h1>
        </>
    )
}

export default FunctionContextB