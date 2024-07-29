import professores from "../data/db_professor"
import '../css/crud.css'

import { Link } from "react-router-dom"

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
              <td>
                <Link className="btn btn-secondary mx-1" to={`/professor/editar/${professor.id}`}>Editar</Link>
                <Link className="btn btn-danger" to={`/professor/editar/${professor.id}`}>Excluir</Link>
              </td>
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
              <th scope="col">acoes</th>
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