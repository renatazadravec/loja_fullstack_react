import { Form, Button, Table } from "react-bootstrap";
import { PageTitle } from "../../components";
import ImagemMail from "../../images/email.jpg";
import ImagemWhats from "../../images/whatsapp.png";
import "./contato.css";
import axios from "axios";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";

/*
  const registerContato = (event) => {
    event.preventDefault();

    var formData = new FormData(event.target);

    const url = "http://api.projetoloja.sytes.net/contato-guarda.php";

    fetch(url, {
      method: "POST",
      body: formData,
    }).then(response=>console.log(response));

  };
*/
export default () => {
  const { register, handleSubmit } = useForm();

  const handleOnSubmit = (data) => {
    axios.post("http://localhost:3210/contatos", data).then((response) => {
      alert("Cadastrado com Sucesso");
      window.location.reload();
    });
  };

  const [contatos, setContatos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3210/contatos").then(function (response) {
      //console.log(response.data)
      setContatos(response.data);
      //console.log(setContatos)
    });
  }, []);

  return (
    <div className="pagina-contato">
      <PageTitle titulo="Fale Conosco" />
      <div class="contatos">
        <div class="contato">
          <img src={ImagemMail} />
          <p>contato@fullstackeletro.com</p>
        </div>

        <div class="contato">
          <img src={ImagemWhats} />
          <p>(11) 99999-9999</p>
        </div>
      </div>
      <Form onSubmit={handleSubmit(handleOnSubmit)}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            type="text"
            name="nome"
            placeholder="Seu Nome"
            ref={register}
          />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control
            as="textarea"
            name="mensagem"
            placeholder="Sua Mensagem"
            rows={3}
            ref={register}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Nome</th>
            <th>Mensagem</th>
          </tr>
        </thead>
        <tbody>
          {contatos &&
            contatos.map((item) => (
              <tr key={item._id}>
                <td>{item.nome}</td>
                <td>{item.mensagem}</td>
              </tr>
            ))}
        </tbody>
      </Table>
    </div>
  );
};
