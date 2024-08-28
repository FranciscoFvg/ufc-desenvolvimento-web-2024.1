import axios from 'axios'
import { useState, useEffect } from "react"

const CovidAxios = () => {
    const [covid, setCovid] = useState({})

    useEffect(
        () => {
            axios
                .get("https://covid19-brazil-api.now.sh/api/report/v1/")
                .then(
                    (res) => {
                        setCovid(res.data.data[8])
                        console.log(res.data.data)
                    }
                )
                .catch(
                    (error) => {
                        console.log(error)
                    }
                )
        }
        ,
        []
    )

    return (
        <>
            <h3>Covid Ceará</h3>
            <h4>Casos: {covid.cases}</h4>
            <h4>Mortes: {covid.deaths}</h4>
        </>
    )
}

export default CovidAxios