import { Col } from "react-bootstrap";
import { Imagem } from "../../components";
import "./cardproduto.css";

export const CardProduto = ({ data }) => {
  return (
    <>
      <Col md={3} className="itemproduto">
        <Imagem className="img" name={data.imagem} />
        <h1 className="titulo">{data.nome}</h1>
        <span className="original">R${data.preco}</span>
        <span className="promocao">R$ {data.preco_promocao}</span>
      </Col>
    </>
  );
};
