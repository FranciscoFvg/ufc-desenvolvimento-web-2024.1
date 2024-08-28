import { useContext } from "react";
import { PokemonContexto } from "./PokemonContext";

import PokemonDecrementar from "./PokemonDecrementar";
import PokemonIncrementar from "./PokemonIncrementar";

const PokemonImagem = () => {

    const url = "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/"
    const {id} = useContext(PokemonContexto)
    
    return (
        <>
            <img src={url + id + ".png"} alt="Pokemon" width={150} />
            <PokemonDecrementar />
            <PokemonIncrementar />
        </>
    );
};

export default PokemonImagem