import { useState } from "react"

const Pokemon = () => {
    
    let url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    let [contador, setContador] = useState(1)

    return (
        <>
            <button onClick={() => setContador(contador => contador <= 1 ? 1 : contador - 1)}>
                Anterior Pokemon
            </button>
            <h2>ID: {contador}</h2>
            <img src={url + contador + ".png"} alt="pokemon" width={200} />
            <button onClick={() => setContador(contador => contador + 1)}>
                Próximo Pokemon
            </button>
        </>
    )
}

export default Pokemon