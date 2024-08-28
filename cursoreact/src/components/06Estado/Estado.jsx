import { useState } from "react"

const Estado = () => {

    //let contador = 0
    let [contador, setContador] = useState(0)

    const incrementarContador = () => {
        //contador = contador + 1
        setContador(contador => contador + 1)
    }

    return (
        <>
            <h2>Contador: {contador}</h2>
            <button onClick={() => incrementarContador()}>
                Incrementar Contador!
            </button>
        </>
    )
}

export default Estado