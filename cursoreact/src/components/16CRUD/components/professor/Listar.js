import "../../css/crud.css"
import ProfessorService from "../../services/ProfessorService";

import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom";

import axios from "axios";

const Listar = () => {

  const [professores, setProfessores] = useState([])
  const navigate = useNavigate()

  useEffect(
    () => {
      ProfessorService
      .getProfessoresFetchAsyncAwait(data => setProfessores(data))
    }
    ,
    []
  )

  const handleDelete = (id) => {
    if (window.confirm(`Deseja excluir id = ${id}`)) {
      ProfessorService.deleteProfessor(
        id,
      (response) =>{
        alert(response)
      })

    }
  }

  const renderizarProfessores = () => {
    const vetorResultado = professores.map(
        (professor) => {
            return (
                <tr>
                    <th scope="row">{professor.id}</th>
                    <td>{professor.nome}</td>
                    <td>{professor.curso}</td>
                    <td>{professor.titulacao}</td>
                    <td>
                        <div className="button-content">
                            <Link 
                              to={`/professor/editar/${professor.id}`}
                              className="btn btn-primary"
                            >
                              Editar
                            </Link>
                            <button 
                              type="button" 
                              className="btn btn-danger"
                              onClick={() => handleDelete(professor.id)}
                            >
                              Apagar
                            </button>
                        </div>
                    </td>
                </tr>
            )
        }
    )
    return vetorResultado;
  };

  return (
    <div className="page-content">
      <h1>Listar Professor</h1>
      <div className="table-content">
        <table className="table table-striped table-bordered">
          <thead className="table-dark">
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Curso</th>
              <th scope="col">Titulação</th>
              <th scope="col"></th>
            </tr>
          </thead>
          <tbody>
            {renderizarProfessores()}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Listar;