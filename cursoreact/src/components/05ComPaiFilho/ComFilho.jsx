const ComFilho = ({mensagem, enviarMensagemParaOPai}) => {

    // Desestruturação
    //let mensagem = props.mensagem ?? "Mensagem Padrao"

    return (
        <>
            <h2>Mensagem do pai: {mensagem}</h2>
            <button onClick={() => enviarMensagemParaOPai("Amo você")}>
                Enviar mensagem para o pai
            </button>
        </>
    )
}

export default ComFilho