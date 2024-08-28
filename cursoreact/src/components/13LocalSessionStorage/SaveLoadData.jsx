import { useState } from "react"

const SaveLoadData = () => {

    const [aluno, setAluno] = useState({})
        
    const alunostatic = {
        nome: "Jefferson",
        curso: "SI",
        Ira: 8.0
    }

    const saveData = () => {
        /* localStorage.setItem("aluno", JSON.stringify(alunostatic)) */
        sessionStorage.setItem("aluno", JSON.stringify(alunostatic))
        alert("Dado salvo com sucesso!")
    }

    const loadData = () => {
        /* const data = localStorage.getItem("aluno") */
        const data = sessionStorage.getItem("aluno")
        setAluno(JSON.parse(data))
        console.log(data)
    }
    return (
        <div>
            <h1>SaveLoadData</h1>

            <span>{JSON.stringify(aluno)}</span>

            <button onClick={() => saveData()}>Save Data</button>

            <button onClick={() => loadData()}>Load Data</button>
        </div>
    )
}

export default SaveLoadData