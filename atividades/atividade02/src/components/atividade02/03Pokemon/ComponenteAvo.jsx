import ComponenteFilho from "./ComponenteFilho";
import { PokemonContexto } from "./PokemonContext";
import { useState } from "react";

const ComponenteAvo3 = () => {

    const [contador, setContador] = useState(1)
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

    return (
        <>
            <h3>Componente Avo</h3>
            <img src={url+ contador + ".png"} alt={contador} />
            <button onClick={() => setContador(contador => contador + 1)}>Incrementar</button>
            <PokemonContexto.Provider value={{numero: contador, url}}>
                <ComponenteFilho />
            </PokemonContexto.Provider>
        </>
    )
}

export default ComponenteAvo3