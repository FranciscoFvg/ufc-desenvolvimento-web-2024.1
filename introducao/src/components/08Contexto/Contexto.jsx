import { Variavel } from "./VariavelContext"
import { useContext } from "react"

// Contexto
const CompA = () => {

    let variavelDeA = { texto : "Variável de A", curso : "React" }

    return (
        <>
            <Variavel.Provider value={variavelDeA}>
                <CompB/>
                <CompC/>
            </Variavel.Provider>
        </>
    )
}
const CompB = () => {

    const variavel = useContext(Variavel);

    return (
        <>
            <h2>B: {variavel.texto}</h2>
        </>
    )
}
const CompC = () => {
    return (
        <>
            <CompD/>
        </>
    )
}
const CompD = () => {
    return (
        <>
            <CompE/>
        </>
    )
}
const CompE = () => {

    const {curso} = useContext(Variavel);

    return (
        <>
            <h3>E: {curso}</h3>
        </>
    )
}

export { CompA, CompB, CompC, CompD, CompE }