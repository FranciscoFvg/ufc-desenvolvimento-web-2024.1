import HelloWorld from "./components/01HelloWorld/HelloWorld";
import FuncoesInternas from "./components/02FuncoesInternas/FuncoesInternas";
import Loja from "./components/03Props/loja";
import Curso from "./components/03Props/Curso";
import Galaxia from "./components/04Children/Galaxia";
import ComPai from "./components/05ComPaiFilho/ComPai";
import Estado from "./components/06Estado/Estado";
import Pokemon from "./components/06Estado/Pokemon";

function App() {
  return (
    <div>
      <h1>Desenvolvimento de Software para WEB!</h1>
      {/* <h3>Prof. Jefferson de Carvalho</h3> */}
      {/* <HelloWorld /> */}
      {/* <FuncoesInternas /> */}
      {/* <Loja /> */}
      {/* <Curso /> */}
      {/* <Galaxia nome={"Via Lactea"}/> */}
      {/* <ComPai/> */}
      {/* <Estado/> */}
      <Pokemon/>
    </div>
  );
}

export default App;