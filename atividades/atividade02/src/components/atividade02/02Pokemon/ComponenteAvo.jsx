import ComponenteFilho from "./ComponenteFilho";
import { PokemonContexto } from "./PokemonContext";

const ComponenteAvo = () => {

    const numero = 1
    const url = `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/`

    return (
        <>
            <h3>Componente Avo</h3>
            <img src={url+ numero + ".png"} alt={numero} />
            <PokemonContexto.Provider value={{numero, url}}>
                <ComponenteFilho />
            </PokemonContexto.Provider>
        </>
    )
}

export default ComponenteAvo