import SistemaSolar from "./SistemaSolar"
import Planeta from "./Planeta"

const Galaxia = ({nome}) =>{
    return (
        <>
            <h1>Galaxia {nome}</h1>
            <hr />
            <SistemaSolar galaxia={nome}>
                <Planeta 
                    nome={"Mercúrio"} 
                    tipo={"Rochoso"} 
                    ordem={1} 
                    />
                <hr />
                <Planeta 
                    nome={"Vênus"} 
                    tipo={"Rochoso"} 
                    ordem={2} 
                    />
                <hr />
                <Planeta 
                    nome={"Terra"} 
                    tipo={"Rochoso"} 
                    ordem={3} 
                    />
                <hr />
                <Planeta 
                    nome={"Marte"} 
                    tipo={"Rochoso"} 
                    ordem={4} 
                    />
                <hr />
            </SistemaSolar>
        </>
    )
}

export default Galaxia