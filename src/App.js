import { useEffect, useState } from "react";
import "./App.css";

export default function App() {
  const [data, setData] = useState(undefined);

  useEffect(() => {
    getData()
  }, []);

  //Obtener
  const getData = async () => {
    const response = await fetch("https://rickandmortyapi.com/api/character");
    const characters = await response.json();
    setData(characters.results);
  };

  return (
    <div className="App">
      {data ? data.map((algo) => (
        <Post key={algo.id} value={algo} data={algo} ></Post>
      ))
        :
        <h1>No hay datos</h1>
      }
      <button onClick={getData}>get Data</button>
    </div>
  );

}

export function Post(props) {
  const { data } = props;
  return (
    <div>
      <img src={data.image} alt="Imagenes R&M" />
      <p>Ubicacion: {data.location.name}</p>
      <p>Origen: {data.origin.name}</p>
      <p>Especie: {data.species}</p>
      <p>Status: {data.status}</p>
    </div>
  );
}
