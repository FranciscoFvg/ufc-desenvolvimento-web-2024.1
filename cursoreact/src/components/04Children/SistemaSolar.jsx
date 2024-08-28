import { Children, cloneElement } from "react"

const SistemaSolar = ({children, galaxia}) =>{
    return (
        <>
            <h2>Sistema Solar da galaxia {galaxia}</h2>
            <hr />
            {Children.map(children, (el) => {
                return cloneElement(el, {galaxia})
            })}
        </>
    )
}

export default SistemaSolar