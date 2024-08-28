// Prop Drilling
const CompA = () => {

    let variavelDeA = "Variável de A"

    return (
        <>
            <CompB variavelDeA={variavelDeA}/>
            <CompC variavelDeA={variavelDeA}/>
        </>
    )
}
const CompB = ({variavelDeA}) => {
    return (
        <>
            <h2>B: {variavelDeA}</h2>
        </>
    )
}
const CompC = ({variavelDeA}) => {
    return (
        <>
            <CompD variavelDeA={variavelDeA}/>
        </>
    )
}
const CompD = ({variavelDeA}) => {
    return (
        <>
            <CompE variavelDeA={variavelDeA}/>
        </>
    )
}
const CompE = ({variavelDeA}) => {
    return (
        <>
            <h3>E: {variavelDeA}</h3>
        </>
    )
}

export { CompA, CompB, CompC, CompD, CompE }