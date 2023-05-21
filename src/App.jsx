import "./App.css";
import { useState } from 'react';


function App() {

   const [item, setItem] = useState("");
   const [lista, setLista] = useState([]);

   const enviaForm = (event) => {
    event.preventDefault();

    if (item === '') {
      alert('Preencha um novo item');
      return;
    }

    setLista([...lista, item]);

    

    }
  return (
    <div className="App">
      <header>
        <h2>Lista de Compras:</h2>
      </header>
      <div className="lista-compras-container">
        <ul className="lista-items">
        {lista.map((lista) => (
          <li>
            {lista}
          </li>
        ))}
        </ul>
      </div>
      <form className="form-add-item" action="#" method="post" onSubmit={enviaForm}>
        <fieldset>
          <div className="form-group mb-3">
            <label htmlFor="item">Adicionar Novo Item na Lista:</label>
            <input type="text" className="form-control" id="item" 
            onChange={(event) =>
              setItem(event.target.value)}
          />
          </div>
          <button className="btn btn-primary" type="submit">
            Adicionar
          </button>
        </fieldset>
      </form>
    </div>
  );
}

// 
// 

export default App;
