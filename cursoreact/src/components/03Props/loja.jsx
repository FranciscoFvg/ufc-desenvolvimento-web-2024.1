import Produto from "./Produto"

const Loja = () => {
    return (
        <div>
            <h1>Loja</h1>
            <hr />
            <Produto nome="Notebook" preco={2500} categoria={"Hardware"}/>
            <hr />
            <Produto nome="Smartphone" preco={1300} categoria={"Hardware"} />
            <hr />
            <Produto nome="Tablet" preco={800} categoria={"Hardware"} />
        </div>
    )
}

export default Loja;