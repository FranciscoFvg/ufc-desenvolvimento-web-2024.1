const Filho01 = ({altura, peso}) => {

    const calculoImc = (a, p) => {
        return (p / (a * a)).toFixed(2)
    }

    const estadoImc = () => {
        const imc = calculoImc(altura, peso)
        if (imc < 18){
            return <h3>Abaixo do peso</h3>
        }else if(imc > 25){
            return <h3>Acima do peso</h3>
        }else{
            return <h3>Peso ideal</h3>
        }
    }

    return (
        <div>
            <h2>Pai e Filho</h2>
            <p>Altura: {altura}</p>
            <p>Peso: {peso}</p>
            <p>IMC: {calculoImc(altura, peso)}</p>
            {estadoImc()}
        </div>
    )
}

export default Filho01