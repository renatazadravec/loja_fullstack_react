import React from "react";
import { ListGroup } from "react-bootstrap";
import axios from "axios";
import "./listacategorias.css";

export const ListaCategorias = ({ setFilter }) => {
  const [categorias, setCategorias] = React.useState([]);

  

  React.useEffect(() => {
    axios
      .get("http://localhost:8000/categoria")
      .then((response) => {
        setCategorias(response.data.categorias);
      });
  }, []);

  return (
    <div className="categorias">
      <h3>Categorias</h3>

      <ListGroup variant="flush">
        <ListGroup.Item
          className="itemCategoria"
          onClick={() => setFilter(null)}
        >
          Todos
        </ListGroup.Item>
        {categorias.map((cat, key) => (
          <ListGroup.Item
            className="itemCategoria"
            key={key}
            onClick={() => setFilter(cat.slug)}
          >
            {cat.nome}
          </ListGroup.Item>
        ))}
      </ListGroup>
    </div>
  );
};
