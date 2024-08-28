import { useContext } from "react";
import { PokemonContexto } from "./PokemonContext";

const PokemonIncrementar = () => {

    const {setId} = useContext(PokemonContexto)

    return (
        <>
            <button onClick={() => setId(id => id + 1)}>Incrementar</button>
        </>
    );
};

export default PokemonIncrementar