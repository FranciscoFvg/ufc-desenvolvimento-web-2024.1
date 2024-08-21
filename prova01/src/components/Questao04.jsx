import { useState, useEffect } from "react"

// PROMISE com 3 capitais fixas e suas respectivas populações retornadas com o resolve
const capitais = new Promise(
    (resolve, reject) => {
        resolve([
            {"capital":["Dublin"],"population":4994724},
            {"capital":["Nicosia"],"population":1207361},
            {"capital":["Madrid"],"population":47351567}
        ])
})

const Questao04 = () => {
    const [countries, setCountries] = useState([])

    // Função que retorna a Promise com 3 capitais fixas
    const getCountriesApi = () => {
        return capitais
    }

    // useEffect que inicia a função getCountriesApi, captura seu retorno com then/catch e seta os dois maiores e dois menores ao useState countries
    useEffect(() => {
        getCountriesApi()
        .then((response) => {
            const countriesList = response

            countriesList.sort((a, b) => {
                if (a.population > b.population) {
                    return 1
                }
                if (a.population < b.population) {
                    return -1
                }
                return 0
            })

            setCountries([countriesList[0], countriesList[1], countriesList[countriesList.length - 1], countriesList[countriesList.length - 2]])
        })
        .catch(error => console.log(error))

    }, [])
    return (
        <div>
            <h1>Questao04</h1>
            <p>Capital e Populacao da Europa dos dois menos populados e dois mais populado</p>
            {/* Mapeamento do array countries exibindo o capital e a população em formato de lista verificando quais os dois maiores e dois menores*/}
            <ul>
                {countries.map((item, index) => {
                    if (index === 0 || index === 1){
                        return (<li>{index + 1}º menor: {item.capital} - {item.population}</li>)
                    }else{
                        return (<li>{index - 2 + 1}º maior: {item.capital} - {item.population}</li>)
                    }
                })}
            </ul>
        </div>
    )
}

export default Questao04