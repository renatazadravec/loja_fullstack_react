import {lazy, Suspense } from "react";
import { Container } from "react-bootstrap";

//import { Menu } from "./Menu";
//import { Footer } from "./Footer";
import "./layout.css"

const Menu = lazy(()=>import("./Menu"))
const Footer = lazy(()=>import("./Footer"))

export const Layout = ({ children }) => {
  return (
    <>
      <Suspense fallback={<p>Carregando...</p>}><Menu /></Suspense>
      <Container className="containerPrincipal">{children}</Container>
      <Suspense fallback={<p>Carregando...</p>}><Footer /></Suspense>
    </>
  );
};
