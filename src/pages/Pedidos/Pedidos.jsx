import React from "react";
import { PageTitle } from "../../components";
import { Form, Button } from "react-bootstrap";
import "./pedidos.css";

export default () => {
  const [produtos, setProdutos] = React.useState([]);

  React.useEffect(async () => {
    const url = "http://api.projetoloja.sytes.net/produtos-lista.php";
    const response = await fetch(url);
    setProdutos(await response.json());
  }, []);

  const registerPedido = (event) => {
    event.preventDefault();

    var formData = new FormData(event.target);

    const url = "http://api.projetoloja.sytes.net/pedidos-guarda.php";

    fetch(url, {
      method: "POST",
      body: formData,
    }).then((response) => console.log(response));
  };
  return (
    <>
      <PageTitle titulo="Pedidos" />

      <Form onSubmit={registerPedido}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome_cliente"
            placeholder="Seu Nome"
            required
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Endereço</Form.Label>
          <Form.Control
            type="text"
            name="endereco"
            placeholder="Seu Endereço"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Telefone</Form.Label>
          <Form.Control
            type="text"
            name="telefone"
            placeholder="Seu Telefone"
          />
        </Form.Group>

        <Form.Group controlId="exampleForm.ControlSelect1">
          <Form.Label>Nome do Produto</Form.Label>
          <Form.Control as="select" name="id_produto" required>
            <option>
              Selecione
            </option>
            {produtos.map((produto, key) => (
              <option value={produto.id} key={key}>
                {produto.nome}
              </option>
            ))}
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Valor Unitário</Form.Label>
          <Form.Control
            type="text"
            name="valor_unitario"
            placeholder="Valor Unitário"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Quantidade</Form.Label>
          <Form.Control
            type="number"
            name="quantidade"
            placeholder="Quantidade"
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Valor Total</Form.Label>
          <Form.Control
            type="text"
            name="valor_total"
            placeholder="Valor Total"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </>
  );
};
