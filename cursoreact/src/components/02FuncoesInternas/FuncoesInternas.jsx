const FuncoesInternas = () => {

    let numero1 = 10;
    let numero2 = 20;

    const soma = (n1, n2) => {
        return n1 + n2
    }

    const subtracao = (n1, n2) => {
        return n1 - n2
    }

    const multiplicacao = (n1, n2) => {
        return n1 * n2
    }

    const divisao = (n1, n2) => {
        return n1 / n2
    }

    return (
        <div>
            <h1>Funções Internas - Calculadora</h1>
            <h2>Soma: {soma(numero1, numero2).toFixed(2)}</h2>
            <h2>Subtração: {subtracao(numero1, numero2).toFixed(2)}</h2>
            <h2>Multiplicação: {multiplicacao(numero1, numero2).toFixed(2)}</h2>
            <h2>Divisão: {divisao(numero1, numero2).toFixed(2)}</h2>
        </div>
    )
}

export default FuncoesInternas;