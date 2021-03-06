import "../styles/App.scss";
import { Route, Switch } from "react-router-dom";
import { useState, useEffect } from "react";
import getByHouse from "../services/callToApi";
import CharacterList from "./CharacterList";
import CharacterDetail from "./CharacterDetail";
import Filters from "./Filters";
import logo from "../images/logoHarry.png";

function App() {
  //States
  const [listOfCharacters, setListOfCharacters] = useState([]);
  const [selectedHouse, setSelectedHouse] = useState("gryffindor");
  const [filterName, setFilterName] = useState("");
  const [filterSpecie, setFilterSpecie] = useState("");
  //UseEffect
  useEffect(() => {
    getByHouse(selectedHouse).then((response) => {
      setListOfCharacters(response);
    });
  }, [selectedHouse]);

  const charactersFiltered = listOfCharacters
    .filter((character) => {
      return character.name.toLowerCase().includes(filterName.toLowerCase());
    })
    .filter((character) => {
      return character.specie
        .toLowerCase()
        .includes(filterSpecie.toLowerCase());
    });

  //Render functions
  const renderCharacterDetail = (props) => {
    const routeId = parseInt(props.match.params.id);
    const foundCharacter = listOfCharacters.find((character) => {
      console.log(routeId, character.id);
      return character.id === routeId;
    });
    return <CharacterDetail character={foundCharacter} />;
  };
  //Handler functions

  return (
    <div>
      <header className="header">
        <img src={logo} alt="titulo" className="header__logo" />
        <h1>Buscador de personajes de la saga </h1>
      </header>
      <main>
        <Switch>
          <Route path="/" exact>
            <Filters
              setSelectedHouse={setSelectedHouse}
              selectedHouse={selectedHouse}
              filterName={filterName}
              setFilterName={setFilterName}
              setFilterSpecie={setFilterSpecie}
              filterSpecie={filterSpecie}
            />
            <CharacterList characters={charactersFiltered} />
          </Route>
          <Route path="/character/:id" render={renderCharacterDetail}></Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
