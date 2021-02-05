import { Col  } from "react-bootstrap";

export const CardEndereco = ({ data }) => {
  return (
    <Col md={4} >
      <div class="loja">
        <h3>{data.local}</h3>
        <p>{data.endereco}</p>
        <p>{data.complemento}</p>
        <p>{data.bairro}</p>
        <p>{data.fone}</p>
      </div>
    </Col >
  );
};
