import ComFilho from "./ComFilho"

const ComPai = () => {

    let mensagemParaFilho = "Oi filho, você me disse: "

    const receberMensagemDoFilho = (msg) => {
        alert("Recebi do meu filho: " + msg)
    }

    return (
        <>
            <ComFilho mensagem={mensagemParaFilho} enviarMensagemParaOPai={receberMensagemDoFilho}/>
        </>
    )
}

export default ComPai