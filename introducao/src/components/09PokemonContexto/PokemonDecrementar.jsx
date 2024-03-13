import { useContext } from "react";
import { PokemonContexto } from "./PokemonContext";

const PokemonDecrementar = () => {

    const {setId} = useContext(PokemonContexto)

    return (
        <>
            <button onClick={() => setId(id => id - 1)}>Decrementar</button>
        </>
    );
};

export default PokemonDecrementar