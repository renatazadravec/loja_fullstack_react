import { Form, Button } from "react-bootstrap";
import { PageTitle } from "../../components";
import ImagemMail from "../../images/email.jpg";
import ImagemWhats from "../../images/whatsapp.png";
import "./contato.css";

export default () => {
  const registerContato = (event) => {
    event.preventDefault();

    var formData = new FormData(event.target);

    const url = "http://api.projetoloja.sytes.net/contato-guarda.php";

    fetch(url, {
      method: "POST",
      body: formData,
    }).then(response=>console.log(response));

  };

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

      <Form onSubmit={registerContato}>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Nome</Form.Label>
          <Form.Control type="text" name="nome" placeholder="Seu Nome" />
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Mensagem</Form.Label>
          <Form.Control as="textarea" name="mensagem" placeholder="Sua Mensagem" rows={3} />
        </Form.Group>

        <Button variant="primary" type="submit">
          Enviar
        </Button>
      </Form>
    </div>
  );
};
