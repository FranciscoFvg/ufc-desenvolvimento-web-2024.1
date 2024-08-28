const Produto = ({nome, preco, categoria}) => {

    /* let objJson = {nome: "pia", preco: 1000, categoria: "casa"} */

    return (
        <div>
            <h2>Nome do produto: {nome}</h2>
            <h3>Categoria do produto: {categoria}</h3>
            <h3>Preço do produto: R$ {preco.toFixed(2)}</h3>
        </div>
    )
}

export default Produto;