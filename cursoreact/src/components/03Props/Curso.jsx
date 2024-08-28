import Displina from "./Disciplina"

const Curso = () => {
    return (
        <div>
            <h1>Curso de React</h1>
            <hr />
            <Displina nome="Introdução ao React" professor="Jefferson de Carvalho" carga_horaria="40" />
            <hr />
            <Displina nome="Fundamentos de React" professor="Jefferson de Carvalho" carga_horaria="40" />
            <hr />
            <Displina nome="Componentes React" professor="Jefferson de Carvalho" carga_horaria="40" />
            <hr />
            <Displina nome="Hooks React" professor="Jefferson de Carvalho" carga_horaria="40" />
        </div>
    )
}

export default Curso;