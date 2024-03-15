import { Children, cloneElement } from "react"

export const Hero = ({name, img, arena}) => {

    return (
        <div>
            <h2>Hero {name} from {arena}</h2>
            <img src={img} alt={name} />

        </div>
    )
}

export const Enemy = ({name, img, arena}) => {

    return (
        <div>
            <h2>Enemy {name} from {arena}</h2>
            <img src={img} alt={name} />
        </div>
    )
}

// Código padrão
/* export const Arena = () => {

    return (
        <>
            <h1>Arena</h1>
            <Hero name="Coelho" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png" />
            <Enemy name="Centopeia" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png" />
        </>
    )
} */

// Arena OPCIONAL
export const Arena = ({children,arena}) => {

    return (
        <>
            <h1>Arena {arena}</h1>

            {Children.map(children, (el) => {
                return cloneElement(el, {arena})
            })}

        </>
    )
}

export const World = ({children}) => {
    return (
        <>
            {children}
        </>
    )
}