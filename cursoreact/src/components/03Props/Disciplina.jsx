const Disciplina = ({nome, professor, carga_horaria}) => {
    return (
        <div>
            <h2>{nome}</h2>
            <h3>{professor}</h3>
            <h3>{carga_horaria}</h3>
        </div>
    )
}

export default Disciplina;