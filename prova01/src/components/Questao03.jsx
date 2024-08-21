import { useState, useEffect } from "react"

import axios from "axios"

const Questao03 = () => {
    const [countries, setCountries] = useState([])

    // Função que pega os dados da API usando a biblioteca axios com async/await e retorna um array de objetos
    const getCountriesApi = async () => {
        let countries = []
        await axios.get("https://restcountries.com/v3.1/region/europe?fields=capital,population")
            .then((response) => {
                countries = response.data
            })
            .catch(error => console.log(error))

        return countries
    }

    // Função que ordena o array de objetos com base na população(pegos da função getCountriesApi) e setta os dois maiores e dois menores ao useState countries
    const calcularMenorMaiorPopulacao = async () => {
        var countriesList = await getCountriesApi()

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
    }

    return (
        <div>
            <h1>Questao03</h1>
            <p>Capital e Populacao da Europa dos dois menos populados e dois mais populados</p>
            <button onClick={calcularMenorMaiorPopulacao}>Ver paises</button>
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

export default Questao03