import { Row } from "react-bootstrap";
import { PageTitle } from "../../components";
import { CardEndereco } from "./CardEndereco";

export default () => {
  const enderecosData = [
    {
      local: "Rio de Janeiro",
      endereco: "Avenida Presidente Vargas, 5000",
      complemento: "10 º andar",
      bairro: "Centro",
      fone: "(21) 3333-3333",
    },

    {
      local: "Sao Paulo",
      endereco: "Avenida Vargas, 300",
      complemento: "10 º andar",
      bairro: "Centro",
      fone: "(11) 3333-3333",
    },

    {
      local: "Santa Catarina",
      endereco: "Avenida Presidente Vargas, 5000",
      complemento: "10 º andar",
      bairro: "Centro",
      fone: "(18) 3333-3333",
    },
  ];

  return (
    <>
      <PageTitle titulo="Nossas Lojas" />

      <Row className="mt-5">
        {enderecosData.map((endereco, key) => (
          <CardEndereco key={key} data={endereco} />
        ))}
      </Row>
    </>
  );
};
