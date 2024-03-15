import Pai01 from "./components/atividade01/questao01/01Pai";
import {Memoria as PCM, PlacaMae as PCPM, PlacaDeVideo as PCPV} from "./components/atividade01/questao02/02MeuPC";
import {Arena, World, Hero, Enemy} from "./components/atividade01/questao03/03Batalha";

function App() {
  return (
    <div>
      <h1>Atividade 01</h1>
      <hr />
      <Pai01 />
      <hr />
      <PCM nome="Kingston 8GB" preco="R$ 400,00" />
      <PCPM nome="ASRock 8GB" preco="R$ 600,00" />
      <PCPV nome="MSI 8GB" preco="R$ 800,00" />
      <hr />
      <World>
        <Arena arena={"Arena 1"}>
          <Hero name="Coelho" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png" />
          <Enemy name="Centopeia" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png" />
        </Arena>
        <Arena arena={"Arena 2"}>
          <Hero name="Caranguejo" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png" />
          <Enemy name="Cavalo" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png" />
        </Arena>
        <Arena arena={"Arena 3"}>
          <Hero name="Tartaruga" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png" />
          <Enemy name="Minhocas" img="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png" />
        </Arena>
      </World>
    </div>
  );
}

export default App;