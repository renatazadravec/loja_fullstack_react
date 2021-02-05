import React from "react";
import { Row, Col } from "react-bootstrap";
import { PageTitle } from "../../components";
import axios from "axios";

import { ListaCategorias } from "./ListaCategorias";
import { CardProduto } from "./CardProduto";

export default () => {
  const [produtos, setProdutos] = React.useState([]);
  const [filter, setFilter] = React.useState(null);

  React.useEffect(() => {
    axios
      .get("http://localhost:8000/produto")
      .then((response) => {
        setProdutos(response.data.produtos);
      });
  }, []);

  return (
    <>
      <PageTitle titulo="Produtos" />

      <Row className="mt-5">
        <Col md={3}>
          <ListaCategorias setFilter={setFilter} />
        </Col>

        <Col md={9}>
          <Row>
            {filter != null
              ? produtos
                  .filter((produto) => produto.slug === filter)
                  .map((produto, key) => (
                    <CardProduto data={produto} key={key} />
                  ))
              : produtos.map((produto, key) => (
                  <CardProduto data={produto} key={key} />
                ))}
          </Row>
        </Col>
      </Row>
    </>
  );
};
