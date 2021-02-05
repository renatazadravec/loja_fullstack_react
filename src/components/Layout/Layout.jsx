import { Container } from "react-bootstrap";

import { Menu } from "./Menu";
import { Footer } from "./Footer";
import "./layout.css"

export const Layout = ({ children }) => {
  return (
    <>
      <Menu />
      <Container className="containerPrincipal">{children}</Container>
      <Footer />
    </>
  );
};
