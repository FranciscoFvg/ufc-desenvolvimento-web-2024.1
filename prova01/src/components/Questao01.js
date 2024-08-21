const Questao01A = () => {

  const lista = [
    {a:10, b:3, c: 7},
    {a:5, b:-3, c: 9},
    {a:1, b:9, c: 40}
    ]
    
  return (
    <div>
      <h1>Questao01</h1>
      {/* Chamando o componente Questao01B e passando o props lista criado acima */}
      <Questao01B props={lista}/>
    </div>
  )
}

function Questao01B({props}) {

  // Função que analisa um objeto passado (vindo da função map) e compara os valores para encontrar o maior 
  const maiorObjeto = (objeto) => {
    if (objeto.a > objeto.b && objeto.a > objeto.c) {
      return objeto.a
    } else if (objeto.b > objeto.a && objeto.b > objeto.c) {
      return objeto.b
    } else {
      return objeto.c
    }
  }

  return (
    <div>
      <ul>
        {/* Função map que percorre o array lista passado via props, e analisa cada objeto para encontrar o maior e mostra em formato de lista */}
        {props.map((item) => (
          <li>Maior objeto: {maiorObjeto(item)} entre {JSON.stringify(item)}</li>
        ))}
      </ul>
    </div>
  )
}

export {Questao01A, Questao01B}