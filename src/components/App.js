import "../styles/App.scss";
import { Link, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import getByHouse from "../services/callToApi";
import CharacterList from "./CharacterList";

function App() {
  //Variables
  //States
  const [listOfCharacters, setListOfCharacters] = useState([]);
  //No states
  //Functions
  //UseEffect
  useEffect(() => {
    getByHouse().then((response) => {
      setListOfCharacters(response);
    });
  }, []);

  //Render functions

  //Handler functions

  return (
    <div>
      <header>
        <h1>Harry Potter </h1>
      </header>
      <section>
        <form>
          <label htmlFor="">
            <input type="text" name="name" id="name" />
          </label>
          <select name="houses" id="houses">
            <option value="gryffindor">Gryffindor</option>
            <option value="slytherin">Slytherin</option>
            <option value="hufflepuff">Hufflepuff</option>
            <option value="ravenclaw">Ravenclaw</option>
          </select>
        </form>
      </section>
      <CharacterList characters={listOfCharacters} />
      <section>
        <a href=""></a>
        <article>
          <img src="" alt="" />
          <div>
            <p>Nombre</p>
            <p>
              <span>Estatus:</span>
            </p>
            <p>
              <span>Especie:</span>
            </p>
            <p>
              <span>Genero:</span>
            </p>
            <p>
              <span>Casa:</span>
            </p>
          </div>
        </article>
      </section>
    </div>
  );
}

export default App;
