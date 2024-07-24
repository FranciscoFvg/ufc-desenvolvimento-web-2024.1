import professores from "../data/db_professor"
import '../css/crud.css'

const Listar = () => {

  const renderizarProfessores = () => {
    return (
      <>
        {professores.map((professor) => {
          return (
            <tr>
              <th scope="row">{professor.id}</th>
              <td>{professor.nome}</td>
              <td>{professor.curso}</td>
              <td>{professor.titulacao}</td>
            </tr>
          )
        })}
      </>
    )
  }
  return (
    <div className="page-content">
      <h1>Listar Professores</h1>
      <div>
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">id</th>
              <th scope="col">nome</th>
              <th scope="col">curso</th>
              <th scope="col">titulacao</th>
            </tr>
          </thead>
          <tbody>
            {renderizarProfessores()}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Listar