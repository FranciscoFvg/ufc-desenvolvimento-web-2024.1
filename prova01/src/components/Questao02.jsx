import { useState } from "react"

const Questao02 = () => {

    // Existem dois useState, um para alterar a imagem e outro para saber a posição atual do pikachu
    const [posicao, setPosicao] = useState(0)
    const [imagem, setImagem] = useState('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png')

    // Função que altera a imagem e a posição do pikachu, verificando se a posição atual é 0 ou 1
    const mudarPosicao = () => {
        if (posicao === 0) {
            setPosicao(1)
            setImagem('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/25.png')
        } else if (posicao === 1) {
            setPosicao(0)
            setImagem('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png')
        }
    }

    return (
        <div>
            <h1>Questao02</h1>
            {/* Imagem do pikachu usando o useState imagem e botão chamando a função mudarPosicao para verificar e alterar a imagem atual*/}
            <img src={imagem} alt="" />
            <button onClick={mudarPosicao}>Mudar posição</button>
        </div>
    )
}

export default Questao02