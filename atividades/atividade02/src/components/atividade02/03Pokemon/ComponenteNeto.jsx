import { useContext } from "react";
import { PokemonContexto } from "./PokemonContext";

const Componenteneto = () => {

    const {numero, url} = useContext(PokemonContexto)

    return (
        <div>
            <h3>Componente Neto</h3>
            <img src={url+ (numero + 2)+ ".png"} alt={numero+2} />
        </div>
    )
}

export default Componenteneto