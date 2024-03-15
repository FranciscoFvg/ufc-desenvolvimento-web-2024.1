import ComponenteNeto from "./ComponenteNeto";
import { useContext } from "react";
import { PokemonContexto } from "./PokemonContext";

const ComponenteFilho = () => {

    const {numero, url} = useContext(PokemonContexto)

    return (
        <>
            <h3>Componente Filho</h3>
            <img src={url+ (numero+1) + ".png"} alt={numero+1} />
            <ComponenteNeto/>
        </>
    )
}

export default ComponenteFilho