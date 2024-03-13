import { useState } from "react";
import PokemonImagem from "./PokemonImagem";
import { PokemonContexto } from "./PokemonContext";


const PokemonPrincipal = () => {

    const [id, setId] = useState(43)

    return (
        <>
            <h3>Pokemon {id}!</h3>
            <PokemonContexto.Provider value={{id, setId}}>
                <PokemonImagem />
            </PokemonContexto.Provider>
        </>
    );
};

export default PokemonPrincipal